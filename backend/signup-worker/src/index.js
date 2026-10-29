const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

const CONSENT_VERSION = "drayn-launch-form-v1";

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...JSON_HEADERS, ...extraHeaders },
  });
}

function allowedOrigin(request, env) {
  const origin = request.headers.get("Origin");
  const configured = (env.ALLOWED_ORIGINS || "").split(",").map(v => v.trim()).filter(Boolean);
  return origin && configured.includes(origin) ? origin : null;
}

function corsHeaders(origin) {
  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-max-age": "86400",
    "vary": "Origin",
  };
}

function cleanText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[\u0000-\u001f\u007f]/g, "").slice(0, maxLength);
}

function validEmail(value) {
  return typeof value === "string" && value.length <= 254
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function bool(value) {
  return value === true;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true, service: "drayn-signup", mode: "signup-only" });
    }

    if (request.method === "OPTIONS") {
      const origin = allowedOrigin(request, env);
      if (!origin) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname !== "/api/signup" || request.method !== "POST") {
      return json({ error: "Not found" }, 404);
    }

    const origin = allowedOrigin(request, env);
    if (!origin) return json({ error: "Origin not allowed" }, 403);

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return json({ error: "Expected application/json" }, 415, corsHeaders(origin));
    }

    const declaredLength = Number(request.headers.get("content-length") || "0");
    if (declaredLength > 10000) {
      return json({ error: "Request too large" }, 413, corsHeaders(origin));
    }

    let input;
    try {
      input = await request.json();
    } catch {
      return json({ error: "Invalid JSON" }, 400, corsHeaders(origin));
    }

    if (cleanText(input.website, 200)) {
      return json({ ok: true }, 202, corsHeaders(origin));
    }

    const email = cleanText(input.email, 254).toLowerCase();
    const name = cleanText(input.name, 100);
    const earlyAccess = bool(input.earlyAccess);
    const newsletter = bool(input.newsletter);
    const partnerInterest = bool(input.partnerInterest);
    const privacyAcknowledged = bool(input.privacyAcknowledged);
    const privacyNoticeVersion = cleanText(input.privacyNoticeVersion, 40);

    if (!validEmail(email)) {
      return json({ error: "Enter a valid email address" }, 400, corsHeaders(origin));
    }
    if (!earlyAccess && !newsletter && !partnerInterest) {
      return json({ error: "Choose at least one request type" }, 400, corsHeaders(origin));
    }
    if (!privacyAcknowledged || !privacyNoticeVersion) {
      return json({ error: "Please review and acknowledge the privacy notice" }, 400, corsHeaders(origin));
    }

    const newsletterConsentAt = newsletter ? new Date().toISOString() : null;
    const ref = cleanText(input.ref, 100);
    const utmSource = cleanText(input.utmSource, 100);
    const utmMedium = cleanText(input.utmMedium, 100);
    const utmCampaign = cleanText(input.utmCampaign, 100);
    const now = new Date().toISOString();

    try {
      await env.DRAYN_SIGNUPS.prepare(
        "INSERT INTO signups (email, name, early_access, newsletter_consent, partner_interest, consent_version, newsletter_consent_at, privacy_notice_version, privacy_acknowledged_at, ref, utm_source, utm_medium, utm_campaign, origin, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
      ).bind(
        email, name || null, earlyAccess ? 1 : 0, newsletter ? 1 : 0,
        partnerInterest ? 1 : 0, CONSENT_VERSION, newsletterConsentAt,
        privacyNoticeVersion, now, ref || null, utmSource || null,
        utmMedium || null, utmCampaign || null, origin, now
      ).run();
    } catch (error) {
      console.error("Signup insert failed", error?.message || "unknown error");
      return json({ error: "We could not save your request. Please try again later." }, 500, corsHeaders(origin));
    }

    return json({ ok: true, message: "Your request has been received." }, 201, corsHeaders(origin));
  },
};

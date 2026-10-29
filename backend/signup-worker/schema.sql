-- DRAYN launch signup records.
-- Keep newsletter consent separate from early-access and partner interest.
-- Each submission is retained as a distinct record to preserve consent history.

CREATE TABLE IF NOT EXISTS signups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  name TEXT,
  early_access INTEGER NOT NULL DEFAULT 0 CHECK (early_access IN (0, 1)),
  newsletter_consent INTEGER NOT NULL DEFAULT 0 CHECK (newsletter_consent IN (0, 1)),
  partner_interest INTEGER NOT NULL DEFAULT 0 CHECK (partner_interest IN (0, 1)),
  consent_version TEXT NOT NULL,
  newsletter_consent_at TEXT,
  privacy_notice_version TEXT NOT NULL,
  privacy_acknowledged_at TEXT NOT NULL,
  ref TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  origin TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_signups_email ON signups(email);
CREATE INDEX IF NOT EXISTS idx_signups_created_at ON signups(created_at);
CREATE INDEX IF NOT EXISTS idx_signups_partner_interest ON signups(partner_interest);
CREATE INDEX IF NOT EXISTS idx_signups_newsletter_consent ON signups(newsletter_consent);

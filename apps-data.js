/* ============================================================
 * App Support Center — shared data registry
 * All pages load this file. To add a new app, copy one entry
 * in the APPS array and fill in its fields. No other code change
 * is required: the support page and privacy policy render from it.
 * ============================================================ */

const SITE = {
  brand: "App Support Center",
  owner: "XiaoBaiCoder9",
  // Replace this with the real support mailbox before publishing.
  contactEmail: "support@example.com",
  effectiveDate: "November 24, 2026",
  copyright: "© 2026 XiaoBaiCoder9. All rights reserved.",
  reportProblemUrl: "https://reportaproblem.apple.com"
};

/* Each entry describes one app. `template: true` entries are
   placeholders shown for illustration only — delete or replace them
   before the repository goes public. */
const APPS = [
  {
    id: "pageo",
    name: "Pageo: PDF Scanner",
    tagline: "Scan documents to PDF, private by design.",
    bundleId: "com.shiye.scan",
    category: "Productivity",
    platform: "iOS",
    accent: "#0A84FF",
    icon: "P",
    appStoreUrl: "",
    summary:
      "Pageo turns your device camera into a private document scanner: crop and correct pages, recognize text with OCR, export PDF or images, and protect sensitive files — all on your device.",
    practices: {
      onDevice:
        "Scanned images, OCR text, PDFs, signatures and custom watermarks are processed and stored locally on your device.",
      cloud:
        "Optional iCloud sync uses your own private iCloud (CloudKit) account. Your documents are not uploaded to, or stored on, our own server.",
      account: "No account or sign-up is required to use the app.",
      tracking:
        "No advertising identifiers, cross-app tracking, device fingerprinting, or third-party analytics are used.",
      ads: "The app contains no ads.",
      purchases:
        "In-app purchases and subscriptions are processed by Apple through the App Store. We do not receive your credit card or payment details.",
      dataCollected:
        "Documents you scan, recognized text, signatures, app settings and local app preferences saved on your device."
    },
    faqs: [
      {
        q: "How do I restore my Pro purchase on a new device?",
        a: "Open the app, go to the Settings tab and tap the “Upgrade to Pro” card to open the paywall, then tap “Restore Purchases” at the top right. Sign in with the same Apple ID used for the original purchase."
      },
      {
        q: "Where are my scanned documents stored?",
        a: "By default, documents are stored locally on your device. If you enable iCloud sync, the app uses your private iCloud account to keep documents available across your own signed-in devices."
      },
      {
        q: "What is included in the free version?",
        a: "The free version can scan, crop and correct pages, export a watermarked PDF or images, and perform OCR for up to 20 pages per month. Pro removes the export watermark, unlocks unlimited OCR, PDF password protection, long-image export, custom watermarks and signatures."
      },
      {
        q: "How do I cancel a subscription?",
        a: "Subscriptions are managed by Apple. On your iPhone or iPad, go to Settings → your name → Subscriptions, select the app, and choose Cancel Subscription. Cancellation takes effect at the end of the current billing period."
      },
      {
        q: "How do I request a refund?",
        a: "App Store purchases and subscriptions are billed by Apple. Refund requests are handled through Apple at reportaproblem.apple.com. Sign in with the Apple ID that made the purchase and follow the on-screen steps."
      },
      {
        q: "The app crashed or a feature is not working. What should I send?",
        a: "Email our support mailbox and include the app name, your device model, iOS version, the steps that led to the issue, and a screenshot if possible. This lets us reproduce and fix the problem quickly."
      }
    ]
  },

  {
    id: "template-app",
    template: true,
    name: "Sample App (Template)",
    tagline: "Duplicate this entry to list another app.",
    bundleId: "com.example.app",
    category: "Utilities",
    platform: "iOS",
    accent: "#34A34F",
    icon: "S",
    appStoreUrl: "",
    summary:
      "This entry is a placeholder. Replace its fields or delete it before publishing your support site.",
    practices: {
      onDevice: "Describe what this app processes or stores on the device.",
      cloud: "Describe any optional cloud or sync storage used by this app.",
      account: "State whether an account is required.",
      tracking: "State whether tracking or analytics are used.",
      ads: "State whether the app shows ads.",
      purchases: "Describe how purchases are processed, if any.",
      dataCollected: "List the data this app handles on behalf of the user."
    },
    faqs: [
      {
        q: "Sample question for this app?",
        a: "Sample answer. Replace it with app-specific support guidance."
      }
    ]
  }
];

/* ---------- helpers (used by all pages) ---------- */

function getAppById(id) {
  return APPS.find(function (app) { return app.id === id; }) || null;
}

function appPrivacyUrl(id) {
  return "privacy.html?app=" + encodeURIComponent(id);
}

function esc(text) {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function currentAppIdFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("app") || "";
}

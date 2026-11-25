/* ============================================================
 * App Support Center — shared data registry
 * All pages load this file. To add a new app, copy one entry
 * in the APPS array and fill in its fields. No other code change
 * is required: the support page and privacy policy render from it.
 * ============================================================ */

const SITE = {
  brand: "App Support Center",
  owner: "XiaoBaiCoder9",
  // Support mailbox for all apps. Reviewers and users must be able to reach it.
  contactEmail: "2357179575@qq.com",
  effectiveDate: "November 25, 2026",
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
    id: "idphoto",
    name: "ID Photo · 一寸相",
    tagline: "Guided ID photos with compliance checks, processed on device.",
    bundleId: "work.qingyunge.pictureId",
    category: "Photo & Video",
    platform: "iOS",
    accent: "#0D5F58",
    icon: "ID",
    appStoreUrl: "",
    summary:
      "ID Photo turns your iPhone into an ID photo studio. Choose from 60+ official sizes, shoot inside an exact-ratio guide frame, replace the background, crop to spec, run a compliance check on head proportion and head-room, then export, share or lay out a print sheet — all processed on your device.",
    practices: {
      onDevice:
        "Portraits you shoot or import are processed entirely on your device with Apple Vision and Core Image: face detection, person segmentation, background replacement, cropping and the compliance check. Finished photos are stored in the app's local database.",
      cloud:
        "Optional iCloud sync (Pro) stores your projects in your own private iCloud (CloudKit) database tied to your Apple ID. We run no server of our own and cannot read your synced projects.",
      account: "No account or sign-up is required to use the app.",
      tracking:
        "No advertising identifiers, cross-app tracking, device fingerprinting, or third-party analytics are used. The app contains no third-party SDKs.",
      ads: "The app contains no ads.",
      purchases:
        "The Pro subscription is processed by Apple through the App Store. We do not receive your credit card or payment details; we only see aggregate sales reports.",
      dataCollected:
        "Photos you shoot or import, the generated ID photos, chosen size settings and local app preferences saved on your device. Nothing is transmitted to us."
    },
    faqs: [
      {
        q: "Are my photos uploaded anywhere?",
        a: "No. Face detection, background replacement, cropping, export and the compliance check all run on your device. The app has no server and does not collect photos, device identifiers or usage data."
      },
      {
        q: "Why does the app say my photo is not compliant?",
        a: "The compliance card measures head proportion, head-room above the hair, horizontal centring and background evenness against the range published for the selected size. A green check means within the official range, a yellow warning means an acceptable deviation, and a red cross means it is clearly off. Requirements differ by agency, so always confirm with the issuing authority."
      },
      {
        q: "What is included in the free version?",
        a: "The free version lets you shoot, import, edit, preview, run the compliance check and save up to 3 projects. Pro (yearly subscription) unlocks watermark-free export at the exact spec pixels and DPI, one-tap sharing, print sheets (4×6, 5×7, A4), unlimited projects and iCloud sync."
      },
      {
        q: "Why does tapping “Save to Photos” or “Share” open the purchase screen?",
        a: "Export and sharing are Pro features. This is the single paid gate in the app; the free plan still covers the whole shooting, editing and compliance flow. Restore Purchases is available on the same screen."
      },
      {
        q: "How do I cancel the subscription?",
        a: "Subscriptions are managed by Apple. On your iPhone or iPad go to Settings → your name → Subscriptions, select ID Photo and choose Cancel Subscription. Pro stays active until the end of the current period."
      },
      {
        q: "How do I request a refund?",
        a: "App Store purchases are billed by Apple. Refund requests are handled at reportaproblem.apple.com; sign in with the Apple ID that made the purchase and follow the steps."
      },
      {
        q: "How do I restore Pro on a new device?",
        a: "Open the paywall (tap the Pro banner on the home screen, or the Pro card in Settings) and tap “Restore Purchases”. Sign in with the same Apple ID used for the original purchase. If you enabled iCloud sync, your projects appear automatically once sync finishes."
      },
      {
        q: "The app crashed or a button does nothing. What should I send?",
        a: "Email our support mailbox with the app version, your device model, iOS version, the steps that led to the issue and a screenshot if possible. We reply within 2 business days."
      }
    ]
  },
  {
    id: "glowlens",
    name: "GlowLens · 光颜相机",
    tagline: "On-device beauty camera and photo retoucher.",
    bundleId: "work.qingyunge.glowcamaa",
    category: "Photo & Video",
    platform: "iOS",
    accent: "#0D5F58",
    icon: "G",
    appStoreUrl: "",
    summary:
      "GlowLens is a local-only beauty camera and photo retoucher. Capture or import a portrait, apply eight beauty controls, eleven filters and eight makeup presets, then use face reshape, local masks, blemish healing, cutout, ID photo, collage and batch tools. Photos and edits stay on your iPhone; no account and no upload.",
    practices: {
      onDevice:
        "Photos you shoot or import, live camera frames, Apple Vision face landmarks, beauty and filter renders, collages and ID photos are processed entirely on your device with AVFoundation, Core Image, Vision and SwiftData. Finished images and thumbnails are stored in the app's local database; a photo is written to your library only when you tap Save.",
      cloud:
        "No cloud sync, no developer server and no account. Photos are never uploaded. The Pro entitlement is verified locally by StoreKit.",
      account: "No account or sign-up is required to use the app.",
      tracking:
        "No advertising identifiers, cross-app tracking, device fingerprinting, third-party analytics or third-party SDKs are used.",
      ads: "The app contains no ads.",
      purchases:
        "GlowLens Pro is one auto-renewable monthly subscription processed by Apple through the App Store. We do not receive your card or payment details. The entitlement is cached locally by StoreKit, and Restore Purchases is available on the paywall and Profile screen.",
      dataCollected:
        "Photos, edits, thumbnails, app preferences, the daily free-export count and the local purchase entitlement are stored on your device. Nothing is transmitted to us."
    },
    faqs: [
      {
        q: "Are my photos uploaded anywhere?",
        a: "No. Camera frames, imported photos, Vision face landmarks, beauty renders and exports are processed on your device. GlowLens has no account system, no developer server and no cloud sync; photos are never uploaded."
      },
      {
        q: "What is included in the free version?",
        a: "The free plan includes all basic beauty controls, three watermark-free exports per day, a 1440px long edge, seven filters (including Original) and four makeup presets (including Bare). A small watermark appears on the fourth and later exports each day."
      },
      {
        q: "What does GlowLens Pro include?",
        a: "Pro removes the daily export limit and watermark, raises export to 4096px, unlocks all eleven filters and eight makeup presets, face reshape (slim face, chin, nose, bigger eyes), local radial/linear/brush masks, blemish clone healing, cutout and ID photo, HD collage, batch apply and border templates. It is one monthly subscription with no trial, no yearly and no lifetime option."
      },
      {
        q: "How do I restore Pro on a new device?",
        a: "Open the paywall from a locked feature or from the Pro card on the Profile screen, then tap Restore Purchases. Sign in with the same Apple ID used for the original purchase."
      },
      {
        q: "How do I cancel the subscription?",
        a: "Subscriptions are managed by Apple. On your iPhone go to Settings → your name → Subscriptions, select GlowLens, and choose Cancel Subscription. Deleting the app does not cancel the subscription."
      },
      {
        q: "How do I request a refund?",
        a: "App Store purchases are billed by Apple. Refund requests are handled at reportaproblem.apple.com. Sign in with the Apple ID that made the purchase and follow the steps."
      },
      {
        q: "Does GlowLens guarantee that an ID photo will be accepted?",
        a: "No. GlowLens provides framing and export tools, but requirements differ by country, agency and application type. Always confirm the current photo specification with the issuing authority before submitting."
      },
      {
        q: "What should I include in a support email?",
        a: "Include the app name and version, your device model, iOS version, the steps that led to the issue, and a screenshot if possible. Send it to the support email on this page."
      }
    ]
  },
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

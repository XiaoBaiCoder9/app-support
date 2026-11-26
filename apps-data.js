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
  effectiveDate: "November 26, 2026",
  copyright: "© 2026 XiaoBaiCoder9. All rights reserved.",
  reportProblemUrl: "https://reportaproblem.apple.com"
};

/* Each entry describes one app. `template: true` entries are
   placeholders shown for illustration only — delete or replace them
   before the repository goes public. */
const APPS = [
  {
    id: "mathgarden",
    name: "MathGarden · 数学花园 / 數學花園",
    tagline: "Picture-first primary maths, fully offline, no account.",
    bundleId: "com.aicoding.mathgarden",
    category: "Education",
    platform: "iPhone (iOS 17+)",
    accent: "#4F46E5",
    icon: "123",
    appStoreUrl: "",
    summary:
      "MathGarden is an offline maths learning app for children aged 6–12. It contains 36 original illustrated lessons (12 books, grades 1–6, 3 core lessons each) and a practice mode with 29 topics. Each lesson follows look at a picture → manipulate the picture → answer 3 questions, and every question in the app has a diagram. The app has no account, no server and no ads; progress is stored on the device.",
    practices: {
      onDevice:
        "Lesson progress, stars, XP, level, practice answers, mistakes, streak calendar and app preferences are stored locally on your device with SwiftData and UserDefaults. They are never transmitted to us.",
      cloud:
        "No cloud sync and no server of our own. Progress stays on the device; deleting the app deletes the data.",
      account: "No account or sign-up is required.",
      tracking:
        "No advertising identifiers, cross-app tracking, device fingerprinting, analytics or third-party SDKs are used.",
      ads: "The app contains no ads.",
      purchases:
        "The MathGarden Pro monthly auto-renewable subscription is processed by Apple through the App Store. We do not receive your payment details; Apple provides only aggregate sales reports.",
      children:
        "MathGarden is designed for children aged 6–12 and is rated 4+ on the App Store. It is built for use by children: there is no account, no social feature, no advertising, no analytics and no third-party SDK, and no personal data is collected. Learning progress stays on the device. A parent or guardian can contact us at the support email with any privacy question or deletion request.",
      dataCollected:
        "No personal data is collected. Learning progress and preferences are stored only on your device."
    },
    faqs: [
      {
        q: "Does MathGarden need an internet connection?",
        a: "No. Lessons, questions and progress all work offline. Network is used only for App Store purchases and restoring them."
      },
      {
        q: "What is free and what does Pro unlock?",
        a: "All 36 illustrated lessons are free, together with 10 practice questions per day. MathGarden Pro (monthly auto-renewable subscription) unlocks unlimited practice, the full mistakes notebook and progress statistics."
      },
      {
        q: "How do I cancel or manage my subscription?",
        a: "Open Settings → your name → Subscriptions on your iPhone, select MathGarden and choose Cancel Subscription. Cancelling stops the next renewal; the current period stays active until it ends. Deleting the app does not cancel a subscription."
      },
      {
        q: "I changed device. How do I get Pro back?",
        a: "Install the app, open the subscription screen and tap “Restore Purchases”. Make sure the device is signed in with the same Apple Account used for the purchase."
      },
      {
        q: "Is my child's data collected?",
        a: "No. The app collects no personal data, has no ads, no analytics and no third-party SDKs. All progress stays on the device."
      },
      {
        q: "A lesson or question looks wrong. What should I send?",
        a: "Email our support mailbox with a screenshot and the lesson name (for example “Book 3 · Area”), or the practice topic and question text. Questions are generated locally, so this lets us reproduce it exactly."
      }
    ]
  },
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
  {
    id: "cinecam",
    name: "CineCam · 光年相机",
    tagline: "Film-look video camera with ten built-in grades, shot on iPhone.",
    bundleId: "com.lingyu.CineCam",
    category: "Photo & Video",
    platform: "iPhone (iOS 18+)",
    accent: "#E9B25C",
    icon: "C",
    appStoreUrl: "",
    summary:
      "CineCam is an on-device video camera with ten built-in film looks, live filter preview, 1080p or 4K recording, trimming and re-grading. Five looks, 1080p recording and two custom presets are free; CineCam Pro unlocks five more looks, 4K and unlimited custom presets. Clips, thumbnails and presets stay on the iPhone. No account, no developer server and no ads.",
    practices: {
      onDevice:
        "Video clips, thumbnails, custom filter presets, app settings and the local purchase entitlement are stored on your device with SwiftData, the app sandbox and UserDefaults. Camera frames and Core Image filter renders are processed entirely on device.",
      cloud:
        "No cloud sync, no developer server and no account. Videos are never uploaded by the app. Apple processes App Store purchases and verifies the Pro entitlement through StoreKit.",
      account: "No account or sign-up is required to use the app.",
      tracking:
        "No advertising identifiers, cross-app tracking, device fingerprinting, analytics or third-party SDKs are used.",
      ads: "The app contains no ads.",
      purchases:
        "CineCam Pro is one auto-renewable monthly subscription at US$1.99, processed by Apple through the App Store. We do not receive your card or payment details; Apple provides only aggregate sales reports. Restore Purchases is available on the paywall and in Settings.",
      dataCollected:
        "Video clips, thumbnails, custom presets, app preferences and the local purchase entitlement are stored on your device. Photo Library Add access is used only when you export a clip or enable Auto-save to Photos; nothing is transmitted to us."
    },
    faqs: [
      {
        q: "What is included in the free version?",
        a: "Five built-in looks (Original, Cinema, Retro, Sunshine and Peach), 1080p recording and export, and up to two custom presets are free. The camera, live preview, library, trimming and re-grading work without a subscription."
      },
      {
        q: "What does CineCam Pro include?",
        a: "Pro unlocks five additional looks (Teal Mist, Silver, Neon, Cool Blue and Polaroid), 4K recording and export, and unlimited custom presets. It is one monthly auto-renewable subscription at US$1.99 with no trial and no other plan."
      },
      {
        q: "Are my videos uploaded anywhere?",
        a: "No. Camera frames, microphone audio, filter rendering, thumbnails, trimming and export all run on your iPhone. CineCam has no account system, no developer server and no cloud sync; videos are never uploaded."
      },
      {
        q: "Why does CineCam ask for Camera, Microphone or Photos permission?",
        a: "Camera and microphone are requested when you open the camera screen and are used only while recording. Photo Library Add access is requested only when you export a clip or enable Auto-save to Photos. The app does not read your other photos."
      },
      {
        q: "How do I restore Pro on a new iPhone?",
        a: "Open the paywall from a locked look, the 4K toggle or the Pro card in Settings, then tap Restore Purchases. Sign in with the same Apple Account used for the original purchase."
      },
      {
        q: "How do I cancel the subscription?",
        a: "Subscriptions are managed by Apple. On your iPhone go to Settings → your name → Subscriptions, select CineCam and choose Cancel Subscription. Cancelling stops the next renewal; the current period stays active until it ends. Deleting the app does not cancel the subscription."
      },
      {
        q: "How do I request a refund?",
        a: "App Store purchases are billed by Apple. Refund requests are handled at reportaproblem.apple.com. Sign in with the Apple Account that made the purchase and follow the on-screen steps."
      },
      {
        q: "A clip or export is not working. What should I send?",
        a: "Email the support address on this page with the app version, iPhone model, iOS version, the steps that led to the issue, and a screenshot or screen recording if possible."
      }
    ]
  },

  {
    id: "pypal",
    name: "PyPal · 少儿 Python",
    tagline: "Learn Python by teaching a little snake to talk — fully offline.",
    bundleId: "com.aicoding.pypal",
    category: "Education",
    platform: "iPhone (iOS 17+)",
    accent: "#2EC4A6",
    icon: "🐍",
    appStoreUrl: "",
    summary:
      "PyPal is an offline Python learning app for children aged 8–12. Kids teach a little snake named Pipi to speak by writing real (simplified) Python: 22 levels across 8 islands cover print, variables, arithmetic, if/elif, for/while, lists and functions. Every run is executed by a built-in mini Python interpreter, replayed line by line, compared with the level goal, and rewarded with stars, XP and badges. There is no account, no server, no ads and no third-party SDK.",
    practices: {
      onDevice:
        "Level progress, stars, XP, streak days, badges, daily quiz results, saved code drafts and app preferences are stored locally on your device with SwiftData and UserDefaults. They are never transmitted to us.",
      cloud:
        "No cloud sync and no server of our own. Progress and drafts stay on the device; deleting the app deletes the data.",
      account: "No account or sign-up is required. A display name typed during onboarding is stored only on the device.",
      tracking:
        "No advertising identifiers, cross-app tracking, device fingerprinting, analytics or third-party SDKs are used.",
      ads: "The app contains no ads.",
      purchases:
        "The app is fully free and contains no in-app purchases. There is no payment flow.",
      children:
        "PyPal is designed for children aged 8–12 and is rated 4+ on the App Store. It has no account, no social feature, no advertising, no analytics and no third-party SDK, and collects no personal data. Learning progress stays on the device. A parent or guardian can contact us at the support email with any privacy question or deletion request.",
      dataCollected:
        "No personal data is collected. Learning progress, the locally chosen display name and preferences are stored only on your device."
    },
    faqs: [
      {
        q: "Does PyPal need an internet connection?",
        a: "No. All 22 levels, the built-in Python interpreter, daily challenges and progress work completely offline."
      },
      {
        q: "Is the Python real?",
        a: "PyPal uses a built-in mini Python interpreter that supports the subset taught in the course: print, variables, strings, numbers, lists, if/elif/else, for/while, def/return, break/continue, comparisons and common built-ins. It does not support imports, classes, dictionaries or f-strings, which are outside the course."
      },
      {
        q: "How do I reset my progress?",
        a: "Open the app → 我的 (Profile) → gear icon → Settings → Reset all progress. This deletes all local learning data on this device and cannot be undone."
      },
      {
        q: "Where is my child's data stored?",
        a: "Entirely on the device, in Apple's SwiftData store. Nothing is uploaded. Deleting the app removes all data."
      },
      {
        q: "Can two children share one device?",
        a: "PyPal currently keeps one local learner profile per device. Progress is tied to the device, not to an account."
      }
    ]
  },

  {
    id: "mathvista",
    name: "MathVista · 初中数学图形化学习",
    tagline: "See the maths: 29 chapters, 116 concepts and 8 interactive graph labs.",
    bundleId: "com.aicoding.mathvista",
    category: "Education",
    platform: "iPhone (iOS 17+)",
    accent: "#2563EB",
    icon: "📐",
    appStoreUrl: "",
    summary:
      "MathVista is an offline graphic maths learning app for lower-secondary students aged 12–15. It covers 29 chapters and 116 concepts across grades 7–9, with 8 interactive graph labs for linear functions, quadratic functions, geometry, statistics and probability. Practice is organised into 10 topics, each with 3 questions, plus a mixed 10-question session. Every question is paired with a diagram. The app has no account, no server, no ads and no third-party SDK; progress is stored on the device.",
    practices: {
      onDevice:
        "Chapter progress, practice answers, mistakes, daily practice count, subscription state and app preferences are stored locally on your device with SwiftData and UserDefaults. They are never transmitted to us.",
      cloud:
        "No cloud sync and no server of our own. Progress stays on the device; deleting the app deletes the data. Network is used only for App Store purchases and restoring them.",
      account: "No account or sign-up is required.",
      tracking:
        "No advertising identifiers, cross-app tracking, device fingerprinting, analytics or third-party SDKs are used.",
      ads: "The app contains no ads.",
      purchases:
        "The MathVista Pro monthly auto-renewable subscription is processed by Apple through the App Store. We do not receive your payment details; Apple provides only aggregate sales reports.",
      children:
        "MathVista is designed for students aged 12–15 and is rated 4+ on the App Store. It has no account, no social feature, no advertising, no analytics and no third-party SDK, and collects no personal data. Learning progress stays on the device. A parent, guardian or teacher can contact us at the support email with any privacy question or deletion request.",
      dataCollected:
        "No personal data is collected. Learning progress and preferences are stored only on your device."
    },
    faqs: [
      {
        q: "Does MathVista need an internet connection?",
        a: "No. All chapters, graph labs, practice questions and progress work offline. Network is used only for App Store purchases and restoring them."
      },
      {
        q: "What is free and what does MathVista Pro unlock?",
        a: "All 29 chapters, 116 concepts and 8 graph labs are free, together with 10 practice questions per day. MathVista Pro (monthly auto-renewable subscription) unlocks unlimited practice and the complete practice statistics."
      },
      {
        q: "How do I cancel or manage my subscription?",
        a: "Open Settings → your name → Subscriptions on your iPhone, select MathVista and choose Cancel Subscription. Cancelling stops the next renewal; the current period stays active until it ends. Deleting the app does not cancel a subscription."
      },
      {
        q: "I changed device. How do I get Pro back?",
        a: "Install the app, open the subscription screen and tap “Restore Purchases”. Make sure the device is signed in with the same Apple Account used for the purchase."
      },
      {
        q: "How is practice organised?",
        a: "Open the Practice tab, choose one of the 10 topics or the mixed session, then answer 3 questions for a topic or 10 random questions for the mixed session. Each question includes a diagram and a worked explanation after you answer."
      },
      {
        q: "Is my child's data collected?",
        a: "No. The app collects no personal data, has no ads, no analytics and no third-party SDKs. All progress stays on the device."
      },
      {
        q: "A chapter, graph or question looks wrong. What should I send?",
        a: "Email our support mailbox with a screenshot and the chapter name (for example “二次函数”) or the practice topic and question text. Everything is generated locally, so this lets us reproduce it exactly."
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

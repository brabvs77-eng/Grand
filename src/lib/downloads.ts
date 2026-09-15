/** Official download URLs from https://www.pppoker.net/ (config-version.js + app bundle). */
export const PPPOKER_DOWNLOADS = {
  ios: "https://apps.apple.com/in/app/pppoker-nlh-plo-ofc/id1101622978",
  iosUs: "https://apps.apple.com/us/app/pppoker-usa-holdem-omaha/id1554633611",
  android: "https://play.google.com/store/apps/details?id=com.lein.pppoker.android",
  androidUs: "https://play.google.com/store/apps/details?id=com.gameusa.pppoker.android",
  apk: "https://www.pppoker.net/pcpackage/PPPoker_Unity_latest.apk",
  windows: "https://www.pppoker.net/pcpackage/PPPoker_Windows_latest.msi",
  mac: "https://www.pppoker.net/pcpackage/PPPoker_Mac_latest.dmg",
} as const;

export const DOWNLOAD_LINKS = [
  { key: "ios", url: PPPOKER_DOWNLOADS.ios, icon: "🍎" },
  { key: "android", url: PPPOKER_DOWNLOADS.android, icon: "▶️" },
  { key: "apk", url: PPPOKER_DOWNLOADS.apk, icon: "📦" },
  { key: "windows", url: PPPOKER_DOWNLOADS.windows, icon: "🖥️" },
  { key: "mac", url: PPPOKER_DOWNLOADS.mac, icon: "💻" },
] as const;

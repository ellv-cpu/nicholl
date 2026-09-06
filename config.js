module.exports = {
  BOT_NAME: "BOT BUILD APK ELXZ",
  BOT_VERSION: "1.0",
  BOT_TOKEN: process.env.BOT_TOKEN,
  ADMIN_IDS: (process.env.ADMIN_IDS || "").split(",").map(Number).filter(Boolean),
  
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || "ellv-cpu",
  GITHUB_REPO: process.env.GITHUB_REPO || "ellnichollv",
  
  CHANNEL_USERNAME: process.env.CHANNEL_USERNAME || "@informasichnlel",
  
  OWNER_ID: parseInt(process.env.OWNER_ID || "0"),

  WELCOME_PHOTO: process.env.WELCOME_PHOTO || "https://files.catbox.moe/e1j1zy.jpg",
  NEW_USER: process.env.NEW_USER || "https://files.catbox.moe/e1j1zy.jpg",
  TMP_DIR: "./tmp",

  BUILD_TIMEOUT_MS: 30 * 60 * 1000,
  POLL_INTERVAL_MS: 7000,       
  WEB2APK_MAINTENANCE: false,
};

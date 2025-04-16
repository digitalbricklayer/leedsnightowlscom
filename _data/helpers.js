const fs = require("fs");
const path = require("path");
const settings = require( "./site.json");
const SVGs = require( "../_includes/social-svgs.js");

const socials = [
  { name: "glitch", altText: "Glitch" },
  { name: "arena", altText: "Arena" },
  { name: "bandcamp", altText: "Bandcamp" },
  { name: "bluesky", altText: "Bluesky" },
  { name: "cohost", altText: "Cohost" },
  { name: "devTo", altText: "DevTo" },
  { name: "facebook", altText: "Facebook" },
  { name: "fediverse", altText: "Fediverse" },
  { name: "github", altText: "GitHub" },
  { name: "gitlab", altText: "GitLab" },
  { name: "hasnode", altText: "Hasnode" },
  { name: "instagram", altText: "Instagram" },
  { name: "keybase", altText: "Keybase" },
  { name: "kofi", altText: "Ko-fi" },
  { name: "letterboxd", altText: "Letterboxd" },
  { name: "linkedin", altText: "LinkedIn" },
  { name: "mastodon", altText: "Mastodon", rel: "me" },
  { name: "medium", altText: "Medium" },
  { name: "patreon", altText: "Patreon" },
  { name: "pinboard", altText: "Pinboard" },
  { name: "pinterest", altText: "Pinterest" },
  { name: "pixelfed", altText: "Pixelfed" },
  { name: "podcast", altText: "Podcast" },
  { name: "onlyfans", altText: "OnlyFans" },
  { name: "spotify", altText: "Spotify" },
  { name: "soundcloud", altText: "SoundCloud" },
  { name: "stackOverflow", altText: "Stack Overflow" },
  { name: "substack", altText: "Substack" },
  { name: "tiktok", altText: "TikTok" },
  { name: "twitch", altText: "Twitch" },
  { name: "twitter", altText: "Twitter" },
  { name: "tumblr", altText: "Tumblr" },
  { name: "youtube", altText: "YouTube" },
];

module.exports = {
  getProjectURL() {
    return `https://${process.env.PROJECT_DOMAIN}.glitch.me/`;
  },
  getProjectEditURL() {
    return `https://glitch.com/edit/#!/${process.env.PROJECT_DOMAIN}`;
  },
  async loadImageAssets() {
    /* Load images from the assets folder */
    console.log("reading assets folder...");
    const that = this;
    let data = fs.readFileSync("./.glitch-assets", "utf8");

    // console.log("data", data);

    data = data.split("\n");
    const dataJson = JSON.parse("[" + data.join(",").slice(0, -1) + "]");

    let images = [];
    let deletedImages = [];
    let okayImages = [];

    dataJson.forEach((dataImg) => {
      // console.log("dataImg", dataImg);
      if (dataImg?.deleted === true) {
        deletedImages.push(dataImg.uuid);
      } else {
        images.push(dataImg);
      }
    });

    return images;
  },
  extensionCheck(url) {
    const extName = path.extname(url).toLowerCase();
    return (
      extName === ".png" ||
      extName === ".jpg" ||
      extName === ".jpeg" ||
      extName === ".bmp" ||
      extName === ".webp" ||
      extName === ".gif"
    );
  },
  isFileImage(file) {
    return [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/jpe",
      "image/jpg",
      "image/tiff",
      "image/tif",
      "image/bmp",
    ].includes(file.type);
  },
  getFileNameFromUrl(url) {
    return url.substring(url.lastIndexOf("/") + 1);
  },

  renderSocial(platform) {
    if (settings.social[platform.name]) {
      return `
        <a
          aria-label="${platform.name} link"
          href="${settings.social[platform.name]}"
          tabindex="-1"
          rel="me"
          >${SVGs[platform.name]}</a
        >
      `;
    } else {
      return "";
    }
  },

  renderEmail() {
    if (settings.social.email) {
      return `
        <a
          aria-label="${settings.name} on email"
          href="mailto:${settings.social.email}"
          tabindex="-1"
          >${SVGs.email}</a
        >
      `;
    } else {
      return "";
    }
  },

  renderSocialIcons() {
    return `
    <div class="social-icons">
      ${socials.map((platform) => {
        return `${this.renderSocial(platform)}`;
      }).join("")}
      ${this.renderEmail()}
    </div>
  `;
  },
};

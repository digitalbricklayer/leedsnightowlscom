const fs = require("fs");
const helpers = require("./helpers.js");

module.exports = (async function () {
  const imageAssets = await helpers.loadImageAssets();
  // console.log("imageAssets", imageAssets);
  const images = JSON.parse(fs.readFileSync("./_data/gallery.json", "utf8"));
  // console.log("images", images);
  let gallery = [];

  images.forEach((image) => {
    // console.log(image.name);
    try {
      const imageData = imageAssets.filter(
        (asset) => asset.name === image.name
      )[0];
      // console.log("imageData", imageData);
      image.url = imageData.url;
      image.width = imageData.imageWidth;
      image.height = imageData.imageHeight;
      gallery.push(image);
    } catch (err) {
      /* skip */
    }
  });
  console.log(gallery.map((image) => image.name));
  return gallery;
})();

const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = async function(eleventyConfig) {
  // Copy the contents of the public directory to output directory stripping off the public part
  eleventyConfig.addPassthroughCopy({ "./public/": "/" });
  eleventyConfig.addPassthroughCopy({ 'robots.txt': '/robots.txt' });
  eleventyConfig.addPassthroughCopy({ 'favicon.ico': '/favicon.ico' });

//  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: 'html',
    // optional, output image formats
    formats: ['jpg', 'png', 'webp'],
    // optional, output image widths
    widths: ['auto', 400],
    // optional, attributes assigned on <img> override these values.
//    defaultAttributes: {
//        loading: 'lazy',
//        sizes: '100vw',
//        decoding: 'async',
//    },
  });
};

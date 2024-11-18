module.exports = async function(eleventyConfig) {
  // Copy the contents of the public directory to output directory stripping off the public part
  eleventyConfig.addPassthroughCopy({ "./public/": "/" });
  eleventyConfig.addPassthroughCopy({ 'robots.txt': '/robots.txt' });
  eleventyConfig.addPassthroughCopy({ 'favicon.ico': '/favicon.ico' });
};

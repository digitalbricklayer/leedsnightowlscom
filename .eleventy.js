module.exports = async function(eleventyConfig) {
  // Copy the contents of the public directory to output directory stripping off the public part
  eleventyConfig.addPassthroughCopy({ "./public/": "/" });

  // Put robots.txt in root
  eleventyConfig.addPassthroughCopy({ 'robots.txt': '/robots.txt' });
};

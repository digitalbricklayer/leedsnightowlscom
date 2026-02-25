module.exports = async function(eleventyConfig) {
	// Copy the contents of the public directory to output directory stripping off the public part
	eleventyConfig.addPassthroughCopy({ "./public/": "/" });
	eleventyConfig.addPassthroughCopy({ 'robots.txt': '/robots.txt' });
	eleventyConfig.addPassthroughCopy({ 'favicon.ico': '/favicon.ico' });

	eleventyConfig.addWatchTarget("css/**/*.css");

	// Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Bundle <style> content and adds a {% css %} paired shortcode
	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
		// Add all <style> content to `css` bundle (use <style eleventy:ignore> to opt-out)
		// Supported selectors: https://www.npmjs.com/package/posthtml-match-helper
		bundleHtmlContentFromSelector: "style",
	});
};

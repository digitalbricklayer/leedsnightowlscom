import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginGallery from "./modules/eleventy-plugin-gallery/.eleventy.js";
import pluginFilters from "./_config/filters.js";
import pluginShortcodes from "./_config/shortcodes.js";

export default (eleventyConfig) => {
	eleventyConfig.setLayoutsDirectory("_layouts");

	eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });
	eleventyConfig.addPassthroughCopy({ 'src/favicon.ico': '/favicon.ico' });
	eleventyConfig.addPassthroughCopy({ 'src/_redirects': '/_redirects' });

	eleventyConfig.addWatchTarget("src/_includes/css/**/*.css");

	// Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Bundle <style> content and adds a {% css %} paired shortcode
	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
		// Add all <style> content to `css` bundle (use <style eleventy:ignore> to opt-out)
		// Supported selectors: https://www.npmjs.com/package/posthtml-match-helper
		bundleHtmlContentFromSelector: "style",
	});

	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
	eleventyConfig.addPlugin(pluginGallery);
	eleventyConfig.addPlugin(pluginFilters);
	eleventyConfig.addPlugin(pluginShortcodes);

	/**
     * Add collections - NOTE: do not put dashes in the collection name, otherwise
	 * it will not work in Nunjucks templates
     */

	// Return all campaigns
	eleventyConfig.addCollection("campaigns", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.data.contentType == "campaign";
		});
	});

	// Return all events
	eleventyConfig.addCollection("events", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.data.contentType == "event";
		});
	});

	// Return all games
	eleventyConfig.addCollection("games", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.data.contentType == "game";
		});
	});

	// Return all battle reports
	eleventyConfig.addCollection("battlereports", function(collection) {
		return collection.getAllSorted().filter(function(item) {
			return item.data.contentType == "battle-report";
		});
	});

	return {
		dir: {
			input: "src",
		}
	};
};

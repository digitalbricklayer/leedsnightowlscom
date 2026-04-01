// Code adapted from https://www.bash.lk/posts/tech/1-elventy-image-gallery/
// It uses the eleventy-img plugin (version >= 5.0)
// (https://github.com/11ty/eleventy-img) to normalize the image source
// paths and to create smaller preview images.
// It will automatically create a layout with one to three columns.
// A different number of columns can be set manually.
//
// shortcodes:
// `gallery <name> [imgPerCol]`
// `galleryImg <path> <alt-text>`
//
// The galleryImg shortcode can only be used inside the `gallery`.
import Image from "@11ty/eleventy-img";
import { Util } from "@11ty/eleventy-img";
import sharp from "sharp";

const DEFAULT_GALLERY_IMAGE_WIDTH = 200;
const LANDSCAPE_LIGHTBOX_IMAGE_WIDTH = 2000;
const PORTRAIT_LIGHTBOX_IMAGE_WIDTH = 720;

async function galleryImageShortcode(
	src,
	alt,
	previewWidth = DEFAULT_GALLERY_IMAGE_WIDTH,
) {
	let lightboxImageWidth = LANDSCAPE_LIGHTBOX_IMAGE_WIDTH;
	src = Util.normalizeImageSource(
		{
			input: this.eleventy.directories.input,
			inputPath: this.page.inputPath,
		},
		src,
	);

	const metadata = await sharp(src).metadata();

	if (metadata.height > metadata.width) {
		lightboxImageWidth = PORTRAIT_LIGHTBOX_IMAGE_WIDTH;
	}

	const options = {
		formats: ["jpeg"],
		widths: [previewWidth, lightboxImageWidth],
		urlPath: "/img/",
		outputDir: this.eleventy.directories.output + "/img/",
	};

	const genMetadata = await Image(src, options);
	if (genMetadata.jpeg.length == 1) {
		genMetadata.jpeg.splice(0, 0, genMetadata.jpeg[0]);
	}

	const output = `
        <a href="${genMetadata.jpeg[1].url}"
			data-pswp-width="${genMetadata.jpeg[1].width}"
			data-pswp-height="${genMetadata.jpeg[1].height}"
			target="_blank" style="text-decoration: none">
          <img src="${genMetadata.jpeg[0].url}" alt="${alt}" eleventy:ignore/>
        </a>
    `.replace(/(\r\n|\n|\r)/gm, "");
	return output;
}

function galleryShortcode(content, name, imgPerCol) {
	if (imgPerCol === undefined) {
		const nImg = (content.match(/<a /g) || []).length;
		imgPerCol = 1;
		if (nImg % 2 == 0) {
			imgPerCol = 2;
		} else if (nImg > 1) {
			imgPerCol = 3;
		}
	}
	return `
        <div>
            <div class="pswp-gallery" id="gallery-${name}" style="grid-template-columns: repeat(${imgPerCol}, 1fr);">
                ${content}
            </div>
        </div>
    `.replace(/(\r\n|\n|\r)/gm, "");
}

export default (eleventyConfig) => {
	eleventyConfig.addPairedShortcode("gallery", galleryShortcode);
	eleventyConfig.addShortcode("galleryImg", galleryImageShortcode);
};

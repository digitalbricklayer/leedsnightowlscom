import Image, { Util } from "@11ty/eleventy-img";

async function pictureShortcode(src, alt, caption) {
	src = Util.normalizeImageSource(
		{
			input: this.eleventy.directories.input,
			inputPath: this.page.inputPath,
		},
		src,
	);

	const options = {
		formats: ["avif", "webp", "jpeg"],
		widths: [400, 800, 1200],
		urlPath: "/img/",
		outputDir: this.eleventy.directories.output + "/img/",
	};

	const metadata = await Image(src, options);

	const sources = Object.values(metadata)
		.slice(0, -1) // all formats except the last (jpeg fallback)
		.map((formatData) => {
			const srcset = formatData.map((img) => `${img.url} ${img.width}w`).join(", ");
			return `<source type="${formatData[0].sourceType}" srcset="${srcset}">`;
		})
		.join("\n\t\t\t");

	const fallbackFormat = metadata.jpeg ?? Object.values(metadata).at(-1);
	const fallback = fallbackFormat.at(-1);

	const figcaption = caption
		? `\n\t\t<figcaption class="figure-caption">${caption}</figcaption>`
		: "";

	return `<figure class="figure">
		<picture>
			${sources}
			<img src="${fallback.url}" alt="${alt}" width="${fallback.width}" height="${fallback.height}" class="figure-img img-fluid" eleventy:ignore>
		</picture>${figcaption}
	</figure>`;
}

export default function(eleventyConfig) {
	eleventyConfig.addShortcode("picture", pictureShortcode);
};

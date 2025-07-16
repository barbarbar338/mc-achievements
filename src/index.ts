import { createCanvas, loadImage, registerFont } from "canvas";
import { resolve } from "path";
import { ICONS } from "./icons";

registerFont(resolve(__dirname, "..", "assets", "font.ttf"), {
	family: "Minecraft",
});

export interface ICreateAchievement {
	icon: keyof typeof ICONS;
	title: string;
	content: string;
}

export { ICONS };

export class AchievementCreator {
	private static async _createCanvas() {
		const background = await loadImage(
			resolve(__dirname, "..", "assets", "bg.png"),
		);

		const canvas = createCanvas(503, 100);

		const ctx = canvas.getContext("2d");
		ctx.drawImage(background, 0, 0, 503, 100);

		return canvas;
	}

	private static async _fetchImage(name: string) {
		const imagePath = resolve(
			__dirname,
			"..",
			"assets",
			"icons",
			`${name}.png`,
		);

		return loadImage(imagePath);
	}

	static async create({
		icon,
		title,
		content,
	}: ICreateAchievement): Promise<Buffer> {
		if (!Object.values(ICONS).includes(icon))
			throw new Error(
				`${icon} not found in icons folder. See "ICONS" export for more information.`,
			);

		if (title.length > 28)
			throw new Error("Title can not be longer than 28 characters");

		if (content.length > 28)
			throw new Error("Content can not be longer than 28 characters");

		const canvas = await this._createCanvas();
		const ctx = canvas.getContext("2d");

		ctx.font = "24px Minecraft";
		ctx.textAlign = "left";

		const image = await this._fetchImage(icon);
		ctx.drawImage(image, 35, 20, image.width, image.height);

		ctx.fillStyle = "#f8f628";
		ctx.fillText(title, 125, 40);

		ctx.fillStyle = "#ffffff";
		ctx.fillText(content, 125, 80);

		return canvas.toBuffer();
	}
}

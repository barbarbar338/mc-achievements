import { Image, registerFont } from "canvas";
import { Canvas, resolveImage } from "canvas-constructor";
import { ICONS } from "./icons";
import { resolve } from "path";

registerFont(resolve(__dirname, "..", "assets", "font.ttf"), {
	family: "Minecraft",
});

class AchievementCreator {
	private static async _createCanvas(): Promise<Canvas> {
		const background = await resolveImage(
			resolve(__dirname, "..", "assets", "bg.png"),
		);
		const canvas = new Canvas(503, 100).printImage(background, 0, 0);
		return canvas;
	}
	private static async _fetchImage(name: string): Promise<Image> {
		const image = await resolveImage(
			resolve(__dirname, "..", "assets", "icons", `${name}.png`),
		);
		return image;
	}
	static async create(
		icon: string,
		title: string,
		content: string,
	): Promise<Buffer> {
		if (!Object.values(ICONS).includes(icon))
			throw new Error(
				`${icon} not found in icons folder. See "ICONS" export for more information.`,
			);
		if (title.length > 28)
			throw new Error("Title can not be longer than 28 characters");
		if (content.length > 28)
			throw new Error("Content can not be longer than 28 characters");
		const image = await this._fetchImage(icon);
		const buffer = (await this._createCanvas())
			.setTextFont("24px Minecraft")
			.setTextAlign("left")
			.setColor("#f8f628")
			.printText(title, 125, 40)
			.setColor("#ffffff")
			.printText(content, 125, 80)
			.printImage(image, 35, 20)
			.toBuffer();
		return buffer;
	}
}

export { ICONS, AchievementCreator };

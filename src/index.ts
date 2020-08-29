import { Image, registerFont } from "canvas";
import { Canvas, resolveImage } from "canvas-constructor";
import { ICONS } from "./icons";

registerFont(__dirname + "/../../src/assets/font.ttf", {
    family: "Minecraft",
});

class AchievementCreator {
    private static async createCanvas(): Promise<Canvas> {
        const background = await resolveImage(__dirname + "/../../src/assets/bg.png");
        const canvas = new Canvas(503, 100).printImage(background, 0, 0);
        return canvas;
    }
    private static async fetchImage(name: string): Promise<Image> {
        const image = await resolveImage(`${__dirname}/../../src/assets/icons/${name}.png`);
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
        const image = await this.fetchImage(icon);
        const buffer = (await this.createCanvas())
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

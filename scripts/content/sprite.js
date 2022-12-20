import { content } from "./content.js";

export class Sprite {
    constructor(source) {
        this.Source = source;
        this.Loaded = false;
        content.Items.push(this);
        this.Image = new Image();

        this.Image.onload = (e) => {
            this.Width = e.target.width;
            this.Height = e.target.height;
            this.Loaded = true;
        };

        this.Image.src = source;
    }
}
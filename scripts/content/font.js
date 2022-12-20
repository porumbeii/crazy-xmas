import { content } from "./content.js";

export class Font {
    constructor(name, source) {
        this.Source = source;
        let instance = this;

        this.Loaded = false;
        content.Items.push(this);

        this.FontFace = new FontFace(name, `url(${source})`);

        this.FontFace.load().then(function (loaded_face) {
            document.fonts.add(loaded_face);
            instance.Loaded = true;
        });
    }
}
import { content } from "./content.js";

export class Sound {
    constructor(source) {
        this.Source = source;

        this.Audio = new Audio();
        this.IsLoaded = false;
        this.Audio.onloadeddata = (event) => {
            this.Duration = event.target.duration;
            this.Loaded = true;
        }
        this.Audio.src = this.Source;
        this.Audio.preload = 'auto';
        content.Items.push(this);
    }

    Play(loop = false) {
        this.Audio.play();
	this.Audio.currentTime = 0;
        if (loop)
            this.Audio.loop = true;
    }

    Pause() {
        this.Audio.pause();
    }
}


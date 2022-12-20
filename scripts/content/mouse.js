import {content} from '../content/content.js';

export const mouse = new class {
    constructor() {
        this.Pressed = false;
        this.Released = false;
        this.X = -100;
        this.Y = -100;

        document.body.style.cursor = 'none';

        onmousedown = this.HandleMouseDown.bind(this);
        onmouseup = this.HandleMouseUp.bind(this);
        onmousemove = this.HandleMouseMove.bind(this);

        this.FirstInteraction = false;
    }

    HandleMouseDown() {
        this.Pressed = true;
        if (!this.FirstInteraction) {
            content.Music.Play(true);
            this.FirstInteraction = true;
        }
    }

    HandleMouseUp() {
        this.Pressed = false;
        this.Released = true;
    }

    HandleMouseMove(e) {
        this.X = e.clientX;
        this.Y = e.clientY;
    }

    Update() {
        this.PreviousReleased = this.Released;
        this.Released = false;
        this.X += 1-Math.random()*2;
        this.Y += 1-Math.random()*2;
    }

    Draw(context) {
        context.fillStyle = '#D9ED92';
        if (this.PreviousReleased)
            context.fillRect(this.X-3, this.Y-3, 6, 6);
        else if (this.Pressed)
            context.fillRect(this.X-7, this.Y-7, 14, 14);
        else context.fillRect(this.X-5, this.Y-5, 10, 10);
    }
}();
import { mouse } from "../content/mouse.js";

export class SpeechBubble {
    constructor() {
        this.TargetText = '';
        this.CurrentText = '';
        /**Integer between 0 and 1*/
        this.Visibility = 0;
    }

    get TargetVisibility() { return this.TargetText.length > 1 ? 1 : 0 }

    Update() {
        this.Visibility = this.Visibility * 0.9 + this.TargetVisibility * 0.1;

        for (let i = 0; i < 2; i++) {
            if (this.CurrentText == this.TargetText)
                ;
            else if (this.TargetText.startsWith(this.CurrentText) || this.CurrentText === '')
                this.CurrentText = this.CurrentText + this.TargetText[this.CurrentText.length];
            else this.CurrentText = this.CurrentText.slice(0, -1);
        }
    }

    Draw(context) {
        context.save();
        context.rotate(0.01);
        context.translate(0, (1 - this.Visibility) * window.innerHeight / 3 * 2);

        context.shadowBlur = 20;
        context.shadowColor = '#184E77';
        context.fillStyle = '#D9ED92';
        context.fillRect(50, window.innerHeight / 3 * 2, window.innerWidth - 100, window.innerHeight / 3 - 25);
        context.shadowBlur = 0;

        context.strokeStyle = '#184E77';
        context.lineWidth = 2;
        context.strokeRect(50 + this.Jitter(), window.innerHeight / 3 * 2 + this.Jitter(), window.innerWidth - 100 + this.Jitter(), window.innerHeight / 3 - 25 + this.Jitter())

        context.fillStyle = '#184E77';
        context.font = '32px main';
        context.textBaseline = 'top';
        context.textAlign = 'left';
        wrapText(context, this.GlitchText(this.CurrentText), 70, window.innerHeight / 3 * 2 + 20, window.innerWidth - 120, 32)

        context.restore();
    }

    GlitchText(text) {
        return text;
    }

    Appear() {
        this.TargetVisibility = 1;
    }

    Disapear() {
        this.TargetVisibility = 0;
    }

    static JitterAmount = 5;

    Jitter() {
        return SpeechBubble.JitterAmount / 2 - Math.random() * SpeechBubble.JitterAmount;
    }
}

String.prototype.replaceAtIndex = function (_index, _newValue) {
    return this.substr(0, _index) + _newValue + this.substr(_index + _newValue.length)
}

//https://thewebdev.info/2021/08/28/how-to-wrap-text-in-a-canvas-element-with-javascript/
const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    for (const [index, w] of words.entries()) {
        const testLine = line + w + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && index > 0) {
            ctx.fillText(line, x, y);
            line = w + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}
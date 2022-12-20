export class BigBubble {
    constructor(text) {
        this.CurrentText = text;

        this.Visibility = 0;
        this.TargetVisibility = 0;
    }

    Update() {
        this.Visibility = this.Visibility * 0.9 + this.TargetVisibility * 0.1;
    }

    Draw(context) {
        context.save();
        context.rotate(0.01);
        context.translate(0, (1 - this.Visibility) * window.innerHeight);

        context.shadowBlur = 20;
        context.shadowColor = '#184E77';
        context.fillStyle = '#D9ED92';
        context.fillRect(50, 50, window.innerWidth - 100, window.innerHeight - 100);
        context.shadowBlur = 0;

        context.strokeStyle = '#184E77';
        context.lineWidth = 2;
        context.strokeRect(50 + this.Jitter(), 50 + this.Jitter(), window.innerWidth - 100 + this.Jitter(), window.innerHeight - 100 + this.Jitter())

        context.fillStyle = '#184E77';
        context.font = '32px main';
        context.textBaseline = 'top';
        context.textAlign = 'left';
        
        wrapText(context, this.GlitchText(this.CurrentText), window.innerWidth - 120, 70, 50, 32);

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
        return BigBubble.JitterAmount / 2 - Math.random() * BigBubble.JitterAmount;
    }
}

String.prototype.replaceAtIndex = function (_index, _newValue) {
    return this.substr(0, _index) + _newValue + this.substr(_index + _newValue.length)
}

function wrapText(ctx, text, maxWidth, x, y, lineHeight) {
    const xOffset = x
    let yOffset = y
    const lines = text.split("\n")
    const fittingLines = []
    for (let i = 0; i < lines.length; i++) {
        if (ctx.measureText(lines[i]).width <= maxWidth) {
            fittingLines.push([lines[i], xOffset, yOffset])
            yOffset += lineHeight
        } else {
            let tmp = lines[i]
            while (ctx.measureText(tmp).width > maxWidth) {
                tmp = tmp.slice(0, tmp.length - 1)
            }
            if (tmp.length >= 1) {
                const regex = new RegExp(`.{1,${tmp.length}}`, "g")
                const thisLineSplitted = lines[i].match(regex)
                for (let j = 0; j < thisLineSplitted.length; j++) {
                    fittingLines.push([thisLineSplitted[j], xOffset, yOffset])
                    yOffset += lineHeight
                }
            }
        }
    }
    fittingLines.forEach(function (text) {
        ctx.fillText(...text);
    });
}

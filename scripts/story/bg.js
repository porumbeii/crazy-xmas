export class Background {
    constructor(sprite) {
        this.Sprite = sprite;
        this.Visibility = 0;
        this.TargetVisibility = 0;
    }

    Update() {
        this.Visibility = this.TargetVisibility*0.1+this.Visibility*0.9;
    }

    Draw(context) {
        context.globalAlpha = this.Visibility;
        context.drawImage(this.Sprite.Image, 0, 0, innerWidth, innerHeight);
        context.globalAlpha = 1;
    }
}
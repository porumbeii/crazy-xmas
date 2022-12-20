export class Character {
    static Left = 0;
    static Center = 1;
    static Right = 2;

    constructor(sprite, position, name) {
        this.Position = position;
        this.CurrentPosition = position;
        this.Sprite = sprite;
        this.Visibility = 0;
        this.TargetVisibility = 0;
    }

    Update() {
        this.Visibility = this.TargetVisibility * 0.1 + this.Visibility * 0.9;
        this.CurrentPosition = this.Position * 0.1 + this.CurrentPosition * 0.9;
    }

    Draw(context) {
        context.drawImage(this.Sprite.Image, window.innerWidth/3*this.CurrentPosition, window.innerHeight/3+window.innerHeight/3*2*(1-this.Visibility))
    }
}
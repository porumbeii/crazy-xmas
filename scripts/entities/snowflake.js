export class Snowflake {
    constructor() {
        this.Generate();
    }

    Update() {
        this.Y += this.Size/5;
        if (this.Y > window.innerHeight) this.Generate();
        this.CurrentSize = (this.Size*0.1+this.CurrentSize*0.9)
    }

    Generate() {
        this.X = innerWidth*Math.random();
        this.Y = innerHeight*Math.random();
        this.CurrentSize = 0;
        this.Size = 5+15*Math.random();
    }

    Draw(context) {
        context.fillStyle = '#d9ed92aa';
        context.fillRect(this.X, this.Y, this.CurrentSize, this.CurrentSize)
    }
}
export class CanvasManager {
    constructor() {
        window.canvasManager = this;

        this.Canvas = document.getElementById('canvasElement');
        this.Context = this.Canvas.getContext('2d');
        this.Canvas.width = innerWidth;
        this.Canvas.height = innerHeight;

        document.body.style.overflow = 'hidden';
        this.Canvas.style.position = 'absolute';
        this.Canvas.style.left = 0;
        this.Canvas.style.top = 0;
    }

    get Width() {
        return this.Canvas.Width;
    }

    get Height() {
        return this.Canvas.Height;
    }
}
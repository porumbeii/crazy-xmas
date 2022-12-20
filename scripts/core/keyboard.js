export const keyboard = new class {
    constructor() {
        document.onkeydown = this.KeyDown.bind(this);
        document.onkeyup = this.KeyUp.bind(this);

        this.KeysDown = [];
    }

    KeyDown(e) {
        this.KeysDown[e.keyCode] = true;
    }

    KeyUp(e) {
        this.KeysDown[e.keyCode] = false;
    }

    IsKeyDown(keyCode) {
        return this.KeysDown[keyCode];
    }
}();

export const keys = {
    w: 87,
    a: 65,
    s: 83,
    d: 68,
    space: 32
}
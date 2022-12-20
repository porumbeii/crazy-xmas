import { LoadScreen } from '../screens/loadScreen.js';
import { PlayScreen } from '../screens/playScreen.js';
import { ScreenManager } from '../manager/screenManager.js';
import { CanvasManager } from '../manager/canvasManager.js';
import { SceneManager } from '../manager/sceneManager.js';
import { mouse } from '../content/mouse.js';

export const game = new class {
    constructor() {
        requestAnimationFrame(this.Loop);
    }

    Initialise() {
        this.CanvasManager = new CanvasManager();
        this.SceneManager = new SceneManager();
        this.ScreenManager = new ScreenManager(new LoadScreen());
    }

    Update() {
        this.ScreenManager.Update();
        this.SceneManager.Update();
        mouse.Update();
    }

    Draw() {
        this.ScreenManager.Draw(this.CanvasManager.Context);
        mouse.Draw(this.CanvasManager.Context);
    }

    Loop() {
        game.Update();
        game.Draw();
        requestAnimationFrame(game.Loop);
    }
}();

window.ActiveXObject = game;

game.Initialise();
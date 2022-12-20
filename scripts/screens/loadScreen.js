import { content } from '../content/content.js';
import { game } from '../core/game.js';
import { SnowflakeManager } from '../manager/snowflakeManager.js';
import { PlayScreen } from './playScreen.js';

export class LoadScreen {
    constructor() {
        this.Snow = new SnowflakeManager();
    }

    Update() {
        this.Snow.Update();

        if (content.Loaded) game.ScreenManager.ChangeScreen(new PlayScreen()); 
    }

    Draw(context) {
        context.fillStyle = '#184e77';
        context.fillRect(0, 0, innerWidth, innerHeight);
        this.Snow.Draw(context);
    }
}
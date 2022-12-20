import { game } from '../core/game.js';
import { SnowflakeManager } from '../manager/snowflakeManager.js';
import { Story } from '../story/story.js';
import { Player } from '../entities/player.js';
import { Camera } from '../core/camera.js';
import { World } from '../entities/world.js';
import { Woodsman } from '../entities/woodsman.js';
import { MarketMan } from '../entities/marketMan.js';
import { Shop } from '../entities/shop.js';
import { Kid } from '../entities/kid.js';
import { content } from '../content/content.js';

export class PlayScreen {
    constructor() {}

    Initialise() {
        window.playScreen = this;

        this.Snow = new SnowflakeManager();
        this.World = new World();
        this.WoodsMan = new Woodsman();
        this.MarketMan = new MarketMan();
        this.Shop = new Shop();
        this.Story = new Story();
        this.Player = new Player();
        this.Camera =  new Camera();
        this.Kid = new Kid();
    }

    Update() {
        this.Snow.Update();
        this.Story.Update();
        this.Player.Update();
        this.Camera.Update();
        this.Shop.Update();
        this.MarketMan.Update();
        this.World.Update();
        this.WoodsMan.Update();
        this.Kid.Update();
    }

    Draw(context) {
        context.drawImage(game.SceneManager.Render(), 0, 0, innerWidth, innerHeight);
        this.Snow.Draw(context);
        this.Story.Draw(context);
        this.Player.Draw(context);
        context.globalAlpha = 0.1;
        context.drawImage(content.RetroScreen.Image, 0, 0, innerWidth, innerHeight);
        context.globalAlpha = 1;
    }
}
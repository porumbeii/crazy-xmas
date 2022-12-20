import { Font } from './font.js';
import { Model } from './model.js';
import { Sound } from './sound.js';
import { Sprite } from './sprite.js';

export const content = new class {
    constructor() {
        this.Items = [];
    }

    Load() {
        this.World = new Model('assets/glb/tree.glb');
        this.MainFont = new Font('main', 'assets/ttf/main.ttf');
        this.Doge = new Sprite('assets/png/dogeDog.png');
        this.Fox = new Sprite('assets/png/fox.png');
        this.Music = new Sound('assets/mp3/music.mp3');
        this.ChristmasTree = new Sound('assets/mp3/christmas%20tree.mp3');
        this.Tree = new Sprite('assets/png/tree.png');
        this.Music.Audio.volume = 0.3;
        this.Player = new Model('assets/glb/player.glb');
        this.Woodsman = new Model('assets/glb/woodman.glb');
        this.ClosedSign = new Sprite('assets/png/closed.png');
        this.Document = new Sprite('assets/png/document.png');
        this.MarketMan = new Model('assets/glb/marketMan.glb');
        this.Kid = new Model('assets/glb/kid.glb');
        this.RetroScreen = new Sprite('assets/png/retroscreen.png');
        this.Play = new Sprite('assets/png/play.png')
    }

    get Loaded() {
        for (let item of this.Items)
            if (!item.Loaded) return false;
        return true
    }
}();

content.Load();
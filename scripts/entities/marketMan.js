import { AnimationMixer } from "../../lib/three.module.js";
import { content } from "../content/content.js";
import { game } from "../core/game.js";

export class MarketMan {
    constructor() {
        this.Character = content.MarketMan.Scene;
        game.SceneManager.Add(this.Character);
        this.Character.position.set(240.21579939498048, -346.7232331797889, -90.80079362423642);
        this.Mixer = new AnimationMixer(this.Character);
        this.Static = this.Mixer.clipAction(content.Woodsman.Animations[0]);
        this.Static.play();
    }

    Update() {
        this.Character.lookAt(playScreen.Player.Character.position.x, playScreen.Player.Character.position.y, playScreen.Player.Character.position.z);
        this.Character.rotation.set(0, this.Character.rotation.y+Math.PI, 0)
        this.Mixer.update(delta);
        if (playScreen.Story.Halt == 'GOTO_MARKET' && this.Character.position.distanceTo(playScreen.Player.Character.position) < 50) playScreen.Story.Continue();
    }
}
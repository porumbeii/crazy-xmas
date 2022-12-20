import { AnimationMixer } from "../../lib/three.module.js";
import { content } from "../content/content.js";
import { game } from "../core/game.js";

export class World {
    constructor() {
        this.Character = content.World.Scene;
        game.SceneManager.Scene.add(this.Character);
        this.Mixer = new AnimationMixer(this.Character);
        this.Animation = this.Mixer.clipAction(content.World.Animations[0]);
        this.Animation.play();
    }

    Update() {
        this.Mixer.update(delta);
    }
}
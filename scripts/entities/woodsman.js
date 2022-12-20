import { AnimationMixer } from "../../lib/three.module.js";
import { content } from "../content/content.js";
import { game } from "../core/game.js";

export class Woodsman {
    constructor() {
        this.Character = content.Woodsman.Scene;
        game.SceneManager.Add(this.Character);
        this.Character.position.set(-268.4795220869373, -323.41344165709796, 155.47415646724698);
        this.Mixer = new AnimationMixer(this.Character);
        this.Static = this.Mixer.clipAction(content.Woodsman.Animations[0]);
        this.Static.play();
    }

    Update() {
        this.Character.lookAt(playScreen.Player.Character.position.x, playScreen.Player.Character.position.y, playScreen.Player.Character.position.z);
        this.Character.rotation.set(0, this.Character.rotation.y+Math.PI, 0)
        this.Mixer.update(delta);
        if (playScreen.Story.Halt == 'GOTO_WOODMAN' && this.Character.position.distanceTo(playScreen.Player.Character.position) < 50) playScreen.Story.Continue();
    }
}
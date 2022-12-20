import { AnimationMixer } from "../../lib/three.module.js";
import { content } from "../content/content.js";
import { game } from "../core/game.js";

export class Kid {
    constructor() {
        this.Character = content.Kid.Scene;
        game.SceneManager.Add(this.Character);
        this.Character.position.set(-76.74428829647417, -457.13898882192245, -264.4882000598808);
        this.Mixer = new AnimationMixer(this.Character);
        this.Static = this.Mixer.clipAction(content.Kid.Animations[0]);
        this.Static.play();
    }

    Update() {
        this.Character.lookAt(playScreen.Player.Character.position.x, playScreen.Player.Character.position.y, playScreen.Player.Character.position.z);
        this.Character.rotation.set(0, this.Character.rotation.y+Math.PI, 0)
        this.Mixer.update(delta);
        if (playScreen.Story.Halt == 'GOTO_HOME' && this.Character.position.distanceTo(playScreen.Player.Character.position) < 50) playScreen.Story.Continue();
    }
}
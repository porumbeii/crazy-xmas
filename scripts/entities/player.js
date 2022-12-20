import { AnimationMixer, ArrowHelper, BoxGeometry, Mesh, MeshPhongMaterial, Raycaster, Vector3 } from "../../lib/three.module.js";
import { content } from "../content/content.js";
import { game } from "../core/game.js";
import { keyboard, keys } from "../core/keyboard.js";

export class Player {
    constructor() {
        this.Character = content.Player.Scene;
        this.RayCaster = new Raycaster(new Vector3(this.Character.position.x, 0.01, this.Character.position.z), new Vector3(0, -1, 0).normalize());

        this.AnimationMixer = new AnimationMixer(this.Character);
        this.Walk = this.AnimationMixer.clipAction(content.Player.Animations[1]);
        this.Walk.play();

        this.Static = this.AnimationMixer.clipAction(content.Player.Animations[0]);
        this.Static.play();

        this.Velocity = 0;

        game.SceneManager.Add(this.Character);
    }

    Update() {
        this.CurrentDistance = this.GetCurrentAltitude();
        this.Character.position.y = -this.CurrentDistance*0.1 + this.Character.position.y*0.9;

        this.Speed = 0;

        if (keyboard.IsKeyDown(keys.w)) {
            this.Speed = -1;
        }

        if (keyboard.IsKeyDown(keys.s)) {
            this.Speed = 1;
        }

        this.Velocity = this.Speed*0.1 + this.Velocity*0.9;

        this.Walk.weight = Math.abs(this.Velocity);
        this.Static.weight = 1-Math.abs(this.Velocity);
        this.AnimationMixer.update(delta);

        this.TryToTranslateZ(this.Velocity);

        if (keyboard.IsKeyDown(keys.a))
            this.Character.rotateY(0.03);

        if (keyboard.IsKeyDown(keys.d))
            this.Character.rotateY(-0.03);
    }

    GetCurrentAltitude() {
        this.RayCaster.set(new Vector3(this.Character.position.x, 0.01, this.Character.position.z), new Vector3(0, -1, 0).normalize());
        let intersections = this.RayCaster.intersectObjects(game.ScreenManager.CurrentScreen.World.Character.children)
        return intersections.length ? intersections[0].distance : Infinity;
    }

    TryToTranslateZ(value) {
        this.Character.translateZ(value);
        let possibleDistance = this.GetCurrentAltitude();
        if (Math.abs(possibleDistance - this.CurrentDistance) > 10)
            this.Character.translateZ(-value);
    }


    Draw() {

    }
}
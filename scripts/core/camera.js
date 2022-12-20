import { Object3D, Vector3 } from "../../lib/three.module.js";
import { game } from "./game.js";

export class Camera {
    constructor() {
        this.Temporary = new Vector3();
        this.Direction = new Vector3();
        this.a = new Vector3();
        this.b = new Vector3();
        this.DistanceToPlayer = 100;
        this.Goal = new Object3D();
        this.Follow = new Object3D();
        this.Follow.position.z = -this.DistanceToPlayer;
        playScreen.Player.Character.add(this.Follow);
        this.Goal.add(game.SceneManager.Camera);
    }

    Update() {
        this.a.lerp(playScreen.Player.Character.position, 0.4);
        this.b.copy(this.Goal.position);
        this.Direction.copy(this.a).sub(this.b).normalize();
        const distance = this.a.distanceTo(this.b) - this.DistanceToPlayer;
        this.Goal.position.addScaledVector(this.Direction, distance);
        this.Goal.position.lerp(this.Temporary, 0.02);
        this.Temporary.setFromMatrixPosition(this.Follow.matrixWorld);

        game.SceneManager.Camera.lookAt(playScreen.Player.Character.position.x, playScreen.Player.Character.position.y, playScreen.Player.Character.position.z);
    }
}
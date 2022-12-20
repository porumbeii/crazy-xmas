import { AnimationMixer, Vector3 } from "../../lib/three.module.js";
import { content } from "../content/content.js";
import { game } from "../core/game.js";

export class Shop {
    constructor() {

    }

    Update() {
        if (playScreen.Story.Halt == 'GOTO_SHOP' && new Vector3(198.39719574454037, -328.7466170009882, 167.92028777086298).distanceTo(playScreen.Player.Character.position) < 50) playScreen.Story.Continue();
    }
}
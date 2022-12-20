import { content } from "../content/content.js";
import { mouse } from "../content/mouse.js";
import { Background } from "./bg.js";
import { BigBubble } from "./bigBubble.js";
import { Character } from "./character.js";
import { SpeechBubble } from "./speechBubble.js";
import { storyLine } from "./storyLine.js";

export class Story {
    constructor() {
        this.SpeechBubble = new SpeechBubble();

        this.CanHalt = true;

        this.Characters = {

        };

        this.Sounds = { 
            christmasTree: content.ChristmasTree
        };

        this.Background = {
            closed: new Background(content.ClosedSign),
            document: new BigBubble(`
            ---DELIVERY---
            Sender: Giant Xmas Inc. Co. Ltd. (c) Giant companies Inc. Co. Ltd
            Receiver: Naurabi-nowhere market
            Description: 1200 regular USDA certified, bio fir trees 1.80231m.
            Weight: 130210864.023mg
            Date placed: 19/12/2022 16:14:01:9998 GMT+2:00.
            Date expected: 21/12/20022 12:00:00:0000 GMT+2:00.
            Date departed: 19/12/2022 22:02:05:1234 GMT+2:00.
            Date arrived: ———— ————
            Country from: Romania/Roumaine/România/Rumania
            Country to: Unknown/Inconnu/Necunoscut/Desconocido
            Delivered by: FUN Courier.
              In case of damage suffered by this package/letter/product during transit/deposit/delivery FUN courier will fund the costs of repairing/recreating/rebuying this package/letter/product.
            `),
            tree: new Background(content.Tree),
            play: new Background(content.Play)
        };

        this.Lines = storyLine.split('\n');
        this.CurrentCommandIndex = 0;
    }

    get CurrentCommand() { return this.Lines[this.CurrentCommandIndex]; }

    Update() {
        if (this.Halt && this.CanHalt) return;
        let commandSplit = this.CurrentCommand.split(' ');
        if (commandSplit[0] == '!') {
            commandSplit.shift();
            if (this.CurrentCommandIndex != this.Lines.length-1) this.CurrentCommandIndex++;
        }

        switch (commandSplit[0]) {
            case 'say':
            case 'removebubble':
                this.SpeechBubble.TargetText = commandSplit.slice(1).join(" ");
                break;
            case 'show':
                this.Characters[commandSplit[1]].TargetVisibility = 1;
                break;
            case 'hide':
                this.Characters[commandSplit[1]].TargetVisibility = 0;
                break;
            case 'move':
                this.Characters[commandSplit[1]].Position = ['left', 'middle', 'right'].indexOf(commandSplit[2]);
                break;
            case 'await':
                break;
            case 'halt':
                this.Halt = commandSplit[1];
                break;
            case 'play':
                this.Sounds[commandSplit[1]].Play();
                break;
            case 'bg':
                for (let bgName in this.Background) this.Background[bgName].TargetVisibility = 0;
                if (this.Background[commandSplit[1]])
                    this.Background[commandSplit[1]].TargetVisibility = 1;
                break;
            default:
                if (this.CurrentCommandIndex != this.Lines.length-1) this.CurrentCommandIndex++;
                break;
        }
        if (mouse.Released && this.CurrentCommandIndex != this.Lines.length-1) this.CurrentCommandIndex++;

        for (let name in this.Characters) this.Characters[name].Update();
        for (let bgName in this.Background) this.Background[bgName].Update();
        this.SpeechBubble.Update();
    }

    Continue() {
        this.Halt = null;
        this.CurrentCommandIndex++;
    }

    Draw(context) {
        for (let name in this.Characters) this.Characters[name].Draw(context);
        for (let bgName in this.Background) this.Background[bgName].Draw(context);
        this.SpeechBubble.Draw(context);
    }
}
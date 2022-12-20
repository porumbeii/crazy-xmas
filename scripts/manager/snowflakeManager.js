import { Snowflake } from '../entities/snowflake.js';

export class SnowflakeManager {
    constructor() {
        this.Flakes = [];

        for (let i = 0; i < 100; i++)
            this.Flakes.push(new Snowflake())
    }

    Update() {
        for (let flake of this.Flakes)
            flake.Update();
    }

    Draw(context) {
        for (let flake of this.Flakes)
            flake.Draw(context);
    }
}
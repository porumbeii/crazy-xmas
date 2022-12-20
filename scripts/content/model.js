import { GLTFLoader } from '../../lib/GLTFLoader.js';
import { content } from './content.js';

export class Model {
    constructor(url) {
        content.Items.push(this);

        const loader = new GLTFLoader();

        loader.load(
            url,
            function (gltf) {
                this.Animations = gltf.animations;
                this.Scene = gltf.scene;
                this.Loaded = true;
            }.bind(this),

            function (xhr) {
                this.Progress = xhr.loaded / xhr.total;
            }.bind(this),
           
            function (error) {
                alert('Erorr 00, please reload. If it persists please contact Retro-Pigeon')

                this.Erorr = true;
            }.bind(this)
        );
    }
}
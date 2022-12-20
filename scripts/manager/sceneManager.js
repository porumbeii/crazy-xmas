import { OrbitControls } from '../../lib/OrbitControls.js';
import { RGBELoader } from '../../lib/RGBELoader.js';
import { AmbientLight, AxesHelper, Clock, Color, EquirectangularReflectionMapping, Object3D, PerspectiveCamera, Scene, Vector3 } from '../../lib/three.module.js';
import { WebGLRenderer } from '../../lib/three.module.js';
import { game } from '../core/game.js';

export class SceneManager {
    constructor() {
        this.Scene = new Scene();
        this.Scene.background = new Color(0x168aad);

        this.Camera = new PerspectiveCamera(90, innerWidth / innerHeight, 1, 10000);
        this.Camera.position.set(100, 100, 100);
        this.Camera.lookAt(0, 0, 0);

        this.Clock = new Clock();

        this.Renderer = new WebGLRenderer();
        this.Renderer.setSize(innerWidth, innerHeight);

        //Note: Not appending directly to body: Must be drawn on the CanvasManager canvas

        const axesHelper = new AxesHelper(500);
        this.Scene.add(axesHelper);

        new RGBELoader()
            .load('assets/hdr/enviorment.hdr', function (texture) {
                texture.mapping = EquirectangularReflectionMapping;
                //this.Scene.background = texture;
                this.Scene.environment = texture;
            }.bind(this));
        
        this.Add(new AmbientLight(0x168aad, 0.5));
    }

    Update() {
        window.delta = this.Clock.getDelta();
    }

    Render() {
        this.Renderer.render(this.Scene, this.Camera);

        return this.Renderer.domElement;
    }

    Add(...objects) {
        this.Scene.add(...objects)
    }
}
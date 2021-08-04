import {
    THREE,
    State,
} from '../../lib/juicy';

export default class LoadingScreen extends State {
    ambient = new THREE.AmbientLight(0xffffff, 0.5);
    directional = new THREE.DirectionalLight(0xffffff, 0.5);

    objects: { [key: string]: any } = {};
    box: THREE.Object3D;

    constructor() {
        super();

        // Lights
        this.scene.add(this.ambient);
        this.scene.add(this.directional);
        // this.orthographic(1);
        this.lookAt(new THREE.Vector3(5, 5, 5), new THREE.Vector3(0));

        let g = new THREE.BoxGeometry(1, 1, 1);
        let m = new THREE.MeshPhongMaterial({ color: 0xffffff });
        this.box = new THREE.Mesh(g, m);
        this.scene.add(this.box);
    }

    load(name: string) {
        this.objects[name] = null;
    }

    init() {
        this.checkLoaded();
    }

    update(dt: number) {
        this.box.rotateY(dt);
    }

    checkLoaded() {
    }
};

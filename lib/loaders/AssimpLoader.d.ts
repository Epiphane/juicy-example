import {
	Object3D,
	Loader,
	LoadingManager
} from '../three.js';


export interface Assimp {
	animation: any;
	object: Object3D;
}

export class AssimpLoader extends Loader {

	constructor(manager?: LoadingManager);

	load(url: string, onLoad: (result: Assimp) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
	parse(buffer: ArrayBuffer, path: string): Assimp;

}

import {
	Loader,
	LoadingManager,
	Group
} from '../three.js';
import {
	MTLLoader
} from './MTLLoader_.js';

export class OBJLoader extends Loader {

	constructor(manager?: LoadingManager);
	materials: MTLLoader.MaterialCreator;

	load(url: string, onLoad: (group: Group) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
	parse(data: string): Group;
	setMaterials(materials: MTLLoader.MaterialCreator): this;

}

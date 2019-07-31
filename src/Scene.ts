import * as SVG from "svg.js";

import TreeNode from './TreeNode';
import { ParentView } from './State'
import { Coords, Section, NodeParams } from './types';


export default class Scene {
    private view: SVG.Doc;
    private rootNode: TreeNode;
    private technologies: Section;

    constructor(sceneBox: HTMLElement, technologies: Section) {
        this.view = SVG(sceneBox).size('100%', '100%');
        this.technologies = technologies;

        this.createRootNode(sceneBox);
    }

    createRootNode(sceneBox: HTMLElement) {
        const coords: Coords = {
            X: sceneBox.offsetWidth/2,
            Y: sceneBox.offsetHeight/2,
            parentX: sceneBox.offsetWidth/2,
            parentY: sceneBox.offsetHeight/2
        }

        const rootNodeParams: NodeParams = {
            defaultState: new ParentView(),
            globalView: this.view,
            section: this.technologies,
            coords: coords
        }

        this.rootNode = new TreeNode(rootNodeParams);
    }
}
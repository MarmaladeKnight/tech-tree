import * as SVG from 'svg.js';

import TreeNode from './TreeNode';
import { Coords } from './types';

export abstract class State {
    protected context: TreeNode;

    public setContext(context: TreeNode) {
        this.context = context;
        // this.changeView();
    }

    public changeView() {}
}

export class ParentView extends State {
    public changeView() {
        this.context.view.animate(400, '>').attr({
            fill: '#f06'
        });
    }
}

export class ChildView extends State {
    public changeView() {
        this.context.view.animate(400, '>').attr({
            fill: '#006'
        });
    }
}
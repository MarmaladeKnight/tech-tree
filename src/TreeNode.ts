import * as SVG from "svg.js";

import { State } from './State'
import { Coords, Section, NodeParams } from './types';

export default class TreeNode {
    private coords: Coords;
    private subSections: Array<Section>;
    private viewState: State;
    private globalView: SVG.Doc;
    public view: SVG.Circle;

    constructor(params: NodeParams) {
        this.globalView =  params.globalView;
        this.coords = params.coords;
        this.subSections = params.section.subSections.slice();

        this.view = this.globalView.circle(100)
                        .attr({
                            cx: params.coords.parentX,
                            cy: params.coords.parentY,
                            opacity: '1'
                        });

        this.transitionTo(params.defaultState);

        this.view.click(() => {
            this.viewState.changeView();
        });
    }

    public transitionTo(state: State): void {
        this.viewState = state;
        this.viewState.setContext(this);
    }

    private createView() {

    }
}

class BubbleView {
    private coords: Coords;
    private bubble: SVG.Circle;

    constructor(coords: Coords) {
        this.coords = coords;

        // this.bubble = draw.circle(100)
        //                 .attr({
        //                     cx: coords.parentX,
        //                     cy: coords.parentY,
        //                     fill: '#f06',
        //                     opacity: '1'
        //                 });
    }

    show() {
        this.bubble.attr({
            display: 'block'
        }).animate(400, '>').attr({
            cx: this.coords.X,
            cy: this.coords.Y,
            opacity: '1'
        });
    }

    hide() {
        this.bubble.animate(400, '>').attr({
            cx: this.coords.parentX,
            cy: this.coords.parentY,
            opacity: '1 ',
        }).attr({
            display: 'none'
        });
    }

    remove() {
        this.bubble.remove();
    }

    onClick(func: Function) {
        this.bubble.click(func);
    }
}
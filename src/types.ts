import * as SVG from 'svg.js';

import { State } from "./State";

export interface Coords {
    X: Number,
    Y: Number,
    parentX: Number,
    parentY: Number
}

export interface Section {
    subSections?: Array<Section>,
    title: String
}

export interface NodeParams {
    defaultState: State,
    globalView: SVG.Doc,
    section: Section,
    coords: Coords
}
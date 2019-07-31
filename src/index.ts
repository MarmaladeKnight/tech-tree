// import TreeNode from './TreeNode';
import * as SVG from 'svg.js';

import Scene from './Scene';
import { Section } from './types'

const sceneBox: HTMLElement = document.getElementById('drawing');


const technologies: Section = {
        subSections: [
            {
                subSections: [],
                title: "HTML"
            },
            {
                subSections: [],
                title: "CSS"
            },
            {
                subSections: [],
                title: "JS"
            }
        ],
        title: "Web"
    }

const scene = new Scene(sceneBox, technologies);
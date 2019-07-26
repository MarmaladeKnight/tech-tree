import * as SVG from "svg.js";

var draw: SVG.Doc = SVG('drawing').size(300, 300);
let rect: any = draw.rect(100, 100).attr({ fill: '#006' });
import { Circle, Stroke } from 'angular-svg';

export class Circles extends Array {
    greenRedAppleTree: Circle;
    earlyAppleTree: Circle;
    peachTree: Circle;
    cherryTree: Circle;
    pearTree: Circle;
    plumTree: Circle;
    rockery: Circle;
    pine: Circle;
    pine2: Circle;
    japaneseWillow: Circle;
    herbs: Circle;
    berryWojtek: Circle;
    berryZojka: Circle;

    constructor() {
        super();
        this.greenRedAppleTree = null;
        this.earlyAppleTree = null;
        this.peachTree = null;
        this.cherryTree = null;
        this.pearTree = null;
        this.plumTree = null;
        this.rockery = null;
        this.pine = null;
        this.pine2 = null;
        this.japaneseWillow = null;
        this.herbs = null;
        this.berryWojtek = null;
        this.berryZojka = null;
    }

    initialize() {
        this.greenRedAppleTree = { cx: 323, cy: 355, r: 27, stroke: new Stroke('#7fad4b', 'black', 0, 1, 1) };
        this.earlyAppleTree = { cx: 425, cy: 354, r: 35, stroke: new Stroke('#4ca135', 'black', 0, 1, 1) };
        this.peachTree = { cx: 472, cy: 267, r: 20, stroke: new Stroke('#96a62d', 'black', 0, 1, 1) };
        this.cherryTree = { cx: 391, cy: 492, r: 12, stroke: new Stroke('#8aa62d', 'black', 0, 1, 1) };
        this.plumTree = { cx: 728, cy: 700, r: 30, stroke: new Stroke('#106b24', 'black', 0, 1, 1) };
        this.rockery = { cx: 878, cy: 523, r: 32, stroke: new Stroke('#9fa39d', 'black', 0, 1, 1) };
        this.pearTree = { cx: 909, cy: 538, r: 27, stroke: new Stroke('#86b32e', 'black', 0, 1, 1) };
        this.pine = { cx: 554, cy: 578, r: 23, stroke: new Stroke('#0a4d26', 'black', 0, 1, 1) };
        this.pine2 = { cx: 509, cy: 622, r: 23, stroke: new Stroke('#0a4d26', 'black', 0, 1, 1) };
        this.japaneseWillow = { cx: 510, cy: 669, r: 26, stroke: new Stroke('#b4cc76', 'black', 0, 1, 1) };
        this.herbs = { cx: 798, cy: 315, r: 11, stroke: new Stroke('#8b71c9', 'black', 0, 1, 1) };
        this.berryWojtek = { cx: 973, cy: 415, r: 8, stroke: new Stroke('#0a6141', 'black', 0, 1, 1) };
        this.berryZojka = { cx: 1003, cy: 443, r: 8, stroke: new Stroke('#0a6141', 'black', 0, 1, 1) }; 
    }
}
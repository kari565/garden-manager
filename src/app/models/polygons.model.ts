import { Polygon } from 'angular-svg';

export class Polygons extends Array {
    polygon: Polygon;
    lane: Polygon;
    house: Polygon;
    pavilion: Polygon;
    blueBerries: Polygon;
    sidewalk: Polygon;
    thujasHedge1: Polygon;
    thujasHedge2: Polygon;
    thujasHedge3: Polygon;
    thujasHedge4: Polygon;
    customHedge: Polygon;
    juniperIsland: Polygon;
    flowerbed1: Polygon;
    flowerbed2: Polygon;
    flowerbed3: Polygon;
    gardenArea2: Polygon;
    gardenArea3: Polygon;
    gardenArea4: Polygon;
    sideShed: Polygon;
    scrub: Polygon;
    mainShed: Polygon;
    raisedBed: Polygon;
    raisedBed2: Polygon;
    raisedBed3: Polygon;
    raisedBed4: Polygon;
    raisedBed5: Polygon;
    raisedBed6: Polygon;
    childrensHouse: Polygon;
    greenhouse: Polygon;
    greenhouseRaisedBed: Polygon;
    greenhouseRaisedBed2: Polygon;
    greenhouseRaisedBed3: Polygon;

    constructor() {
        super();
        this.polygon = new Polygon();
        this.lane = new Polygon();
        this.house = new Polygon();
        this.pavilion = new Polygon();
        this.blueBerries = new Polygon();
        this.sidewalk = new Polygon();
        this.thujasHedge1 = new Polygon();
        this.thujasHedge2 = new Polygon();
        this.thujasHedge3 = new Polygon();
        this.thujasHedge4 = new Polygon();
        this.customHedge = new Polygon();
        this.juniperIsland = new Polygon();
        this.flowerbed1 = new Polygon();
        this.flowerbed2 = new Polygon();
        this.flowerbed3 = new Polygon();
        this.gardenArea2 = new Polygon();
        this.gardenArea3 = new Polygon();
        this.gardenArea4 = new Polygon();
        this.sideShed = new Polygon();
        this.scrub = new Polygon();
        this.mainShed = new Polygon();
        this.raisedBed = new Polygon();
        this.raisedBed2 = new Polygon();
        this.raisedBed3 = new Polygon();
        this.raisedBed4 = new Polygon();
        this.raisedBed5 = new Polygon();
        this.raisedBed6 = new Polygon();
        this.childrensHouse = new Polygon();
        this.greenhouse = new Polygon();
        this.greenhouseRaisedBed = new Polygon();
        this.greenhouseRaisedBed2 = new Polygon();
        this.greenhouseRaisedBed3 = new Polygon();
    }

    initialize() {
        this.polygon.vertices.push({ x: 174, y: 407 });
        this.polygon.vertices.push({ x: 632, y: 10 });
        this.polygon.vertices.push({ x: 705, y: 49 });
        this.polygon.vertices.push({ x: 795, y: 1 });
        this.polygon.vertices.push({ x: 1257, y: 103 });
        this.polygon.vertices.push({ x: 1299, y: 255 });
        this.polygon.vertices.push({ x: 577, y: 920 });

        this.lane.vertices.push({ x: 174, y: 407 });
        this.lane.vertices.push({ x: 192, y: 391 });
        this.lane.vertices.push({ x: 622, y: 878 });
        this.lane.vertices.push({ x: 577, y: 920 });

        this.house.vertices.push({ x: 480, y: 402 });
        this.house.vertices.push({ x: 574, y: 317 });
        this.house.vertices.push({ x: 682, y: 441 });
        this.house.vertices.push({ x: 591, y: 530 });

        this.pavilion.vertices.push({ x: 642, y: 315 });
        this.pavilion.vertices.push({ x: 714, y: 253 });
        this.pavilion.vertices.push({ x: 782, y: 329 });
        this.pavilion.vertices.push({ x: 711, y: 394 });

        this.blueBerries.vertices.push({ x: 620, y: 114 });
        this.blueBerries.vertices.push({ x: 633, y: 99 });
        this.blueBerries.vertices.push({ x: 945, y: 365 });
        this.blueBerries.vertices.push({ x: 912, y: 370 });

        this.sidewalk.vertices.push({ x: 406, y: 633 });
        this.sidewalk.vertices.push({ x: 550, y: 508 });
        this.sidewalk.vertices.push({ x: 565, y: 527 });
        this.sidewalk.vertices.push({ x: 422, y: 652 });

        this.thujasHedge1.vertices.push({ x: 396, y: 215 });
        this.thujasHedge1.vertices.push({ x: 582, y: 54 });
        this.thujasHedge1.vertices.push({ x: 600, y: 71 });
        this.thujasHedge1.vertices.push({ x: 413, y: 235 });

        this.thujasHedge2.vertices.push({ x: 562, y: 810 });
        this.thujasHedge2.vertices.push({ x: 582, y: 790 });
        this.thujasHedge2.vertices.push({ x: 627, y: 840 });
        this.thujasHedge2.vertices.push({ x: 1043, y: 457 });
        this.thujasHedge2.vertices.push({ x: 1064, y: 472 });
        this.thujasHedge2.vertices.push({ x: 622, y: 878 });
        
        this.thujasHedge3.vertices.push({ x: 422, y: 652 });
        this.thujasHedge3.vertices.push({ x: 440, y: 636 });
        this.thujasHedge3.vertices.push({ x: 534, y: 740 });
        this.thujasHedge3.vertices.push({ x: 516, y: 758 });

        this.thujasHedge4.vertices.push({ x: 192, y: 391 });
        this.thujasHedge4.vertices.push({ x: 212, y: 374 });
        this.thujasHedge4.vertices.push({ x: 424, y: 617 });
        this.thujasHedge4.vertices.push({ x: 406, y: 633 });

        this.customHedge.vertices.push({ x: 212, y: 374 });
        this.customHedge.vertices.push({ x: 396, y: 215 });
        this.customHedge.vertices.push({ x: 413, y: 235 });
        this.customHedge.vertices.push({ x: 230, y: 395 });

        this.juniperIsland.vertices.push({ x: 385, y: 416 });
        this.juniperIsland.vertices.push({ x: 401, y: 408 });
        this.juniperIsland.vertices.push({ x: 417, y: 407 });
        this.juniperIsland.vertices.push({ x: 466, y: 440 });
        this.juniperIsland.vertices.push({ x: 497, y: 481 });
        this.juniperIsland.vertices.push({ x: 501, y: 505 });
        this.juniperIsland.vertices.push({ x: 494, y: 520 });
        this.juniperIsland.vertices.push({ x: 478, y: 530 });
        this.juniperIsland.vertices.push({ x: 448, y: 522 });
        this.juniperIsland.vertices.push({ x: 411, y: 490 });
        this.juniperIsland.vertices.push({ x: 384, y: 448 });
        this.juniperIsland.vertices.push({ x: 380, y: 428 });

        this.flowerbed1.vertices.push({ x: 410, y: 601 });
        this.flowerbed1.vertices.push({ x: 536, y: 492 });
        this.flowerbed1.vertices.push({ x: 550, y: 508 });
        this.flowerbed1.vertices.push({ x: 424, y: 617 });

        this.flowerbed2.vertices.push({ x: 440, y: 636 });
        this.flowerbed2.vertices.push({ x: 565, y: 527 });
        this.flowerbed2.vertices.push({ x: 576, y: 538 });
        this.flowerbed2.vertices.push({ x: 617, y: 525 });
        this.flowerbed2.vertices.push({ x: 611, y: 528 });
        this.flowerbed2.vertices.push({ x: 593, y: 559 });
        this.flowerbed2.vertices.push({ x: 584, y: 568 });
        this.flowerbed2.vertices.push({ x: 579, y: 586 });
        this.flowerbed2.vertices.push({ x: 574, y: 599 });
        this.flowerbed2.vertices.push({ x: 559, y: 605 });
        this.flowerbed2.vertices.push({ x: 538, y: 605 });
        this.flowerbed2.vertices.push({ x: 533, y: 634 });
        this.flowerbed2.vertices.push({ x: 520, y: 647 });
        this.flowerbed2.vertices.push({ x: 492, y: 650 });
        this.flowerbed2.vertices.push({ x: 487, y: 661 });
        this.flowerbed2.vertices.push({ x: 470, y: 670 });

        this.flowerbed3.vertices.push({ x: 621, y: 501 });
        this.flowerbed3.vertices.push({ x: 682, y: 441 });
        this.flowerbed3.vertices.push({ x: 698, y: 442 });
        this.flowerbed3.vertices.push({ x: 682, y: 469 });
        this.flowerbed3.vertices.push({ x: 659, y: 489 });

        this.gardenArea2.vertices.push({ x: 766, y: 212 });
        this.gardenArea2.vertices.push({ x: 1123, y: 112 });
        this.gardenArea2.vertices.push({ x: 1141, y: 131 });
        this.gardenArea2.vertices.push({ x: 1299, y: 255 });
        this.gardenArea2.vertices.push({ x: 1064, y: 472 });
        this.gardenArea2.vertices.push({ x: 945, y: 365 });

        this.gardenArea3.vertices.push({ x: 650, y: 114 });
        this.gardenArea3.vertices.push({ x: 705, y: 49 });
        this.gardenArea3.vertices.push({ x: 795, y: 1 });
        this.gardenArea3.vertices.push({ x: 1257, y: 103 });
        this.gardenArea3.vertices.push({ x: 1299, y: 255 });
        this.gardenArea3.vertices.push({ x: 1141, y: 131 });
        this.gardenArea3.vertices.push({ x: 1123, y: 112 });
        this.gardenArea3.vertices.push({ x: 766, y: 212 });

        this.gardenArea4.vertices.push({ x: 582, y: 54 });
        this.gardenArea4.vertices.push({ x: 632, y: 10 });
        this.gardenArea4.vertices.push({ x: 705, y: 49 });
        this.gardenArea4.vertices.push({ x: 650, y: 114 });

        this.sideShed.vertices.push({ x: 1191, y: 170 });
        this.sideShed.vertices.push({ x: 1239, y: 138 });
        this.sideShed.vertices.push({ x: 1276, y: 174 });
        this.sideShed.vertices.push({ x: 1290, y: 225 });
        this.sideShed.vertices.push({ x: 1283, y: 243 });

        this.scrub.vertices.push({ x: 650, y: 114 });
        this.scrub.vertices.push({ x: 705, y: 49 });
        this.scrub.vertices.push({ x: 795, y: 1 });
        this.scrub.vertices.push({ x: 1111, y: 71 });
        this.scrub.vertices.push({ x: 684, y: 142 });

        this.mainShed.vertices.push({ x: 1090, y: 175 });
        this.mainShed.vertices.push({ x: 1141, y: 131 });
        this.mainShed.vertices.push({ x: 1283, y: 243 });
        this.mainShed.vertices.push({ x: 1230, y: 290 });

        this.raisedBed.vertices.push({ x: 874, y: 457 });
        this.raisedBed.vertices.push({ x: 910, y: 419 });
        this.raisedBed.vertices.push({ x: 927, y: 437 });
        this.raisedBed.vertices.push({ x: 893, y: 472 });

        this.raisedBed2.vertices.push({ x: 901, y: 479 });
        this.raisedBed2.vertices.push({ x: 935, y: 444 });
        this.raisedBed2.vertices.push({ x: 954, y: 461 });
        this.raisedBed2.vertices.push({ x: 918, y: 495 });

        this.raisedBed3.vertices.push({ x: 926, y: 501 });
        this.raisedBed3.vertices.push({ x: 961, y: 466 });
        this.raisedBed3.vertices.push({ x: 979, y: 482 });
        this.raisedBed3.vertices.push({ x: 943, y: 517 });

        this.raisedBed4.vertices.push({ x: 1042, y: 370 });
        this.raisedBed4.vertices.push({ x: 1058, y: 353 });
        this.raisedBed4.vertices.push({ x: 1097, y: 386 });
        this.raisedBed4.vertices.push({ x: 1080, y: 404 });

        this.raisedBed5.vertices.push({ x: 1070, y: 344 });
        this.raisedBed5.vertices.push({ x: 1085, y: 327 });
        this.raisedBed5.vertices.push({ x: 1121, y: 356 });
        this.raisedBed5.vertices.push({ x: 1105, y: 375 });

        this.raisedBed6.vertices.push({ x: 1095, y: 315 });
        this.raisedBed6.vertices.push({ x: 1113, y: 298 });
        this.raisedBed6.vertices.push({ x: 1149, y: 326 });
        this.raisedBed6.vertices.push({ x: 1132, y: 344 });

        this.childrensHouse.vertices.push({ x: 501, y: 177 });
        this.childrensHouse.vertices.push({ x: 523, y: 154 });
        this.childrensHouse.vertices.push({ x: 539, y: 170 });
        this.childrensHouse.vertices.push({ x: 517, y: 193 });

        this.greenhouse.vertices.push({ x: 693, y: 607 });
        this.greenhouse.vertices.push({ x: 772, y: 526 });
        this.greenhouse.vertices.push({ x: 819, y: 571 });
        this.greenhouse.vertices.push({ x: 741, y: 652 });

        this.greenhouseRaisedBed.vertices.push({ x: 712, y: 625 });
        this.greenhouseRaisedBed.vertices.push({ x: 698, y: 638 });
        this.greenhouseRaisedBed.vertices.push({ x: 686, y: 631 });
        this.greenhouseRaisedBed.vertices.push({ x: 670, y: 611 });
        this.greenhouseRaisedBed.vertices.push({ x: 674, y: 593 });
        this.greenhouseRaisedBed.vertices.push({ x: 754, y: 515 });
        this.greenhouseRaisedBed.vertices.push({ x: 772, y: 526 });
        this.greenhouseRaisedBed.vertices.push({ x: 693, y: 607 });

        this.greenhouseRaisedBed2.vertices.push({ x: 772, y: 526 });
        this.greenhouseRaisedBed2.vertices.push({ x: 790, y: 512 });
        this.greenhouseRaisedBed2.vertices.push({ x: 836, y: 556 });
        this.greenhouseRaisedBed2.vertices.push({ x: 819, y: 571 });

        this.greenhouseRaisedBed3.vertices.push({ x: 725, y: 637 });
        this.greenhouseRaisedBed3.vertices.push({ x: 741, y: 652 });
        this.greenhouseRaisedBed3.vertices.push({ x: 819, y: 571 });
        this.greenhouseRaisedBed3.vertices.push({ x: 830, y: 587 });
        this.greenhouseRaisedBed3.vertices.push({ x: 750, y: 673 });
        this.greenhouseRaisedBed3.vertices.push({ x: 730, y: 672 });
        this.greenhouseRaisedBed3.vertices.push({ x: 714, y: 657 });
        this.greenhouseRaisedBed3.vertices.push({ x: 712, y: 650 });
    }
}
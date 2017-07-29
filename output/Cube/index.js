"use strict";
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_Eff_Exception = require("../Control.Monad.Eff.Exception");
var Control_Monad_Eff_Ref = require("../Control.Monad.Eff.Ref");
var Control_Monad_Except = require("../Control.Monad.Except");
var Control_Monad_ST = require("../Control.Monad.ST");
var DOM = require("../DOM");
var DOM_HTML = require("../DOM.HTML");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var DOM_RequestAnimationFrame = require("../DOM.RequestAnimationFrame");
var Data_Array = require("../Data.Array");
var Data_Array_ST = require("../Data.Array.ST");
var Data_Eq = require("../Data.Eq");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Foldable = require("../Data.Foldable");
var Data_Foreign = require("../Data.Foreign");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Int = require("../Data.Int");
var Data_Maybe = require("../Data.Maybe");
var Data_Ring = require("../Data.Ring");
var Data_Semiring = require("../Data.Semiring");
var Data_Traversable = require("../Data.Traversable");
var Element = require("../Element");
var Global_Unsafe = require("../Global.Unsafe");
var Graphics_Canvas = require("../Graphics.Canvas");
var $$Math = require("../Math");
var Partial_Unsafe = require("../Partial.Unsafe");
var Prelude = require("../Prelude");
var stroke = function (v1) {
    return function (v2) {
        return function (v3) {
            return function (v4) {
                return function (v5) {
                    return function (v6) {
                        return function (v7) {
                            return function (v8) {
                                return function (ctx) {
                                    return function __do() {
                                        var v = Data_Array_ST.emptySTArray();
                                        var v9 = Graphics_Canvas.fillPath(ctx)(function __do() {
                                            var v9 = Graphics_Canvas.moveTo(ctx)(v1)(v2)();
                                            var v10 = Graphics_Canvas.lineTo(ctx)(v3)(v4)();
                                            var v11 = Graphics_Canvas.lineTo(ctx)(v5)(v6)();
                                            var v12 = Graphics_Canvas.lineTo(ctx)(v7)(v8)();
                                            var v13 = Graphics_Canvas.closePath(ctx)();
                                            return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v)(1))();
                                        })();
                                        return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v)(1))();
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var rotateY = function (angle) {
    return function (x) {
        return function (y) {
            return function (z) {
                var rad = (angle * $$Math.pi) / 180.0;
                var cosa = $$Math.cos(rad);
                var sina = $$Math.sin(rad);
                var xx = z * sina + x * cosa;
                var zz = z * cosa - x * sina;
                return [ xx, y, zz ];
            };
        };
    };
};
var rotateX = function (angle) {
    return function (x) {
        return function (y) {
            return function (z) {
                var rad = (angle * $$Math.pi) / 180.0;
                var cosa = $$Math.cos(rad);
                var sina = $$Math.sin(rad);
                var yy = y * cosa - z * sina;
                var zz = y * sina + z * cosa;
                return [ x, yy, zz ];
            };
        };
    };
};
var qz = $$Math.pi / 3.0;
var qy = $$Math.pi / 3.0;
var qx = $$Math.pi / 3.0;
var project = function (x) {
    return function (y) {
        return function (z) {
            var xRotQz = x * $$Math.cos(qz) + y * $$Math.sin(qz);
            var yRotQz = y * $$Math.cos(qz) - x * $$Math.sin(qz);
            var yRotQzQx = yRotQz * $$Math.cos(qx) + z * $$Math.sin(qx);
            var zRotQzQx = z * $$Math.cos(qx) - yRotQz * $$Math.sin(qx);
            var xRotQzQxQy = xRotQz * $$Math.cos(qy) + zRotQzQx * $$Math.sin(qy);
            return [ xRotQzQxQy, yRotQzQx ];
        };
    };
};
var multiply = function (dictSemiring) {
    return function (a) {
        return function (b) {
            return Data_Semiring.mul(dictSemiring)(a)(b);
        };
    };
};
var mouseUp = function (input) {
    return function (drag) {
        return function (e) {
            return function (v) {
                return function __do() {
                    var v1 = Control_Monad_ST.writeSTRef(drag)(false)();
                    var v2 = Data_Array_ST.emptySTArray();
                    return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v2)(1))();
                };
            };
        };
    };
};
var mouseDown = function (input) {
    return function (drag) {
        return function (oldx) {
            return function (oldy) {
                return function (e) {
                    return function (v) {
                        return function __do() {
                            var v1 = Element.getPageX(e)();
                            var v2 = Element.getPageY(e)();
                            var v3 = Control_Monad_ST.writeSTRef(drag)(true)();
                            var v4 = Control_Monad_ST.writeSTRef(oldx)(v1)();
                            var v5 = Control_Monad_ST.writeSTRef(oldy)(v2)();
                            var v6 = Data_Array_ST.emptySTArray();
                            return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v6)(1))();
                        };
                    };
                };
            };
        };
    };
};
var modify = function (a) {
    return function (b) {
        return function (c) {
            return ((a - b) * 2.0 * $$Math.pi) / c;
        };
    };
};
var mouseMove = function (input) {
    return function (drag) {
        return function (oldx) {
            return function (oldy) {
                return function (dx) {
                    return function (dy) {
                        return function (xangle) {
                            return function (yangle) {
                                return function (e) {
                                    return function (v) {
                                        return Data_Functor["void"](Control_Monad_Eff.functorEff)(function __do() {
                                            var v1 = Control_Monad_ST.readSTRef(drag)();
                                            var $97 = v1 === true;
                                            if ($97) {
                                                var v2 = Element.getPageX(e)();
                                                var v3 = Element.getPageY(e)();
                                                var v4 = Control_Monad_ST.readSTRef(oldx)();
                                                var v5 = Control_Monad_ST.readSTRef(oldy)();
                                                var v6 = Control_Monad_ST.writeSTRef(dx)(modify(v2)(v4)(600.0))();
                                                var v7 = Control_Monad_ST.writeSTRef(dy)(modify(v3)(v5)(600.0))();
                                                var v8 = Control_Monad_ST.readSTRef(dx)();
                                                var v9 = Control_Monad_ST.readSTRef(dx)();
                                                var v10 = Control_Monad_ST.readSTRef(xangle)();
                                                var v11 = Control_Monad_ST.readSTRef(yangle)();
                                                var v12 = Control_Monad_ST.writeSTRef(xangle)(v10 + v8)();
                                                var v13 = Control_Monad_ST.writeSTRef(yangle)(v11 + v9)();
                                                var v14 = Control_Monad_ST.writeSTRef(oldx)(v2)();
                                                var v15 = Control_Monad_ST.writeSTRef(oldy)(v3)();
                                                var v16 = Data_Array_ST.emptySTArray();
                                                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v16)(1))();
                                            };
                                            var v2 = Data_Array_ST.emptySTArray();
                                            return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v2)(1))();
                                        });
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var fill = function (v1) {
    return function (v2) {
        return function (v3) {
            return function (v4) {
                return function (v5) {
                    return function (v6) {
                        return function (v7) {
                            return function (v8) {
                                return function (ctx) {
                                    return function __do() {
                                        var v = Data_Array_ST.emptySTArray();
                                        var v9 = Graphics_Canvas.fillPath(ctx)(function __do() {
                                            var v9 = Graphics_Canvas.moveTo(ctx)(v1)(v2)();
                                            var v10 = Graphics_Canvas.lineTo(ctx)(v3)(v4)();
                                            var v11 = Graphics_Canvas.lineTo(ctx)(v5)(v6)();
                                            var v12 = Graphics_Canvas.lineTo(ctx)(v7)(v8)();
                                            var v13 = Graphics_Canvas.closePath(ctx)();
                                            return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v)(1))();
                                        })();
                                        return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v)(1))();
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
var drawCube = function (vertices) {
    return function (faces) {
        return function (ctx) {
            return function __do() {
                var v = Graphics_Canvas.clearRect(ctx)({
                    x: 0.0, 
                    y: 0.0, 
                    w: 650.0, 
                    h: 650.0
                })();
                var v1 = Data_Array_ST.emptySTArray();
                Data_Functor["void"](Control_Monad_Eff.functorEff)(Control_Monad_Eff.forE(0)(8)(function (i) {
                    return function __do() {
                        var v2 = Data_Array_ST.peekSTArray(vertices)(i)();
                        var yy = Data_Maybe.fromMaybe([  ])(v2);
                        var zz = Data_Array.index(yy)(0);
                        var aa = Data_Maybe.fromMaybe(0.0)(zz);
                        var zz1 = Data_Array.index(yy)(1);
                        var bb = Data_Maybe.fromMaybe(0.0)(zz1);
                        var zz2 = Data_Array.index(yy)(2);
                        var cc = Data_Maybe.fromMaybe(0.0)(zz2);
                        var xyLoc = project(aa)(bb)(cc);
                        var m_xy0 = Data_Array.index(xyLoc)(0);
                        var m_xy1 = Data_Array.index(xyLoc)(1);
                        var xy0 = Data_Maybe.fromMaybe(0.0)(m_xy0);
                        var xy1 = Data_Maybe.fromMaybe(0.0)(m_xy1);
                        var pix0 = xy0 + 650.0 / 2.0;
                        var pix1 = -1.0 * xy1 + 400.0 / 2.0;
                        var v3 = Graphics_Canvas.strokePath(ctx)(Graphics_Canvas.arc(ctx)({
                            x: pix0, 
                            y: pix1, 
                            r: 5.0, 
                            start: 2.0, 
                            end: $$Math.pi * 2.0
                        }))();
                        return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v1)([ pix0, pix1 ]))();
                    };
                }))();
                var v2 = Graphics_Canvas.setFillStyle("rgb(0, 0, 153)")(ctx)();
                var v3 = Graphics_Canvas.setStrokeStyle("rgb(255,255,255)")(ctx)();
                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Control_Monad_Eff.forE(0)(6)(function (i) {
                    var m_i_face = Data_Array.index(faces)(i);
                    var i_face = Data_Maybe.fromMaybe([  ])(m_i_face);
                    var mf0 = Data_Array.index(i_face)(0);
                    var mf1 = Data_Array.index(i_face)(1);
                    var mf2 = Data_Array.index(i_face)(2);
                    var mf3 = Data_Array.index(i_face)(3);
                    var f0 = Data_Maybe.fromMaybe(0)(mf0);
                    var f1 = Data_Maybe.fromMaybe(0)(mf1);
                    var f2 = Data_Maybe.fromMaybe(0)(mf2);
                    var f3 = Data_Maybe.fromMaybe(0)(mf3);
                    return function __do() {
                        var v4 = Data_Array_ST.peekSTArray(v1)(f0)();
                        var v5 = Data_Array_ST.peekSTArray(v1)(f1)();
                        var v6 = Data_Array_ST.peekSTArray(v1)(f2)();
                        var v7 = Data_Array_ST.peekSTArray(v1)(f3)();
                        var val0 = Data_Maybe.fromMaybe([  ])(v4);
                        var val1 = Data_Maybe.fromMaybe([  ])(v5);
                        var val2 = Data_Maybe.fromMaybe([  ])(v6);
                        var val3 = Data_Maybe.fromMaybe([  ])(v7);
                        var mv00 = Data_Array.index(val0)(0);
                        var mv01 = Data_Array.index(val0)(1);
                        var mv10 = Data_Array.index(val1)(0);
                        var mv11 = Data_Array.index(val1)(1);
                        var mv20 = Data_Array.index(val2)(0);
                        var mv21 = Data_Array.index(val2)(1);
                        var mv30 = Data_Array.index(val3)(0);
                        var mv31 = Data_Array.index(val3)(1);
                        var v11 = Data_Maybe.fromMaybe(0.0)(mv00);
                        var v21 = Data_Maybe.fromMaybe(0.0)(mv01);
                        var v31 = Data_Maybe.fromMaybe(0.0)(mv10);
                        var v41 = Data_Maybe.fromMaybe(0.0)(mv11);
                        var v51 = Data_Maybe.fromMaybe(0.0)(mv20);
                        var v61 = Data_Maybe.fromMaybe(0.0)(mv21);
                        var v71 = Data_Maybe.fromMaybe(0.0)(mv30);
                        var v8 = Data_Maybe.fromMaybe(0.0)(mv31);
                        stroke(v11)(v21)(v31)(v41)(v51)(v61)(v71)(v8)(ctx)();
                        var v9 = Data_Array_ST.emptySTArray();
                        return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v9)(1))();
                    };
                }))();
            };
        };
    };
};
var deceleration = 0.95;
var main = Data_Functor["void"](Control_Monad_Eff.functorEff)(function __do() {
    var v = Graphics_Canvas.getCanvasElementById("canvas")();
    var __unused = function (dictPartial1) {
        return function ($dollar88) {
            return $dollar88;
        };
    };
    return __unused()((function () {
        if (v instanceof Data_Maybe.Just) {
            return function __do() {
                var v1 = Graphics_Canvas.getContext2D(v.value0)();
                var v2 = Element.body();
                var v3 = Element.getElementById("canvas")();
                var v4 = Graphics_Canvas.setFillStyle("rgb(255,255, 255)")(v1)();
                var v5 = Control_Monad_ST.newSTRef(false)();
                var v6 = Control_Monad_ST.newSTRef(0.0)();
                var v7 = Control_Monad_ST.newSTRef(0.0)();
                var v8 = Control_Monad_ST.newSTRef(0.0)();
                var v9 = Control_Monad_ST.newSTRef(0.0)();
                var v10 = Control_Monad_ST.newSTRef(0.0)();
                var v11 = Control_Monad_ST.newSTRef(0.0)();
                var v12 = Control_Monad_ST.newSTRef(0.0)();
                var msz = -100.0;
                var vertices = [ [ msz, 100.0, msz ], [ 100.0, 100.0, msz ], [ 100.0, msz, msz ], [ msz, msz, msz ], [ msz, 100.0, 100.0 ], [ 100.0, 100.0, 100.0 ], [ 100.0, msz, 100.0 ], [ msz, msz, 100.0 ] ];
                var faces = [ [ 0, 1, 2, 3 ], [ 1, 5, 6, 2 ], [ 5, 4, 7, 6 ], [ 4, 0, 3, 7 ], [ 0, 4, 5, 1 ], [ 3, 2, 6, 7 ] ];
                var v13 = Data_Array_ST.emptySTArray();
                Data_Functor["void"](Control_Monad_Eff.functorEff)(Control_Monad_Eff.forE(0)(8)(function (i) {
                    var xx = Data_Array.index(vertices)(i);
                    var yy = Data_Maybe.fromMaybe([  ])(xx);
                    return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v13)(yy));
                }))();
                var rotateCube = function __do() {
                    var v14 = Data_Array_ST.emptySTArray();
                    var v15 = Control_Monad_ST.readSTRef(v5)();
                    var v16 = Control_Monad_ST.readSTRef(v8)();
                    var v17 = Control_Monad_ST.readSTRef(v9)();
                    (function () {
                        var $133 = v15 === false;
                        if ($133) {
                            return function __do() {
                                var v18 = Control_Monad_ST.writeSTRef(v8)(multiply(Data_Semiring.semiringNumber)(v16)(deceleration))();
                                var v19 = Control_Monad_ST.writeSTRef(v9)(multiply(Data_Semiring.semiringNumber)(v17)(deceleration))();
                                var v20 = Control_Monad_ST.readSTRef(v8)();
                                var v21 = Control_Monad_ST.readSTRef(v9)();
                                var v22 = Control_Monad_ST.readSTRef(v11)();
                                var v23 = Control_Monad_ST.readSTRef(v12)();
                                var v24 = Control_Monad_ST.writeSTRef(v11)(v22 + v20)();
                                var v25 = Control_Monad_ST.readSTRef(v11)();
                                var v26 = Control_Monad_ST.writeSTRef(v12)(v23 + v21)();
                                var v27 = Data_Array_ST.emptySTArray();
                                return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v27)(1))();
                            };
                        };
                        return function __do() {
                            var v18 = Data_Array_ST.emptySTArray();
                            return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v18)(1))();
                        };
                    })()();
                    Data_Functor["void"](Control_Monad_Eff.functorEff)(Control_Monad_Eff.forE(0)(8)(function (i) {
                        return function __do() {
                            var v18 = Data_Array_ST.peekSTArray(v13)(i)();
                            var vi = Data_Maybe.fromMaybe([  ])(v18);
                            var mx = Data_Array.index(vi)(0);
                            var my = Data_Array.index(vi)(1);
                            var mz = Data_Array.index(vi)(2);
                            var x = Data_Maybe.fromMaybe(0.0)(mx);
                            var y = Data_Maybe.fromMaybe(0.0)(my);
                            var z = Data_Maybe.fromMaybe(0.0)(mz);
                            var v19 = Control_Monad_ST.readSTRef(v12)();
                            var v20 = Control_Monad_ST.readSTRef(v11)();
                            var v21 = rotateX(v19 * 20.0)(x)(y)(z);
                            var mvx = Data_Array.index(v21)(0);
                            var mvy = Data_Array.index(v21)(1);
                            var mvz = Data_Array.index(v21)(2);
                            var vx = Data_Maybe.fromMaybe(0.0)(mvx);
                            var vy = Data_Maybe.fromMaybe(0.0)(mvy);
                            var vz = Data_Maybe.fromMaybe(0.0)(mvz);
                            var vv = rotateY(20.0 * v20)(vx)(vy)(vz);
                            Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v14)(vv))();
                            var v22 = Data_Array_ST.emptySTArray();
                            return Data_Functor["void"](Control_Monad_Eff.functorEff)(Data_Array_ST.pushSTArray(v22)(1))();
                        };
                    }))();
                    drawCube(v14)(faces)(v1)();
                    return DOM_RequestAnimationFrame.requestAnimationFrame(rotateCube)();
                };
                drawCube(v13)(faces)(v1)();
                Element.on("mousedown")(mouseDown(v.value0)(v5)(v6)(v7))(v3)();
                Element.on("mouseup")(mouseUp(v.value0)(v5))(v2)();
                Element.on("mousemove")(mouseMove(v.value0)(v5)(v6)(v7)(v8)(v9)(v11)(v12))(v3)();
                Element.on("mouseout")(mouseMove(v.value0)(v5)(v6)(v7)(v8)(v9)(v11)(v12))(v3)();
                return rotateCube();
            };
        };
        throw new Error("Failed pattern match at Cube line 201, column 3 - line 202, column 3: " + [ v.constructor.name ]);
    })())();
});
module.exports = {
    deceleration: deceleration, 
    drawCube: drawCube, 
    fill: fill, 
    main: main, 
    modify: modify, 
    mouseDown: mouseDown, 
    mouseMove: mouseMove, 
    mouseUp: mouseUp, 
    multiply: multiply, 
    project: project, 
    qx: qx, 
    qy: qy, 
    qz: qz, 
    rotateX: rotateX, 
    rotateY: rotateY, 
    stroke: stroke
};

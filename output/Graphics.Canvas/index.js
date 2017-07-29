// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Monad_Eff_Exception_Unsafe = require("../Control.Monad.Eff.Exception.Unsafe");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_ArrayBuffer_Types = require("../Data.ArrayBuffer.Types");
var Data_Eq = require("../Data.Eq");
var Data_Function = require("../Data.Function");
var Data_Function_Uncurried = require("../Data.Function.Uncurried");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Show = require("../Data.Show");
var Prelude = require("../Prelude");
var AlignLeft = (function () {
    function AlignLeft() {

    };
    AlignLeft.value = new AlignLeft();
    return AlignLeft;
})();
var AlignRight = (function () {
    function AlignRight() {

    };
    AlignRight.value = new AlignRight();
    return AlignRight;
})();
var AlignCenter = (function () {
    function AlignCenter() {

    };
    AlignCenter.value = new AlignCenter();
    return AlignCenter;
})();
var AlignStart = (function () {
    function AlignStart() {

    };
    AlignStart.value = new AlignStart();
    return AlignStart;
})();
var AlignEnd = (function () {
    function AlignEnd() {

    };
    AlignEnd.value = new AlignEnd();
    return AlignEnd;
})();
var Repeat = (function () {
    function Repeat() {

    };
    Repeat.value = new Repeat();
    return Repeat;
})();
var RepeatX = (function () {
    function RepeatX() {

    };
    RepeatX.value = new RepeatX();
    return RepeatX;
})();
var RepeatY = (function () {
    function RepeatY() {

    };
    RepeatY.value = new RepeatY();
    return RepeatY;
})();
var NoRepeat = (function () {
    function NoRepeat() {

    };
    NoRepeat.value = new NoRepeat();
    return NoRepeat;
})();
var BevelJoin = (function () {
    function BevelJoin() {

    };
    BevelJoin.value = new BevelJoin();
    return BevelJoin;
})();
var RoundJoin = (function () {
    function RoundJoin() {

    };
    RoundJoin.value = new RoundJoin();
    return RoundJoin;
})();
var MiterJoin = (function () {
    function MiterJoin() {

    };
    MiterJoin.value = new MiterJoin();
    return MiterJoin;
})();
var Round = (function () {
    function Round() {

    };
    Round.value = new Round();
    return Round;
})();
var Square = (function () {
    function Square() {

    };
    Square.value = new Square();
    return Square;
})();
var Butt = (function () {
    function Butt() {

    };
    Butt.value = new Butt();
    return Butt;
})();
var SourceOver = (function () {
    function SourceOver() {

    };
    SourceOver.value = new SourceOver();
    return SourceOver;
})();
var SourceIn = (function () {
    function SourceIn() {

    };
    SourceIn.value = new SourceIn();
    return SourceIn;
})();
var SourceOut = (function () {
    function SourceOut() {

    };
    SourceOut.value = new SourceOut();
    return SourceOut;
})();
var SourceAtop = (function () {
    function SourceAtop() {

    };
    SourceAtop.value = new SourceAtop();
    return SourceAtop;
})();
var DestinationOver = (function () {
    function DestinationOver() {

    };
    DestinationOver.value = new DestinationOver();
    return DestinationOver;
})();
var DestinationIn = (function () {
    function DestinationIn() {

    };
    DestinationIn.value = new DestinationIn();
    return DestinationIn;
})();
var DestinationOut = (function () {
    function DestinationOut() {

    };
    DestinationOut.value = new DestinationOut();
    return DestinationOut;
})();
var DestinationAtop = (function () {
    function DestinationAtop() {

    };
    DestinationAtop.value = new DestinationAtop();
    return DestinationAtop;
})();
var Lighter = (function () {
    function Lighter() {

    };
    Lighter.value = new Lighter();
    return Lighter;
})();
var Copy = (function () {
    function Copy() {

    };
    Copy.value = new Copy();
    return Copy;
})();
var Xor = (function () {
    function Xor() {

    };
    Xor.value = new Xor();
    return Xor;
})();
var Multiply = (function () {
    function Multiply() {

    };
    Multiply.value = new Multiply();
    return Multiply;
})();
var Screen = (function () {
    function Screen() {

    };
    Screen.value = new Screen();
    return Screen;
})();
var Overlay = (function () {
    function Overlay() {

    };
    Overlay.value = new Overlay();
    return Overlay;
})();
var Darken = (function () {
    function Darken() {

    };
    Darken.value = new Darken();
    return Darken;
})();
var Lighten = (function () {
    function Lighten() {

    };
    Lighten.value = new Lighten();
    return Lighten;
})();
var ColorDodge = (function () {
    function ColorDodge() {

    };
    ColorDodge.value = new ColorDodge();
    return ColorDodge;
})();
var ColorBurn = (function () {
    function ColorBurn() {

    };
    ColorBurn.value = new ColorBurn();
    return ColorBurn;
})();
var HardLight = (function () {
    function HardLight() {

    };
    HardLight.value = new HardLight();
    return HardLight;
})();
var SoftLight = (function () {
    function SoftLight() {

    };
    SoftLight.value = new SoftLight();
    return SoftLight;
})();
var Difference = (function () {
    function Difference() {

    };
    Difference.value = new Difference();
    return Difference;
})();
var Exclusion = (function () {
    function Exclusion() {

    };
    Exclusion.value = new Exclusion();
    return Exclusion;
})();
var Hue = (function () {
    function Hue() {

    };
    Hue.value = new Hue();
    return Hue;
})();
var Saturation = (function () {
    function Saturation() {

    };
    Saturation.value = new Saturation();
    return Saturation;
})();
var Color = (function () {
    function Color() {

    };
    Color.value = new Color();
    return Color;
})();
var Luminosity = (function () {
    function Luminosity() {

    };
    Luminosity.value = new Luminosity();
    return Luminosity;
})();
var withContext = function (ctx) {
    return function (action) {
        return function __do() {
            var v = $foreign.save(ctx)();
            var v1 = action();
            var v2 = $foreign.restore(ctx)();
            return v1;
        };
    };
};
var tryLoadImage = function (path) {
    return function (k) {
        return $foreign.tryLoadImageImpl(path)(k(Data_Maybe.Nothing.value))(function ($38) {
            return k(Data_Maybe.Just.create($38));
        });
    };
};
var textAlign = function (ctx) {
    var unsafeParseTextAlign = function (v) {
        if (v === "left") {
            return AlignLeft.value;
        };
        if (v === "right") {
            return AlignRight.value;
        };
        if (v === "center") {
            return AlignCenter.value;
        };
        if (v === "start") {
            return AlignStart.value;
        };
        if (v === "end") {
            return AlignEnd.value;
        };
        return Control_Monad_Eff_Exception_Unsafe.unsafeThrow("invalid TextAlign: " + v);
    };
    return Data_Functor.map(Control_Monad_Eff.functorEff)(unsafeParseTextAlign)($foreign.textAlignImpl(ctx));
};
var strokePath = function (ctx) {
    return function (path) {
        return function __do() {
            var v = $foreign.beginPath(ctx)();
            var v1 = path();
            var v2 = $foreign.stroke(ctx)();
            return v1;
        };
    };
};
var showTextAlign = new Data_Show.Show(function (v) {
    if (v instanceof AlignLeft) {
        return "AlignLeft";
    };
    if (v instanceof AlignRight) {
        return "AlignRight";
    };
    if (v instanceof AlignCenter) {
        return "AlignCenter";
    };
    if (v instanceof AlignStart) {
        return "AlignStart";
    };
    if (v instanceof AlignEnd) {
        return "AlignEnd";
    };
    throw new Error("Failed pattern match at Graphics.Canvas line 486, column 1 - line 486, column 41: " + [ v.constructor.name ]);
});
var showPatternRepeat = new Data_Show.Show(function (v) {
    if (v instanceof Repeat) {
        return "Repeat";
    };
    if (v instanceof RepeatX) {
        return "RepeatX";
    };
    if (v instanceof RepeatY) {
        return "RepeatY";
    };
    if (v instanceof NoRepeat) {
        return "NoRepeat";
    };
    throw new Error("Failed pattern match at Graphics.Canvas line 596, column 1 - line 596, column 49: " + [ v.constructor.name ]);
});
var showComposite = new Data_Show.Show(function (v) {
    if (v instanceof SourceOver) {
        return "SourceOver";
    };
    if (v instanceof SourceIn) {
        return "SourceIn";
    };
    if (v instanceof SourceOut) {
        return "SourceOut";
    };
    if (v instanceof SourceAtop) {
        return "SourceAtop";
    };
    if (v instanceof DestinationOver) {
        return "DestinationOver";
    };
    if (v instanceof DestinationIn) {
        return "DestinationIn";
    };
    if (v instanceof DestinationOut) {
        return "DestinationOut";
    };
    if (v instanceof DestinationAtop) {
        return "DestinationAtop";
    };
    if (v instanceof Lighter) {
        return "Lighter";
    };
    if (v instanceof Copy) {
        return "Copy";
    };
    if (v instanceof Xor) {
        return "Xor";
    };
    if (v instanceof Multiply) {
        return "Multiply";
    };
    if (v instanceof Screen) {
        return "Screen";
    };
    if (v instanceof Overlay) {
        return "Overlay";
    };
    if (v instanceof Darken) {
        return "Darken";
    };
    if (v instanceof Lighten) {
        return "Lighten";
    };
    if (v instanceof ColorDodge) {
        return "ColorDodge";
    };
    if (v instanceof ColorBurn) {
        return "ColorBurn";
    };
    if (v instanceof HardLight) {
        return "HardLight";
    };
    if (v instanceof SoftLight) {
        return "SoftLight";
    };
    if (v instanceof Difference) {
        return "Difference";
    };
    if (v instanceof Exclusion) {
        return "Exclusion";
    };
    if (v instanceof Hue) {
        return "Hue";
    };
    if (v instanceof Saturation) {
        return "Saturation";
    };
    if (v instanceof Color) {
        return "Color";
    };
    if (v instanceof Luminosity) {
        return "Luminosity";
    };
    throw new Error("Failed pattern match at Graphics.Canvas line 284, column 1 - line 284, column 41: " + [ v.constructor.name ]);
});
var setTextAlign = function (ctx) {
    return function (textalign) {
        var toString = function (v) {
            if (v instanceof AlignLeft) {
                return "left";
            };
            if (v instanceof AlignRight) {
                return "right";
            };
            if (v instanceof AlignCenter) {
                return "center";
            };
            if (v instanceof AlignStart) {
                return "start";
            };
            if (v instanceof AlignEnd) {
                return "end";
            };
            throw new Error("Failed pattern match at Graphics.Canvas line 515, column 5 - line 516, column 5: " + [ v.constructor.name ]);
        };
        return $foreign.setTextAlignImpl(ctx)(toString(textalign));
    };
};
var setLineJoin = function (v) {
    if (v instanceof BevelJoin) {
        return $foreign.setLineJoinImpl("bevel");
    };
    if (v instanceof RoundJoin) {
        return $foreign.setLineJoinImpl("round");
    };
    if (v instanceof MiterJoin) {
        return $foreign.setLineJoinImpl("miter");
    };
    throw new Error("Failed pattern match at Graphics.Canvas line 247, column 1 - line 247, column 91: " + [ v.constructor.name ]);
};
var setLineCap = function (v) {
    if (v instanceof Round) {
        return $foreign.setLineCapImpl("round");
    };
    if (v instanceof Square) {
        return $foreign.setLineCapImpl("square");
    };
    if (v instanceof Butt) {
        return $foreign.setLineCapImpl("butt");
    };
    throw new Error("Failed pattern match at Graphics.Canvas line 234, column 1 - line 234, column 89: " + [ v.constructor.name ]);
};
var setGlobalCompositeOperation = function (ctx) {
    return function (composite) {
        var toString = function (v) {
            if (v instanceof SourceOver) {
                return "source-over";
            };
            if (v instanceof SourceIn) {
                return "source-in";
            };
            if (v instanceof SourceOut) {
                return "source-out";
            };
            if (v instanceof SourceAtop) {
                return "source-atop";
            };
            if (v instanceof DestinationOver) {
                return "destination-over";
            };
            if (v instanceof DestinationIn) {
                return "destination-in";
            };
            if (v instanceof DestinationOut) {
                return "destination-out";
            };
            if (v instanceof DestinationAtop) {
                return "destination-atop";
            };
            if (v instanceof Lighter) {
                return "lighter";
            };
            if (v instanceof Copy) {
                return "copy";
            };
            if (v instanceof Xor) {
                return "xor";
            };
            if (v instanceof Multiply) {
                return "multiply";
            };
            if (v instanceof Screen) {
                return "screen";
            };
            if (v instanceof Overlay) {
                return "overlay";
            };
            if (v instanceof Darken) {
                return "darken";
            };
            if (v instanceof Lighten) {
                return "lighten";
            };
            if (v instanceof ColorDodge) {
                return "color-dodge";
            };
            if (v instanceof ColorBurn) {
                return "color-burn";
            };
            if (v instanceof HardLight) {
                return "hard-light";
            };
            if (v instanceof SoftLight) {
                return "soft-light";
            };
            if (v instanceof Difference) {
                return "difference";
            };
            if (v instanceof Exclusion) {
                return "exclusion";
            };
            if (v instanceof Hue) {
                return "hue";
            };
            if (v instanceof Saturation) {
                return "saturation";
            };
            if (v instanceof Color) {
                return "color";
            };
            if (v instanceof Luminosity) {
                return "luminosity";
            };
            throw new Error("Failed pattern match at Graphics.Canvas line 318, column 5 - line 319, column 5: " + [ v.constructor.name ]);
        };
        return $foreign.setGlobalCompositeOperationImpl(ctx)(toString(composite));
    };
};
var setCanvasDimensions = function (d) {
    return function (ce) {
        return Control_Bind.bind(Control_Monad_Eff.bindEff)($foreign.setCanvasHeight(d.height)(ce))($foreign.setCanvasWidth(d.width));
    };
};
var getCanvasElementById = function (elId) {
    return $foreign.getCanvasElementByIdImpl(elId, Data_Maybe.Just.create, Data_Maybe.Nothing.value);
};
var getCanvasDimensions = function (ce) {
    return function __do() {
        var v = $foreign.getCanvasWidth(ce)();
        var v1 = $foreign.getCanvasHeight(ce)();
        return {
            width: v, 
            height: v1
        };
    };
};
var fillPath = function (ctx) {
    return function (path) {
        return function __do() {
            var v = $foreign.beginPath(ctx)();
            var v1 = path();
            var v2 = $foreign.fill(ctx)();
            return v1;
        };
    };
};
var eqLineCap = new Data_Eq.Eq(function (x) {
    return function (y) {
        if (x instanceof Round && y instanceof Round) {
            return true;
        };
        if (x instanceof Square && y instanceof Square) {
            return true;
        };
        if (x instanceof Butt && y instanceof Butt) {
            return true;
        };
        return false;
    };
});
var createPattern = function (img) {
    return function (repeat) {
        var toString = function (v) {
            if (v instanceof Repeat) {
                return "repeat";
            };
            if (v instanceof RepeatX) {
                return "repeat-x";
            };
            if (v instanceof RepeatY) {
                return "repeat-y";
            };
            if (v instanceof NoRepeat) {
                return "no-repeat";
            };
            throw new Error("Failed pattern match at Graphics.Canvas line 608, column 5 - line 609, column 5: " + [ v.constructor.name ]);
        };
        return $foreign.createPatternImpl(img)(toString(repeat));
    };
};
module.exports = {
    SourceOver: SourceOver, 
    SourceIn: SourceIn, 
    SourceOut: SourceOut, 
    SourceAtop: SourceAtop, 
    DestinationOver: DestinationOver, 
    DestinationIn: DestinationIn, 
    DestinationOut: DestinationOut, 
    DestinationAtop: DestinationAtop, 
    Lighter: Lighter, 
    Copy: Copy, 
    Xor: Xor, 
    Multiply: Multiply, 
    Screen: Screen, 
    Overlay: Overlay, 
    Darken: Darken, 
    Lighten: Lighten, 
    ColorDodge: ColorDodge, 
    ColorBurn: ColorBurn, 
    HardLight: HardLight, 
    SoftLight: SoftLight, 
    Difference: Difference, 
    Exclusion: Exclusion, 
    Hue: Hue, 
    Saturation: Saturation, 
    Color: Color, 
    Luminosity: Luminosity, 
    Round: Round, 
    Square: Square, 
    Butt: Butt, 
    BevelJoin: BevelJoin, 
    RoundJoin: RoundJoin, 
    MiterJoin: MiterJoin, 
    Repeat: Repeat, 
    RepeatX: RepeatX, 
    RepeatY: RepeatY, 
    NoRepeat: NoRepeat, 
    AlignLeft: AlignLeft, 
    AlignRight: AlignRight, 
    AlignCenter: AlignCenter, 
    AlignStart: AlignStart, 
    AlignEnd: AlignEnd, 
    createPattern: createPattern, 
    fillPath: fillPath, 
    getCanvasDimensions: getCanvasDimensions, 
    getCanvasElementById: getCanvasElementById, 
    setCanvasDimensions: setCanvasDimensions, 
    setGlobalCompositeOperation: setGlobalCompositeOperation, 
    setLineCap: setLineCap, 
    setLineJoin: setLineJoin, 
    setTextAlign: setTextAlign, 
    strokePath: strokePath, 
    textAlign: textAlign, 
    tryLoadImage: tryLoadImage, 
    withContext: withContext, 
    eqLineCap: eqLineCap, 
    showComposite: showComposite, 
    showTextAlign: showTextAlign, 
    showPatternRepeat: showPatternRepeat, 
    addColorStop: $foreign.addColorStop, 
    arc: $foreign.arc, 
    beginPath: $foreign.beginPath, 
    bezierCurveTo: $foreign.bezierCurveTo, 
    canvasElementToImageSource: $foreign.canvasElementToImageSource, 
    canvasToDataURL: $foreign.canvasToDataURL, 
    clearRect: $foreign.clearRect, 
    clip: $foreign.clip, 
    closePath: $foreign.closePath, 
    createImageData: $foreign.createImageData, 
    createImageDataCopy: $foreign.createImageDataCopy, 
    createLinearGradient: $foreign.createLinearGradient, 
    createRadialGradient: $foreign.createRadialGradient, 
    drawImage: $foreign.drawImage, 
    drawImageFull: $foreign.drawImageFull, 
    drawImageScale: $foreign.drawImageScale, 
    fill: $foreign.fill, 
    fillRect: $foreign.fillRect, 
    fillText: $foreign.fillText, 
    font: $foreign.font, 
    getCanvasHeight: $foreign.getCanvasHeight, 
    getCanvasWidth: $foreign.getCanvasWidth, 
    getContext2D: $foreign.getContext2D, 
    getImageData: $foreign.getImageData, 
    imageDataBuffer: $foreign.imageDataBuffer, 
    imageDataHeight: $foreign.imageDataHeight, 
    imageDataWidth: $foreign.imageDataWidth, 
    lineTo: $foreign.lineTo, 
    measureText: $foreign.measureText, 
    moveTo: $foreign.moveTo, 
    putImageData: $foreign.putImageData, 
    putImageDataFull: $foreign.putImageDataFull, 
    quadraticCurveTo: $foreign.quadraticCurveTo, 
    rect: $foreign.rect, 
    restore: $foreign.restore, 
    rotate: $foreign.rotate, 
    save: $foreign.save, 
    scale: $foreign.scale, 
    setCanvasHeight: $foreign.setCanvasHeight, 
    setCanvasWidth: $foreign.setCanvasWidth, 
    setFillStyle: $foreign.setFillStyle, 
    setFont: $foreign.setFont, 
    setGlobalAlpha: $foreign.setGlobalAlpha, 
    setGradientFillStyle: $foreign.setGradientFillStyle, 
    setLineWidth: $foreign.setLineWidth, 
    setMiterLimit: $foreign.setMiterLimit, 
    setPatternFillStyle: $foreign.setPatternFillStyle, 
    setShadowBlur: $foreign.setShadowBlur, 
    setShadowColor: $foreign.setShadowColor, 
    setShadowOffsetX: $foreign.setShadowOffsetX, 
    setShadowOffsetY: $foreign.setShadowOffsetY, 
    setStrokeStyle: $foreign.setStrokeStyle, 
    stroke: $foreign.stroke, 
    strokeRect: $foreign.strokeRect, 
    strokeText: $foreign.strokeText, 
    transform: $foreign.transform, 
    translate: $foreign.translate
};

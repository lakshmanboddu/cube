// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var DOM = require("../DOM");
var DOM_HTML = require("../DOM.HTML");
var DOM_HTML_Types = require("../DOM.HTML.Types");
var Prelude = require("../Prelude");
var requestAnimationFrame = function (action) {
    return function __do() {
        var v = DOM_HTML.window();
        return $foreign.requestAnimationFrame_(v)(action)();
    };
};
module.exports = {
    requestAnimationFrame: requestAnimationFrame, 
    requestAnimationFrame_: $foreign.requestAnimationFrame_
};

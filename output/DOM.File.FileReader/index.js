// Generated by purs version 0.11.6
"use strict";
var $foreign = require("./foreign");
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var DOM = require("../DOM");
var DOM_File_FileReader_ReadyState = require("../DOM.File.FileReader.ReadyState");
var DOM_File_Types = require("../DOM.File.Types");
var Data_Foreign = require("../Data.Foreign");
var Data_Function = require("../Data.Function");
var Data_Maybe = require("../Data.Maybe");
var Partial_Unsafe = require("../Partial.Unsafe");
var Prelude = require("../Prelude");
var readyState = function (fr) {
    return function __do() {
        var v = $foreign.readyStateImpl(fr)();
        return Data_Maybe.fromJust()(DOM_File_FileReader_ReadyState.toEnumReadyState(v));
    };
};
module.exports = {
    readyState: readyState, 
    abort: $foreign.abort, 
    fileReader: $foreign.fileReader, 
    readAsArrayBuffer: $foreign.readAsArrayBuffer, 
    readAsDataURL: $foreign.readAsDataURL, 
    readAsText: $foreign.readAsText, 
    result: $foreign.result
};

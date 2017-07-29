
// | This module defines foreign types and functions for working with

// | the jQuery library.
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var DOM = require("../DOM");
var Data_Foreign = require("../Data.Foreign");
var Prelude = require("../Prelude");

// | Remove the specified CSS class.
var removeClass = function (cls) {
    return $foreign.setClass(cls)(false);
};

// | Hide elements.
var hide = $foreign.setVisible(false);

// | Show elements.
var display = $foreign.setVisible(true);

// | Add the specified CSS class.
var addClass = function (cls) {
    return $foreign.setClass(cls)(true);
};
module.exports = {
    addClass: addClass, 
    display: display, 
    hide: hide, 
    removeClass: removeClass, 
    append: $foreign.append, 
    appendText: $foreign.appendText, 
    attr: $foreign.attr, 
    before: $foreign.before, 
    body: $foreign.body, 
    clear: $foreign.clear, 
    clone: $foreign.clone, 
    cloneWithDataAndEvents: $foreign.cloneWithDataAndEvents, 
    closest: $foreign.closest, 
    create: $foreign.create, 
    css: $foreign.css, 
    find: $foreign.find, 
    getCurrentTarget: $foreign.getCurrentTarget, 
    getElementById: $foreign.getElementById, 
    getHtml: $foreign.getHtml, 
    getMetaKey: $foreign.getMetaKey, 
    getPageX: $foreign.getPageX, 
    getPageY: $foreign.getPageY, 
    getProp: $foreign.getProp, 
    getTarget: $foreign.getTarget, 
    getText: $foreign.getText, 
    getValue: $foreign.getValue, 
    getWhich: $foreign.getWhich, 
    hasClass: $foreign.hasClass, 
    on: $foreign.on, 
    "on'": $foreign["on'"], 
    parent: $foreign.parent, 
    preventDefault: $foreign.preventDefault, 
    ready: $foreign.ready, 
    remove: $foreign.remove, 
    select: $foreign.select, 
    setAttr: $foreign.setAttr, 
    setClass: $foreign.setClass, 
    setHtml: $foreign.setHtml, 
    setProp: $foreign.setProp, 
    setText: $foreign.setText, 
    setValue: $foreign.setValue, 
    setVisible: $foreign.setVisible, 
    stopImmediatePropagation: $foreign.stopImmediatePropagation, 
    stopPropagation: $foreign.stopPropagation, 
    toArray: $foreign.toArray, 
    toggle: $foreign.toggle, 
    toggleClass: $foreign.toggleClass
};

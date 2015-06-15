(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports.pkg = PKGJSON={"name":"positional-notation","version":"1.1.0","description":"decimal, binary, octal and hexadecimal notation","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"git@github.com:shecodes-content/position-notation.git"},"brain":{"provides":["bit","binary","octal","hexadecimal"],"track":"yellow","main":"index.js","content-transform":["brainpm-youtube"],"bundler":{"name":"bpm-bundle","version":"1.0.0"}},"author":"Jan Bölsche <jan@lagomorph.de> (http://regular.codes)","license":"CC-SA-BY-3.0","bugs":{"url":"https://github.com/shecodes-content/position-notation/issues"},"homepage":"https://github.com/shecodes-content/position-notation","devDependencies":{"brainpm-youtube":"1.x.x"},"dependencies":{"lazy-youtube":"^2.0.1"}}/*PKGJSON*/;
getHTML = module.exports.getHTML = function() {
    return "<h1><a name=\"positional-notation_positional-notation\" class=\"anchor\" href=\"#positional-notation_positional-notation\"><span class=\"header-link\"></span></a>Positional notation</h1><p>BAUDOT uses a series of five zeros and ones, representing the high and low state of the communication cable to encode the characters of the alphabet.<br>We have seen Bacon in 1605 doing something very similar. He was assigning characters to ‘words’ made of the two symbols A and B. So, both are using a set of two different symbols arranged into strings with a length of five to represent a single character.</p>\n<p>The ordering of these words, or combinations of A and B, is not arbitrary in the Baconian Cipher. If you look closely, you see that the symbol at the last position changes on every line, while the symbol at the second-to-last position changes with every second line and so forth. They follow a rule – they are numbers in Base 2 positional notation! What does that mean? This video explains it!</p>\n<p><div class=\"video\"><div class=\"lazyYT\" data-youtube-id=\"5sS7w-CMHkU\"></div><div class=\"credits\"><span class=\"title\">Pre-Algebra 3 - Decimal, Binary, Octal &amp; Hexadecimal</span><span class=\"channel\"><a href=\"https://www.youtube.com/channel/UCWWPKhD0fbAHHMg9_i6JQ5A\">MyWhyU</a></span><span class=\"license\">youtube</span><span class=\"publishedAt\">2011-09-13T18:57:45.000Z</span></div></div></p>\n";
};
getDocumentFragment = module.exports.getDocumentFragment = function() {
    var html = getHTML();
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) frag.appendChild(div.firstChild);
    
        require("./index.js")(frag);
    
    return frag;
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', module.exports);
}

},{"./index.js":2}],2:[function(require,module,exports){

},{}]},{},[1]);

var lazyYoutube = require('lazy-youtube');
var styleNode = require('./node_modules/lazy-youtube/lazyyt.css');

module.exports = function(fragment) {
    var divs = fragment.querySelectorAll('div.lazyYT[data-youtube-id]');
    for(var i=0; i<divs.length; ++i) {
        lazyYoutube(divs[i]);
    }
};

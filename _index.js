module.exports.pkg = PKGJSON={"name":"tty","version":"1.3.0","description":"explains what a teletype system is","main":"index.js","brain":{"track":"black","requires":["intro"],"provides":["teletype","terminal"],"synonyms":{"tty":"teletype","term":"terminal"}},"scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"devDependencies":{"browserify":"^9.0.3","markdownify":"^0.1.0"},"repository":{"type":"git","url":"https://github.com/regular/tty.git"},"author":"Jan Bölsche <jan@lagomorph.de> (http://regular.codes)","license":"CC-SA-BY-3.0","bugs":{"url":"https://github.com/regular/tty/issues"},"homepage":"https://github.com/regular/tty"}/*PKGJSON*/;
getHTML = module.exports.getHTML = function() {
    return "<h1><a name=\"tty_tty\" class=\"anchor\" href=\"#tty_tty\"><span class=\"header-link\"></span></a>TTY</h1><p>Imagine an old electric typewriter. It has a keyboard much like a modern laptop. The keyboard is connected via a cable with the print unit.</p>\n<p>Now imagine you cut that cable in the middle and attach a very long extension cable that connects to your friend’s typewriter, in such a way, that your keyboard connects to your friend’s print unit and her keyboard connect to your print unit.</p>\n<p>You just created a <em>teletype</em> system! The two end points are called <em>terminals</em>.(like, on an airport,  the endpoints of a plane flight are called terminal too) You sit in front of your teletype terminal and your friend sits in front of hers and you can now chat over a long distance. As usual in chat systems, you soon start to use a lot of abbreviations to save time and paper. Actually, you quickly become obsessed with abbreviations. One of those abbreviations is <em>tty</em> for teletype and <em>term</em> for terminal.</p>\n<p>We’ll talk about how the characters are actually transmitted in the Science and History thread.</p>\n<p>TTY <em>terminals</em> were used in the 60s to connect to a computer. Early computers had no keyboards and no screens. They were giant, blinking, humming multi-million dollar boxes in the basement of corporations and universities. You could connect many terminals though, and these terminals stood in the offices, high above the humming “electronic brain” in the cellar. Many users could simultaneously use their terminals to send commands to the computer, run programs to calculate stuff and receive the programs’ output as a printout directly in their offices. That was mindblowingly futuristic at the time. Here is an example of how such a terminal looked like.</p>\n<p><img src=\"https://upload.wikimedia.org/wikipedia/commons/5/50/Bundesarchiv_Bild_183-2008-0516-500%2C_Fernschreibmaschine_mit_Telefonanschluss.jpg\" alt=\"A german telteype machine from 1930\"></p>\n<p>if you like, read more about teletypes on <a href=\"https://en.wikipedia.org/wiki/Teleprinter\">Wikipedia</a></p>\n";
};
getDocumentFragment = module.exports.getDocumentFragment = function() {
    var html = getHTML();
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) frag.appendChild(div.firstChild);
    
    return frag;
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', module.exports);
}

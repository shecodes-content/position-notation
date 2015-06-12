module.exports.pkg = PKGJSON={"name":"logic","version":"1.0.0","description":"about logic and truth tables","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"git@github.com:shecodes-content/logic.git"},"brain":{"provides":["logic","truth-tables"],"requires":["binary"],"content-transform":["brainpm-youtube"],"main":"index.js","track":"yellow"},"author":"Jan Bölsche <jan@lagomorph.de> (http://regular.codes)","license":"CC-SA-BY-3.0","bugs":{"url":"https://github.com/shecodes-content/logic/issues"},"homepage":"https://github.com/shecodes-content/logic","devDependencies":{"brainpm-youtube":"1.x.x"},"dependencies":{"lazy-youtube":"^2.0.1"}}/*PKGJSON*/;
getHTML = module.exports.getHTML = function() {
    return "<h1><a name=\"logic_logic\" class=\"anchor\" href=\"#logic_logic\"><span class=\"header-link\"></span></a>Logic</h1><p>A single bit can represent a number of things. For example, it can indicate whether a switch is in the <code>on</code> or <code>off</code> position, whether a particular dot on a screen is black or white, or whether a statement like “It is currently raining” is true or false.</p>\n<p>This last example – representing the truthfulness of a statement with a single bit – is what <em>logic</em> is all about. Learn about the fundamentals of logic from this video.</p>\n<p><div class=\"video\"><div class=\"lazyYT\" data-youtube-id=\"OLGVhszBlq4\"></div><div class=\"credits\"><span class=\"title\">Introduction to Logic</span><span class=\"channel\"><a href=\"https://www.youtube.com/channel/UCUHFjPIW4pH-itdifojJbUA\">ProfessorSerna</a></span><span class=\"license\">youtube</span><span class=\"publishedAt\">2011-12-23T23:23:41.000Z</span></div></div></p>\n<p><strong>Question 1.</strong> What is the negation of the statement:</p>\n<blockquote>\n<p>“If I have enough time, I will become an awesome programmer”<br>In logic the two possible states are called ‘true’ and ‘false’ and the operator that combines two statements into a compound statement is called ‘connective’. There is one unary connective (the negation), and two binary connectives (and, or). It is important to stress that the word ‘binary’ refers to the number of statements that are combined. A binary connective combines TWO statements, hence it is called BINARY. The negation connective, in contrast, is just dealing with ONE statement, hence it is called UNARY. (so, the ‘binary’ in ‘binary connective’ and the binary in ‘binary digit’ mean different things!)<br><a href=\"http://en.wikipedia.org/wiki/Logical_connective\">Wikipedia</a></p>\n</blockquote>\n";
};
getDocumentFragment = module.exports.getDocumentFragment = function() {
    var html = getHTML();
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) frag.appendChild(div.firstChild);
    
        require("/home/julia/.bpm/clones/logic/index.js")(frag);
    
    return frag;
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', module.exports);
}

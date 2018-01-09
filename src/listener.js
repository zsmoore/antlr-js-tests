var ECMAScriptListener = require('./antlr/ECMAScriptListener').ECMAScriptListener;
listener = function() {
    ECMAScriptListener.call(this);
};

var lastLit = null;

listener.prototype = Object.create(ECMAScriptListener.prototype);
listener.prototype.constructor = listener;

listener.prototype.exitVariableDeclaration = function(ctx) {
    var variableName = ctx.Identifier().getText();
    console.log('variable found with name ' + variableName + ' and value ' + lastLit);
}

listener.prototype.exitLiteralExpression = function(ctx) {
    lastLit = ctx.literal().getText();
}

exports.listener = listener;

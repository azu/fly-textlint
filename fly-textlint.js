// LICENSE : MIT
"use strict";
var TextLintEngine = require("textlint").TextLintEngine;
function createLinter(options) {
    var engine = new TextLintEngine(options);
    return function (filePath) {
        var results = engine.executeOnFiles([filePath]);
        if (!engine.isErrorResults(results)) {
            return;
        }
        var output = engine.formatResults(results);
        console.log(output);
        throw parseInt(results.length, 10) + " problems."
    }
}

module.exports = function () {
    this.textlint = function (opts) {
        var lint = createLinter(new TextLintEngine(opts));
        return this.unwrap().then(function (files) {
            files.forEach(function (file) {
                lint(file.file);
            })
        })
    };
};
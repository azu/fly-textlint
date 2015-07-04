var paths = {
    fixtures: "fixtures/**/*.md"
};

exports.main = function* () {
    yield this.source(paths.fixtures).textlint();
};
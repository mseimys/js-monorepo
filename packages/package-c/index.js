var a = require('@js-monorepo/package-a');
var b = require('@js-monorepo/package-b');

function func() {
    console.log('C Package');
    a.test1();
    b.test1();
    b.test2();
}

module.exports = func

var moment = require('moment');
var _ = require('lodash');

function test1() {
    console.log('B Runing moment', moment().format('LLLL'));
}

function test2() {
    console.log('B Lodash tricks', _.defaults({ 'a': 1 }, { a: 3, b: 2, c: 3 }));
}

module.exports = {
    test1: test1,
    test2: test2
}

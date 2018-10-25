var _ = require('lodash');

function test1() {
    console.log('A Lodash tricks', _.defaults({ 'a': 1 }, { a: 3, b: 666 }));
}

module.exports = {
    test1: test1,
}

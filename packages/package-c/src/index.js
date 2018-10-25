import b from '@js-monorepo/package-b';

var a = require('@js-monorepo/package-a');

function func() {
    console.log('C Package');
    a.test1();
    b.test1();
    b.test2();
}

func();
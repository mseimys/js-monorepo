import _ from 'lodash';

export const test1 = () => {
    console.log('A Lodash tricks', _.defaults({ 'a': 1 }, { a: 3, b: 666 }));
}

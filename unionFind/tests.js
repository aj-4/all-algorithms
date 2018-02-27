const one = require('./1-quickFind');
const two = require('./2-quickUnion');
const three = require('./3-weighted');

tests(one);
tests(two);
tests(three);

function tests(obj) {
    console.log(obj.name);
    const ufOne = new obj(10);
    ufOne.union(1, 3);
    ufOne.union(2, 4);
    ufOne.union(5, 6);
    console.log(ufOne.connected(1, 3) === true);
    console.log(ufOne.connected(1, 4) === false);
    ufOne.union(1, 4);
    console.log(ufOne.connected(1, 4) === true);
}
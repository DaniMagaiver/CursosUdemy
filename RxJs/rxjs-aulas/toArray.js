const { from } = require("rxjs");
const { toArray } = require("rxjs/operators");

from([1, 2, 3, 4, 5]).pipe(toArray()).subscribe(console.log);

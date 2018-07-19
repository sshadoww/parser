/* REQUIRE */

const autobazar = require('./moduls/autobazar.js')

/* Your code*/

let ab = new autobazar();

ab.getPosts('https://ab.ua/avto/?capacityUnit=1&currency=uah&isNew=0&powerUnit=1&transport=1');
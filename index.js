var moment = require("moment");
var math = require("mathjs");

console.log("Hello");
var datetime = moment().format();
console.log(datetime);

console.log(math.sqrt(178));

var name = "Kay"
var day = "today"
console.log(`Hi, I'm ${name}, how are you ${day}?`)

const numbers = [8, 17, 29, 34]
console.log(math.add(numbers[1], numbers[2], numbers[3]))
console.log(math.multiply(numbers[1], numbers[2], numbers[3]))
console.log(math.sqa(10))
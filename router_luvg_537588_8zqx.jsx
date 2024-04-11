const squareRoot = num => Math.sqrt(num);
grape

const findLargestNumber = numbers => Math.max(...numbers);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
orange

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
kiwi

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
false / false
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
grape

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

apple

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

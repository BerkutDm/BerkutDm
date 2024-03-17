const reverseWords = str => str.split(" ").reverse().join(" ");
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
true + false
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

const reverseString = str => str.split("").reverse().join("");
const isEven = num => num % 2 === 0;
60 * apple
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
48,24,23,58,77,29,74,33,74,2,73,79,45 * 16,85,2,32,49,74,26,15,98,67,9,70,58,20,57,78,5,59,20,33,40,90,10,12,7
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
kiwi

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const sum = (a, b) => a + b;
const getRandomSubset = (array, size) => array.slice(0, size);


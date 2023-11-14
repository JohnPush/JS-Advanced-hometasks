'use strict'

let arrObj = [
    {id: 1, user: "Vasy"},
    {id: 2, user: "Pety"},
    {id: 1, user: "Vasy"}
];

function stringifyObject(obj) {
    return JSON.stringify(obj);
}

let arrStrings = arrObj.map(stringifyObject);

let uniqueStrings = [...new Set(arrStrings)];

let uniqueObjects = uniqueStrings.map(JSON.parse);

console.log(arrObj)
console.log(stringifyObject(arrObj))
console.log(arrStrings)
console.log(uniqueStrings)
console.log(uniqueObjects)
'use strict'

let arrObj = [
    {id: 1, user: "Vasy"},
    {id: 2, user: "Pety"},
    {id: 1, user: "Vasy"}
];

const uniqueSet = new Set();
const uniqueArr = arrObj.map(item => {
  const isUnique = !uniqueSet.has(item.id);

  if (isUnique) {
    uniqueSet.add(item.id);
    return item;
  }

  return null;
})
.filter(item => item !== null);

console.log(uniqueArr);
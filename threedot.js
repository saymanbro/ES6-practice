const AGE = [12,14,15,16];
const AGE2 = [21,32,43,54];

const allages = [...AGE,...AGE2,4]
// console.log(allages);
const business = 650;
const minister = 560;
const shocib = 350;
const takapoisa = [12,23,23,45]
// const maximum = Math.max(business,minister,shocib);
const maximum = Math.max(...takapoisa);
console.log(maximum);
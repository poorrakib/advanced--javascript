const number = [3, 4, 5, 6, 7, 8];

const result = number.map(x => x * x );
console.log(result);

const bigger = number.filter(x => x > 5);
console.log(bigger);

const isThere = number.find( x => x > 5);
console.log(isThere);

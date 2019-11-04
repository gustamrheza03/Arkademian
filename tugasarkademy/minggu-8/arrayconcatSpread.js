const arr1 = [1,2,3];
const arr2 = [4,5,6];

const obj1 = { name: 'Yusril', age: 17};
const obj2 = { addres : 'Jakata', gender: 'men'};

//penggabungan object menggunakan spread operator
const merge = {...obj1, ...obj2 };

console.log(arr1.concat(arr2));
console.log(merge); 
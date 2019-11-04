let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus'];
console.log(bulan);
bulan.splice(0);
console.log(bulan);

bulan.splice(4, 1, 'mei')
console.log(bulan)

bulan.splice(4, 1)
console.log(bulan)

bulan.splice(1)
console.log(bulan)

let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']; 
let removed = myFish.splice(0, 3, 'parrot', 'anemone', 'blue');
console.log(myFish);
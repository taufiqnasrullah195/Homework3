// Membuat array dengan 100 nilai random
let arr = []
for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 50) + 1)
}
console.log("Array dengan jumlah index 100:", arr);

// Membuat 2 array berdasarkan indexnya
let evenArr = []
let oddArr = []
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        evenArr.push(arr[i])
    } else {
        oddArr.push(arr[i])
    }
}
console.log("Array genap dengan jumlah index 50:", evenArr);
console.log("Array ganjil dengan jumlah index 50:", oddArr);

// Mencari nilai min, max, total, dan rata-rata pada 2 array
let evenMin = Math.min(...evenArr)
let evenMax = Math.max(...evenArr)
let evenTotal = evenArr.reduce((acc, val) => acc + val, 0)
let evenAvg = evenTotal / evenArr.length
console.log("Min array genap:", evenMin);
console.log("Max array genap:", evenMax);
console.log("Total array genap:", evenTotal);
console.log("Rata-rata array genap:", evenAvg);

let oddMin = Math.min(...oddArr)
let oddMax = Math.max(...oddArr)
let oddTotal = oddArr.reduce((acc, val) => acc + val, 0)
let oddAvg = oddTotal / oddArr.length
console.log("Min array ganjil:", oddMin);
console.log("Max array ganjil:", oddMax);
console.log("Total array ganjil:", oddTotal);
console.log("Rata-rata array ganjil:", oddAvg);

// Bandingkan kedua buah array
if (evenMin > oddMin) {
    console.log("Min lebih besar array genap")
} else {
    console.log("Min lebih besar array ganjil")
}

if (evenMax > oddMax) {
    console.log("Max lebih besar array genap")
} else {
    console.log("Max lebih besar array ganjil")
}

if (evenTotal === oddTotal) {
    console.log("Total memiliki nilai sama antara array genap dan ganjil")
} else {
    console.log("Total tidak memiliki nilai sama antara array genap dan ganjil")
}

if (evenAvg > oddAvg) {
    console.log("Rata rata lebih besar array genap")
} else {
    console.log("Rata rata lebih besar array ganjil")
}
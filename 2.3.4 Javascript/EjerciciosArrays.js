//testeados en https://jsfiddle.net
//EJ1
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (var i = 0; i < num.length; i += 1) {
    if (num[i] % 2 === 0) {
        console.log(num[i] + " es par")

    }

}
//EJ2
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var suma = 0;

for (var i = 0; i < nums.length; i += 1) {
    suma += nums[i];
}

console.log("La suma es: " + suma);
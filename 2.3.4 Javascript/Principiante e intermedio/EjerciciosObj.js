//ejercicios testeados en https://jsfiddle.net/
//EJ1 
var Jugador = {
    fuerza: 1,
    mostrarFuerza: function() {
        console.log("Tu fuerza es de " + this.fuerza);
    },


    incrementarFuerza: function () {
        this.fuerza += 1;
    }
}
Jugador.mostrarFuerza(); 
Jugador.incrementarFuerza();
Jugador.mostrarFuerza();  
//EJ2
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];;
var hoy = new Date();
var año = hoy.getFullYear();
var mes = hoy.getMonth();
var dia = hoy.getDate();
var msg = "Hoy es " + dia + " de " + meses[mes] + " de " + año;
console.log(msg);
//EJ3
function numRnd(num) {
    return Math.round(Math.random() * num);
}
console.log(numRnd(10));
console.log(numRnd(10));
console.log(numRnd(10));
console.log(numRnd(10));
//ejercicios testeados en https://jsfiddle.net/
const set= new Set([2,3,3,2]);

set.has(2); //  true
set.has(1); // false
set.add(2);
set.add(1); // ahora contiene 1
set.values;

const mapa = new Map({a:1, b:4});
mapa.has('a'); // true
mapa.has('c'); // false
mapa.set('c',5);
mapa.get('c');

function compruebaNombre(nombre){
    return new Promise(function(resolve, reject){
        if(name=== 'Duarte'){
            resolve("Correcto!");
        }else{
            reject("Falso!");
        }
    });
}

compruebaNombre("Duarte")
.then(Response => console.log(Response))
.catch(error => console.log(error));
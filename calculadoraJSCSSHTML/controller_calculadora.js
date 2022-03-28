window.onload = pintarPantalla;
var elementExp = document.getElementById("exp");
var elementDiv = document.getElementById("div");
var elementMul = document.getElementById("mul");
var elementRes = document.getElementById("res");
var elementSum = document.getElementById("sum");
var elementIgual = document.getElementById("igual");
var elementCancel = document.getElementById("cancel");
var elementBtn = document.getElementsByClassName("btn");
var elementScreen = document.getElementById('pantalla');
var pantalla = [];
for (var i = 0; i < elementBtn.length; i++) {
    elementBtn[i].addEventListener('click', function (e) {
        var target = e.target;
        if (target) {
            pantalla.push(target.value);
            pintarPantalla();
        }
    });
}
function pintarPantalla() {
    console.log(pantalla.join(''));
    elementScreen.value = pantalla.join('');
    console.log(elementScreen);
}
elementIgual.addEventListener('click', function () {
    manejoDeExponencial();
    pantalla = [eval(pantalla.join(''))];
    pintarPantalla();
});
elementCancel.addEventListener('click', function () {
    console.log("C");
    pantalla = [];
    pintarPantalla();
});
function manejoDeExponencial() {
    var index = pantalla.findIndex(function (pantallaElement) {
        return pantallaElement === '^';
    });
    while (index != -1) {
        var normalicedExp = "Math.pow(" + pantalla[index - 1] + ", " + pantalla[index + 1] + ")";
        pantalla = pantalla.slice(0, index - 1).concat(normalicedExp).concat(pantalla.slice(index + 2, pantalla.length));
        index = pantalla.findIndex(function (pantallaElement) {
            return pantallaElement === '^';
        });
    }
    // if(index != -1){
    //     const normalicedExp = `Math.pow(${pantalla[index-1]}, ${pantalla[index+1]})`;
    //     pantalla = pantalla.slice(0 , index-1).concat(normalicedExp).concat(pantalla.slice(index+2,pantalla.length));        
    // }
    console.log(pantalla);
}

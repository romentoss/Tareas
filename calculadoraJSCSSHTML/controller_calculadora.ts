window.onload = pintarPantalla;
    
    

let elementExp:HTMLElement = document.getElementById("exp");
let elementDiv:HTMLElement = document.getElementById("div");
let elementMul:HTMLElement = document.getElementById("mul");
let elementRes:HTMLElement = document.getElementById("res");
let elementSum:HTMLElement = document.getElementById("sum");
let elementIgual:HTMLElement = document.getElementById("igual");
let elementCancel:HTMLElement = document.getElementById("cancel");
let elementBtn:HTMLCollectionOf<Element> = document.getElementsByClassName("btn");
let elementScreen:HTMLElement = document.getElementById('pantalla');


var pantalla:string[] = [] 

for (let i = 0; i < elementBtn.length; i++) {
    elementBtn[i].addEventListener('click',function(e){
        const target = e.target as HTMLButtonElement;
        if(target){
            pantalla.push(target.value);
            pintarPantalla();       
        }
            
        
        
    })

}

function pintarPantalla(){
    
        console.log(pantalla.join(''));
        elementScreen.value = pantalla.join('');
        console.log(elementScreen);
}



  





elementIgual.addEventListener('click',()=>{
    manejoDeExponencial();
    pantalla = [eval(pantalla.join(''))]
    pintarPantalla();
})


elementCancel.addEventListener('click',()=>{
    console.log("C");
    pantalla = [];
    pintarPantalla();
    
})

function manejoDeExponencial(){
    let index = pantalla.findIndex((pantallaElement)=>{
        return pantallaElement === '^'

    })
    while(index != -1){
        const normalicedExp = `Math.pow(${pantalla[index-1]}, ${pantalla[index+1]})`;
        pantalla = pantalla.slice(0 , index-1).concat(normalicedExp).concat(pantalla.slice(index+2,pantalla.length));        
        index = pantalla.findIndex((pantallaElement)=>{
            return pantallaElement === '^'
    
        })
    }
  
    console.log(pantalla);
}



const fizzButton = document.querySelector('#fizz-id');
const buzzButton = document.querySelector('#buzz-id');
const fizzBuzzButton = document.querySelector('#fizzbuzz-id');
const resetearButton = document.querySelector('#vacio-id');
const vaciarlista = document.querySelector('#codigo');


eventlisternes();

function eventlisternes () {
   
    
    fizzButton.addEventListener('click', valorFizz);
    buzzButton.addEventListener('click', valorBuzz);
    fizzBuzzButton.addEventListener('click', valorFizzBuzz);
    resetearButton.addEventListener('click', () => {
        
        limpiarHTML();
    });


}
 
const esdivisible = (indice,numero) =>{
    if(indice % numero == 0){
       return true;
    }else{
       return false
    }
}

function valorFizz(e){
    e.preventDefault();
    for(let i = 1; i<=100; i++){
        if(esdivisible(i,3)){
            document.querySelector('#codigo').innerHTML += `Fizz:  ${i} \n`; 
        }
    }
}

function valorBuzz(e){
    e.preventDefault();
    for(let i = 1; i<=100; i++){
        if(esdivisible(i,5)){
            document.querySelector('#codigo').innerHTML += `Buzz:  ${i} \n`;  
        }
    }
}

function valorFizzBuzz(e){
    e.preventDefault();
    for(let i = 1; i<=100; i++){
        if(esdivisible(i,3) && esdivisible(i,5)){
            document.querySelector('#codigo').innerHTML += `FizzBuzz:  ${i} \n`; 
            //document.write(`FIZZ BUZZ:  ${i} </br>`);
        }      
    }    
}

function limpiarHTML(){
    //  vaciarlista.innerHTML ='';

     while(vaciarlista.firstChild){
         vaciarlista.removeChild(vaciarlista.firstChild);
     }
 }
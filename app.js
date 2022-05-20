const esdivisible = (indice,numero) =>{
    if(indice % numero == 0){
       return true;
    }else{
       return false
    }
}

for(let i = 1; i<=100; i++){
    if(esdivisible(i,3)&& esdivisible(i,5)){
        document.write(`FIZZ BUZZ:  ${i} </br>`);
    }
    else if(esdivisible(i,3)){
        document.write(`Fizz:  ${i} </br>`);
    }
    else if(esdivisible(i,5)){
        document.write(`Buzz:  ${i} </br>`);
    }
}

let i = 1;

do{
    if(i % 3 === 0 && i % 5 === 0){
        document.write(`FIZZBUZZ:  ${i} </br>`);
    }else if(i % 3 === 0){
        document.write(`Fizz:  ${i} </br>`);
    }else if(i % 5 === 0){
        document.write(`Buzz:  ${i} </br>`);
    } 
    i++;

}while(i<=100)
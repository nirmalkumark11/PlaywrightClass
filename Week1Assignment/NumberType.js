function numberType(number){

    if(number>0){
        console.log(`The Givem Number ${number} is Positive`);        
    }
    else if(number<0){
        console.log(`The Given Number ${number} is Negative`);
    }
    else{
        console.log(`The Givem Number is zero`);
    }
}

numberType(10);
numberType(-10);
numberType(0);
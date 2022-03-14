
function fizzbuzz(){



    for(x=1; x<=151 ;x++){
        if (x%3==0){
            console.log("Fizz")}
          

        if (x%5==0){
            console.log("Buzz")}

        if ((x%3==0)|| (x%5==0)){
            console.log("FizzBuzz")}
        
        else {
            console.log(x)
        }
       
        
    }
}

fizzbuzz()
const prompt = require("prompt-sync")();
 
let number = Number(prompt("Enter a number: "));
    while (true){
       
        if (Number.isNaN(number)){
            console.log("Invalid! Enter a number");
    }
        else{

    for (let count = 1; count<=12; count++){
           console.log(number + "*" + count + "=" + (number*count));
        }
    break;
      }
}
  

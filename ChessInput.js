const prompt = require("prompt-sync")();
while (true){
    
    let number = prompt("Enter a number between 1 and 10: ");
        if (number >= 1 && number <= 10)
            
            if(Number.isNaN(number)){
                console.log("Enter a valid number: ");
                 continue;
            }
                else{
    
    for(let index = 1; index <= number; index++){
        if (index % 2 === 0){
             console.log(" # # # #");
        }else{
             console.log("# # # #");
            }
        
    }
    break;
 }
}

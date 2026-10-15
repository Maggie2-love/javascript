let numbers = [2,7,8,5]
let target = 9

    for(let index=0; index<=numbers.length; index++){
    for(let count=1; count<=numbers.length; count++){

        if(numbers[index]+ numbers[count] == target){
        console.log("The two numbers are: " + index + "and" + count);
}
}
}


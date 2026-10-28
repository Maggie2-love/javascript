function reverseNumber(numbers) {

    for (let row = 0; row < numbers.length; row++) {
    for (let index = 0; index < numbers[row].length; index++) {
    for (let column = 0; column < numbers[row].length; column++) {

        if (numbers[row][column] < numbers[row][index]) {
            let temp = numbers[row][column];
            numbers[row][column] = numbers[row][index];
            numbers[row][index] = temp;
                }
            }
        }
    }
 }

let numbers = [
               [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9]
              ];
    reverseNumber(numbers);
    for (let row = 0; row < numbers.length; row++) {
    let line = "  ";
    for (let column = 0; column < numbers[row].length; column++) {
    line+=numbers[row][column] + "  ";
  }
  console.log(line)
}


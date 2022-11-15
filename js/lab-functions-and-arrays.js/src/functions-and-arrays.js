// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  return number1 > number2 ?  number1 : number2
}
console.log(maxOfTwoNumbers(5, 3));



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {

  if( array.length === 0 ){
    return null
}

return array.reduce((previousValue, currentValue) => {
    return currentValue.length > previousValue.length 
        ? currentValue
        : previousValue
})
}
console.log(findLongestWord(words));  



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  if( array.length === 0 ) return 0
    return array.reduce((previousValue, currentValue) => previousValue + currentValue) 
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if( array.length === 0 ) return null

  const promedio = array.reduce((previousValue, currentValue) => previousValue + currentValue)  
  return promedio / array.length
}
console.log(averageNumbers(numbersAvg));


// Level 2: Array of strings
const wordsArray = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) { 
  if( array.length === 0 ) return null

    const promedio = array.reduce((previousValue, currentValue) => previousValue + currentValue.length, 0)  
    console.log('')
    return promedio / array.length
}
console.log(averageWordLength(wordsArray));



// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  const otroArray = []
  if( array.length === 0 ) return null

  for (let i = 0; i < array.length; i++){
      let current = array[i]
      if(!otroArray.includes(current)){
        otroArray.push(current)
      }
  }
  return otroArray
}
console.log(uniquifyArray(wordsUnique));




// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, word) {
  if( array.length === 0) return null
  return array.includes(word)
}
console.log(doesWordExist(wordsFind));



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(array, word) {
  let counter = 0
  for( i in array){
      if (array[i] === word) counter++
  }
  return counter
}
console.log(howManyTimes(wordsCount));


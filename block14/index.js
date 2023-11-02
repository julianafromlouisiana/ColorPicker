// ONLY ODDS
// Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers
// from original array
// return array with single values

const numbersArray = [2, 4, 6, 8, 11, 20, 15, 22];

const oddNumbersArray = numbersArray.filter(number => number % 2 !== 0);
console.log(oddNumbersArray);

const numbersArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbersArray2 = numbersArray2.filter(number => number % 2 !== 0);
console.log(oddNumbersArray2);

const numbersArray3 = [70, 42, 55, 81, 21, 91, 34];

const oddNumbersArray3 = numbersArray3.filter(number => number % 2 !== 0);
console.log(oddNumbersArray3);

const numbersArray4 = [2, 4, 6, 8, 10, 11, 12];

const oddNumbersArray4 = numbersArray4.filter(number => number % 2 !== 0);
console.log(oddNumbersArray4);

//VOWEL VERSUS CONSTNANT 
// Create a Javascript code that accepts
// a string of lowercase letter
//Then print the word followed by 
// 1) How many consonants 
//2) How many vowels it has

//considered vowels "a", "e", "i","o","u"

//Hint define two variables that keep track of the number of consonants and vowels

function countConsonantsAndVowels(inputString) {
    //Setting up the Vowel and Consonant Counter
    let consonantsCount = 0;
    let vowelsCount = 0;

    //Loops through inputSting and countConsonantsAndVowels
    for (let i =0; i < inputString.length; i++) {
        const letter = inputString[i];
        if ("aeiou".includes(letter)) {
            //If letter is a vowel
            vowelsCount++;
        } else {
            //If letter is a consonant
            consonantsCount++;
        }
    }

    //Print word, vowels count, and consonants count
    console.log(`${inputWord} has ${consonantsCount} consonants and ${vowelsCount} vowels`);
   
}
const inputWord = "hello";
countConsonantsAndVowels(inputWord);
 //------------------------------------------------------

 function countConsonantsAndVowels2(inputString2) {
    //Setting up the Vowel and Consonant Counter
    let consonantsCount2 = 0;
    let vowelsCount2 = 0;

    //Loops through inputSting and countConsonantsAndVowels
    for (let i =0; i < inputString2.length; i++) {
        const letter = inputString2[i];
        if ("aeiou".includes(letter)) {
            //If letter is a vowel
            vowelsCount2++;
        } else {
            //If letter is a consonant
            consonantsCount2++;
        }
    }

    //Print word, vowels count, and consonants count
    console.log(`${inputWord2} has ${consonantsCount2} consonants and ${vowelsCount2} vowels`);
   
}
const inputWord2 = "ukelele";
countConsonantsAndVowels2(inputWord2);

//-------------------------------------------------------------

function countConsonantsAndVowels3(inputString3) {
    //Setting up the Vowel and Consonant Counter
    let consonantsCount3 = 0;
    let vowelsCount3 = 0;

    //Loops through inputSting and countConsonantsAndVowels
    for (let i =0; i < inputString3.length; i++) {
        const letter = inputString3[i];
        if ("aeiou".includes(letter)) {
            //If letter is a vowel
            vowelsCount3++;
        } else {
            //If letter is a consonant
            consonantsCount3++;
        }
    }

    //Print word, vowels count, and consonants count
    console.log(`${inputWord3} has ${consonantsCount3} consonants and ${vowelsCount3} vowels`);
   
}
const inputWord3 = "awesome";
countConsonantsAndVowels3(inputWord3);

//----------------------------------------------------


function countConsonantsAndVowels4(inputString4) {
    //Setting up the Vowel and Consonant Counter
    let consonantsCount4 = 0;
    let vowelsCount4 = 0;

    //Loops through inputSting and countConsonantsAndVowels
    for (let i =0; i < inputString4.length; i++) {
        const letter = inputString4[i];
        if ("aeiou".includes(letter)) {
            //If letter is a vowel
            vowelsCount4++;
        } else {
            //If letter is a consonant
            consonantsCount4++;
        }
    }

    //Print word, vowels count, and consonants count
    console.log(`${inputWord4} has ${consonantsCount4} consonants and ${vowelsCount4} vowels`);
   
}
const inputWord4 = "onomonopia";
countConsonantsAndVowels4(inputWord4);

//----------------------------------------------------------

function countConsonantsAndVowels5(inputString5) {
    //Setting up the Vowel and Consonant Counter
    let consonantsCount5 = 0;
    let vowelsCount5 = 0;

    //Loops through inputSting and countConsonantsAndVowels
    for (let i =0; i < inputString5.length; i++) {
        const letter = inputString5[i];
        if ("aeiou".includes(letter)) {
            //If letter is a vowel
            vowelsCount5++;
        } else {
            //If letter is a consonant
            consonantsCount5++;
        }
    }

    //Print word, vowels count, and consonants count
    console.log(`${inputWord5} has ${consonantsCount5} consonants and ${vowelsCount5} vowels`);
   
}
const inputWord5 = "textbook";
countConsonantsAndVowels5(inputWord5);

//---------------------------------------------------------

//Reverse Array- Using Loop, create a JavaScript code that creates a new array in reverse order

function reverseArray(inputArray) {
    //Create empty array to store reverse variables
    let reversedArray = [];

    //Create a for loop to run over the inputArray in reverse
    for (let i = inputArray.length - 1; i >= 0; i--) {
        reversedArray.push(inputArray[i]);
    }
    return reversedArray;
}
 const originaArray = [1, 2, 3];
 const reversedArray = reverseArray(originaArray);
 console.log(reversedArray);

 //---------------------------------------------------------------

 function reverseArray2(inputArray2) {
    //Create empty array to store reverse variables
    let reversedArray2 = [];

    //Create a for loop to run over the inputArray in reverse
    for (let i = inputArray2.length - 1; i >= 0; i--) {
        reversedArray2.push(inputArray2[i]);
    }
    return reversedArray2;
}
 const originaArray2 = [1, 3, 5, 7, 9, 11];
 const reversedArray2 = reverseArray2(originaArray2);
 console.log(reversedArray2);

 //-----------------------------------------------------------------

 function reverseArray3(inputArray3) {
    //Create empty array to store reverse variables
    let reversedArray3 = [];

    //Create a for loop to run over the inputArray in reverse
    for (let i = inputArray3.length - 1; i >= 0; i--) {
        reversedArray3.push(inputArray3[i]);
    }
    return reversedArray3;
}
 const originaArray3 = [20, 50, 30, 60, 200];
 const reversedArray3 = reverseArray3(originaArray3);
 console.log(reversedArray3);

 //--------------------------------------------------------------------

 function reverseArray4(inputArray4) {
    //Create empty array to store reverse variables
    let reversedArray4 = [];

    //Create a for loop to run over the inputArray in reverse
    for (let i = inputArray4.length - 1; i >= 0; i--) {
        reversedArray4.push(inputArray4[i]);
    }
    return reversedArray4;
}
 const originaArray4 = [1, -1, 2, -3, 5, -8, 13];
 const reversedArray4 = reverseArray4(originaArray4);
 console.log(reversedArray4);

 //----------------------------------------------------------------------
//Create a JavaScript code that prints each number from 1 to 100 on a new line.
//For each multiple of 3, print "Fizz" instead of the number.
//For each multiple of 5, print "Buzz" instead of the number.
//For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

//Using a for loop set a counter from 1 to 100
for (let i = 1; i <= 100; i++) {
    //Check for multiples of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    //Check for multiples of 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    //Check for multiples of 5
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    // Print number if not a multiple of 3 or 5
    else {
        console.log(i);
    }
}




const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn')
const output = document.getElementById('output')

let isCorrect = false
const romanConversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

function handleUserInput() {    
    const input = checkUserInput();
    isCorrect ? output.setAttribute('class', 'correct') : output.setAttribute('class', 'wrong')
    
    output.textContent = input;
    
};
function checkUserInput() {    
    const number = parseInt(numberInput.value);
    isCorrect =false
    if (isNaN(number)) {
        return 'Please enter a valid number';
    } else if (number < 1) {
        return 'Please enter a number greater than or equal to 1';
    } else if (number >= 4000) {
        return 'Please enter a number less than or equal to 3999';
    } else {
        isCorrect =true
        return convertToRoman(number)
    }
};

function convertToRoman(num) {
    let result = '';
    for (const key in romanConversion) {

        while (num >= romanConversion[key]) {
            result += key;
            num -= romanConversion[key]
        }
    }
    return result

};

convertBtn.addEventListener('click', handleUserInput);
numberInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {         
        e.preventDefault();
        handleUserInput();
    }
});


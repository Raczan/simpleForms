// Ejercicio 1
export const countCharacters = () => {
  const result = document.getElementById('result');
  const text = document.getElementById('firstInput').value;
  result.innerHTML = `La cadena "${text}" tiene ${text.length} caracteres`;
};

// Ejercicio 2
export const sliceWord = () => {
  const result = document.getElementById('result');
  const word = document.getElementById('firstInput').value;
  const extract = +document.getElementById('secondInput').value;
  result.innerHTML = word.slice(0, extract);
};

// Ejercicio 3
export const splitString = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;
  const separator = document.getElementById('secondInput').value;
  result.innerHTML = string.split(separator);
};

// Ejercicio 4
export const getDiscount = () => {
  const result = document.getElementById('result');
  const price = +document.getElementById('firstInput').value;
  const discount = +document.getElementById('secondInput').value;
  let finalPrice = price - price * (discount / 100);
  result.innerHTML = `El precio es de $${price} (sin descuento). El precio con un descuento de ${discount} es de: $${finalPrice}`;
};

// Ejercicio 5
export const calculateAge = () => {
  const result = document.getElementById('result');
  const age = document.getElementById('firstInput').value;
  let currentYear = new Date().getFullYear();
  let yearBirth = age.getFullYear();
  result.innerHTML = `Tienes: ${currentYear - yearBirth} años`;
};

// Ejercicio 6
export const decimalToRoman = () => {
  const result = document.getElementById('result');
  let num = +document.getElementById('firstInput').value;
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];
  let romanNumeral = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      romanNumeral += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  result.innerHTML = romanNumeral;
};

// Ejercicio 7
export const decimalToBinary = () => {
  const result = document.getElementById('result');
  const decimal = +document.getElementById('firstInput').value;
  result.innerHTML = `${decimal} = ${decimal.toString(2)}`;
};

// Ejercicio 8
export const vowelsInString = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;
  result.innerHTML = `${string} = ${string.match(/[aeiou]/gi).length}`;
};

// Ejercicio 9
export const checkPalindrome = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;
  const arrayValues = string.split('');
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');

  if (string == reverseString) {
    result.innerHTML = `${string} = true`;
  } else {
    result.innerHTML = `${string} = false`;
  }
};

// Ejercicio 10
export const quitSpaceString = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;
  result.innerHTML = `${string} = ${string.replace(' ', '')}`;
};

// Ejercicio 11
export const firstToUpperCase = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;
  result.innerHTML = string
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
};

// Ejercicio 12
export const wordCount = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;
  result.innerHTML = `${string} = ${string.split(' ').length}`;
};

// Ejercicio 13
export const stCharToUpperCase = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;
  const upperCase = string
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  result.innerHTML = `${string} = ${upperCase}`;
};

// Ejercicio 14
export const reverseString = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;
  const reversedString = string.split('').reverse().join('');
  result.innerHTML = `${string} = ${reversedString}`;
};

// Ejercicio 15
export const sumArray = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;

  let sum = 0;
  string.split(' ').map((num) => (sum += Number(num)));
  result.innerHTML = `La suma de todos los numeros es ${sum}`;
};

// Ejercicio 16
export const greaterLessAge = () => {
  const result = document.getElementById('result');
  const string = document.getElementById('firstInput').value;
  const array = string.split(' ').map((num) => Number(num));

  let sortedArray = array.sort((a, b) => a - b);
  result.innerHTML = `La edad mayor es ${
    sortedArray[sortedArray.length - 1]
  } y la edad menor es ${sortedArray[0]}`;
};

// Ejercicio 17
export const checkGrades = () => {
  const result = document.getElementById('result');
  const grade = +document.getElementById('firstInput').value;

  if (grade >= 0 && grade <= 5) {
    result.innerHTML = `${grade} = Pésimo`;
  }
  if (grade >= 6 && grade <= 7) {
    result.innerHTML = `${grade} = Regular`;
  }
  if (grade >= 8 && grade <= 9) {
    result.innerHTML = `${grade} = Bueno`;
  }
  if (grade === 10) {
    result.innerHTML = `${grade} = Excelente`;
  }
};

// Ejercicio 18
export const lenghtNumber = () => {
  const result = document.getElementById('result');
  const number = +document.getElementById('firstInput').value;
  result.innerHTML = `${number} = ${number.toString().length} cifras`;
};

// Ejercicio 19
export const primeNumbers = () => {
  const result = document.getElementById('result');
  let arrayPrimeNumbers = [];
  for (let i = 2; i <= 1000; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      arrayPrimeNumbers.push(i);
    }
  }
  result.innerHTML = arrayPrimeNumbers;
};

// Ejercicio 20
export const rockPaperScissor = () => {
  const result = document.getElementById('result');
  const player1 = document.getElementById('firstInput').value;
  const player2 = document.getElementById('secondInput').value;
  if (player1 === player2) {
    result.innerHTML = 'Empate';
    return;
  } else {
    if (player1 === 'piedra') {
      if (player2 === 'papel') {
        result.innerHTML = 'Gana papel';
        return;
      } else {
        result.innerHTML = 'Gana piedra';
        return;
      }
    }
    if (player1 === 'papel') {
      if (player2 === 'tijera') {
        result.innerHTML = 'Gana tijera';
        return;
      } else {
        result.innerHTML = 'Gana papel';
        return;
      }
    }
    if (player1 === 'tijera') {
      if (player2 === 'papel') {
        result.innerHTML = 'Gana papel';
        return;
      } else {
        result.innerHTML = 'Gana tijera';
        return;
      }
    }
  }
};

// Ejercicio 21
export const functionTimer = () => {
  const result = document.getElementById('result');
  setInterval(() => (result.innerHTML = 'Hola mundo'), 3000);
};

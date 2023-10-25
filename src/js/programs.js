import {
  countCharacters,
  sliceWord,
  splitString,
  getDiscount,
  calculateAge,
  decimalToRoman,
  decimalToBinary,
  vowelsInString,
  checkPalindrome,
  quitSpaceString,
  firstToUpperCase,
  wordCount,
  stCharToUpperCase,
  reverseString,
  sumArray,
  greaterLessAge,
  checkGrades,
  lenghtNumber,
  primeNumbers,
  rockPaperScissor,
  functionTimer,
} from '../js/arrowFunc';

const programs = [
  {},
  {
    title: 'Programa que cuenta el número de caracteres de una cadena de texto',
    inputs: [{ id: 'firstInput', placeholder: 'Cadena de texto' }],
    execute: countCharacters,
  },
  {
    title:
      'Programa que te devuelva el texto recortado según el número de caracteres indicados',
    inputs: [
      { id: 'firstInput', placeholder: 'Texto a recortar' },
      { id: 'secondInput', placeholder: 'Cantidad a recortar' },
    ],
    execute: sliceWord,
  },
  {
    title:
      'Programa que dado un String devuelve un Array de textos separados por cierto caracter',
    inputs: [
      { id: 'firstInput', placeholder: 'Cadena de texto' },
      { id: 'secondInput', placeholder: 'Separador' },
    ],
    execute: splitString,
  },
  {
    title:
      'Programa que calcula el precio de un producto aplicando un descuento',
    inputs: [
      { id: 'firstInput', placeholder: 'Ingrese un precio' },
      { id: 'secondInput', placeholder: 'Descuento' },
    ],
    execute: getDiscount,
  },
  {
    title: 'Calcula la edad de una persona',
    inputs: [
      {
        id: 'firstInput',
        placeholder: 'Ingrese una fecha tipo (1988,09,01)',
      },
    ],
    execute: calculateAge,
  },
  {
    title: 'Programa que convierte decimal a romano hasta el número 1000',
    inputs: [{ id: 'firstInput', placeholder: 'Ingrese un decimal' }],
    execute: decimalToRoman,
  },
  {
    title: 'Programa que convierte decimal a binario',
    inputs: [{ id: 'firstInput', placeholder: 'Ingrese un decimal' }],
    execute: decimalToBinary,
  },
  {
    title: 'Programa que devuelva el número de vocales de una cadena de texto',
    inputs: [{ id: 'firstInput', placeholder: 'Cadena de texto' }],
    execute: vowelsInString,
  },
  {
    title: 'Programa que valide si una palabra es palíndromo o no',
    inputs: [{ id: 'firstInput', placeholder: 'Cadena de texto' }],
    execute: checkPalindrome,
  },
  {
    title: 'Programa que elimine los espacios de una cadena de texto',
    inputs: [{ id: 'firstInput', placeholder: 'Cadena de texto' }],
    execute: quitSpaceString,
  },
  {
    title:
      'Programa que toma la primera letra de cada palabra y lo devuelve en mayúsculas',
    inputs: [{ id: 'firstInput', placeholder: 'Cadena de texto' }],
    execute: firstToUpperCase,
  },
  {
    title:
      'Programa que devuelva la cantidad de palabras de una cadena de texto',
    inputs: [{ id: 'firstInput', placeholder: 'Cadena de texto' }],
    execute: wordCount,
  },
  {
    title:
      'Programa que devuelva el texto con la primera letra de cada palabra en mayúscula',
    inputs: [{ id: 'firstInput', placeholder: 'Cadena de texto' }],
    execute: stCharToUpperCase,
  },
  {
    title: 'Programa que devuelve la cadena de texto invertida',
    inputs: [{ id: 'firstInput', placeholder: 'Cadena de texto' }],
    execute: reverseString,
  },
  {
    title:
      'Programa que al pasar un arreglo de números devuelve la suma de todos los números',
    inputs: [
      { id: 'firstInput', placeholder: 'Ingrese un arreglo de numeros' },
    ],
    execute: sumArray,
  },
  {
    title:
      'Programa que al pasar un arreglo de edades devuelve el mayor y menor numero',
    inputs: [
      { id: 'firstInput', placeholder: 'Ingrese un arreglo de numeros' },
    ],
    execute: greaterLessAge,
  },
  {
    title: 'Programa de escala de notas de 0 a 10',
    inputs: [{ id: 'firstInput', placeholder: 'Ingrese una nota' }],
    execute: checkGrades,
  },
  {
    title: 'Programa que devuelva el número de cifras de un número entero',
    inputs: [{ id: 'firstInput', placeholder: 'Numero entero' }],
    execute: lenghtNumber,
  },
  {
    title: 'Programa que muestra los numeros primos de 1 a 1000',
    inputs: [],
    execute: primeNumbers,
  },
  {
    title: 'Programa que realiza el juego de piedra, papel o tijera',
    inputs: [
      { id: 'firstInput', placeholder: 'Primer jugador' },
      { id: 'secondInput', placeholder: 'Segundo jugador' },
    ],
    execute: rockPaperScissor,
  },
  {
    title:
      'Programa con temporizador que muestra un mensaje cada cierto tiempo',
    inputs: [],
    execute: functionTimer,
  },
];

export { programs };

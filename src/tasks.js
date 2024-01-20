'use strict';

const cannonsReady = (gunners) => {
  for (let gunner in gunners) {
    if (gunners[gunner] === "nay") {
      return "Shiver me timbers";
    }
  }
  return "Fire";
};

const remainder = (m, n) => {
  if (m > n) {
    return m % n;
  } else {
    return n % m;
  }
};

const invert = (array) => {
  return array.map((arr) => (arr === -0 ? arr : -arr));
};

function otherAngle(a, b) {
  let angles = 180;
  return angles - a - b;
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}

const result = new SmallestIntegerFinder();

console.log(result.findSmallestInt([1, 2, 3, 4, 5]));

function isLockNessMonster(string) {
  if (string.includes("tree fiddy") || string.includes("3.50")) {
    return true;
  } else {
    return false;
  }

  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
}

console.log(
  isLockNessMonster(
    'Your girlscout cookies are ready to ship. Your total comes to tree fiddy")'
  )
);

const Smash = (words) => {
  return words.join(' ');
}

console.log(Smash(['hello', 'world', 'this', 'is', 'great']));

const highAndLow = (numbers) => {
  let toArray = numbers.split(" ");
  let toArrayNumbers = toArray.map(Number);
  let toBiggestNumber = Math.max.apply(null, toArrayNumbers);
  let toSmallestNumber = Math.min.apply(null, toArrayNumbers);
  let result = [toBiggestNumber, toSmallestNumber];
  return result.join(' ');
};

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

function findMultiples(integer, limit) {
  const multiples = [];

  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0) {
      multiples.push(i);
    }
  }

  return multiples;
}

console.log(findMultiples(5, 25));

function noBoringZeros(n) {
  let nToString = n.toString();
  let toNumberNotZeros = nToString.replaceAll(/0/g, "");
  return toNumberNotZeros === "" ? 0 : Number(toNumberNotZeros);
}

console.log(noBoringZeros(105));

const xor = (a,b) => {
  return a !== b;
}

console.log(xor(true, false));

const mergeArrays = (a, b) => {
  let firstSortArray = [...a];
  let secondarySortArray = [...b];
  firstSortArray.sort((a, b) => a - b);
  secondarySortArray.sort((a, b) => a - b);
  let concatenationArr = firstSortArray.concat(secondarySortArray);
  let result = Array.from(new Set(concatenationArr));

  return result.sort((a, b) => a - b);
};

console.log(mergeArrays([4, 3, 2, 1], [8, 7, 6, 5, 4, 3]));

const shortenDay = (longDate) => {
  let date = longDate.split(" ");
  date.pop();
  return date.join(" ").replaceAll(",", "");
};

console.log(shortenDay("Friday May 2, 9am"));

const digitize = (n) => {
  let toArr = n.toString().split("").map(Number).reverse();
  return toArr;
};

console.log(digitize(954522));

function leo(oscar) {
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  } else if (oscar > 88) {
    return "Leo got one already!";
  } else if (oscar !== 88 && (oscar !== 86 || oscar < 87)) {
  }
  return "When will you give Leo an Oscar?";
}

console.log(leo(89));

const sayHello = (name, city, state) => {
  let nameToString = `Hello, ${name.join(" ")}!`;
  let cityGreeting = `Welcome to ${city}, ${state}!`;

  return nameToString + " " + cityGreeting;
};

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));

const greetAbe = (name) => "Hello, " + 'Abe' + "!";
const greetBen = (name) => "Hello, " + 'Ben' + "!";

function numberJoy(n) {
  let sum = n.toString().split("").map(Number);
  let calcSum = sum.reduce((acc, item) => acc + item, 0);
  let toArr = String(calcSum).split("").reverse().join("");
  if (calcSum * toArr === n) {
    return true;
  } else {
    return false;
  }
}

console.log(numberJoy(18));

const filter_list = (l) => {
  return l.filter((item) => typeof item === "number");
};

console.log(filter_list([1, 2, "a", 0, "b"]));

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

console.log(twoDecimalPlaces(9.55321315))

const candies = (kids) => {
  if (kids.length < 1) {
    return -1;
  }
  if (kids.length === 1) {
    return -1;
  }

  let findMaxKidOfCandies = Math.max(...kids);
  console.log(findMaxKidOfCandies);
  const findMaxKidOfCandiesIndex = kids.reduce((indexks, item, index) => {
    if (item === findMaxKidOfCandies) {
      indexks.push(index);
    }
    return indexks;
  }, []);
  let totalSum = 0;
  findMaxKidOfCandiesIndex.forEach((findMaxKidOfCandiesIndexElement) => {
    kids.forEach((item, index) => {
      if (index !== findMaxKidOfCandiesIndexElement) {
        const dis = findMaxKidOfCandies - item;
        kids[index] += dis;
        totalSum += dis;
      }
    });
  });
  return totalSum;
};

console.log(candies([1, 6]));

// function digitize(n) {

//   return String(n).split('').map(Number);

// }

console.log(digitize(1234));

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(1.4));

function myFirstKata(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else {
    return (a % b) + (b % a);
  }
}

console.log(myFirstKata(3, 5));

function isFlush(cards) {
  const reverseCards = cards.map(card => card.split('').reverse().join(''));
  const firstSuit = reverseCards[0][0];
  const isFlush = reverseCards.every(card => card[0] === firstSuit);
  return isFlush;
}

console.log(isFlush(["AS", "3S", "9c", "KS", "4S"]));

function contamination(text, char) {
  return text.replace(/./g, char);
}

console.log(contamination("abc", "a"));

const htmlspecialchars = (formData) => {
  let modifiedFormData = formData;
  if (formData.includes("<")) {
    modifiedFormData = formData.replace(/</g, "&lt;");
  }
  if (formData.includes(">")) {
    modifiedFormData = modifiedFormData.replace(/>/g, "&gt;");
  }
  if (formData.includes('"')) {
    modifiedFormData = modifiedFormData.replace(/"/g, "&quot;");
  }
  if (formData.includes("&")) {
    modifiedFormData = modifiedFormData.replace(/&/g, "&amp;");
  }
  return modifiedFormData;
};

console.log(htmlspecialchars("<h2>Hello</h2>"));

function roundToNext5(n) {

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old <= 15 || old <= 17) {
    return "drink coke";
  } else if (old === 18 || old <= 20) {
    return "drink beer";
  } else if (old >= 21) {
    return "drink whisky";
  }
}

function findNeedle(haystack) {
  const result = haystack.findIndex((item) => item === "needle");
  return result !== -1 ? `found the needle at position ${result}` : "";
}

console.log(findNeedle([1, 2, 3, 4, "needle"]));

const rps = (pl1, pl2) => {
  if (
    (pl1 === "rock" && pl2 === "rock") ||
    (pl1 === "scissors" && pl2 === "scissors") ||
    (pl1 === "paper" && pl2 === "paper")
  ) {
    return "Draw!";
  }
  if (
    (pl1 === "rock" && pl2 === "scissors") ||
    (pl1 === "scissors" && pl2 === "paper") ||
    (pl1 === "paper" && pl2 === "rock")
  ) {
    return "Player 1 won!";
  }
  if (
    (pl1 === "scissors" && pl2 === "rock") ||
    (pl1 === "paper" && pl2 === "scissors") ||
    (pl1 === "rock" && pl2 === "paper")
  ) {
    return "Player 2 won!";
  }
};

console.log(rps("rock", "paper"));

function ifChuckSaysSo() {
  return Boolean(0);
}

console.log(ifChuckSaysSo());

const min = (num) => {
  return Math.min.apply(null, num);
}

const max = (num) => {
  return Math.max.apply(null, num);
}

function arrayPlusArray(arr1, arr2) {
  let concatedArrays = arr1.concat(arr2);
  return concatedArrays.reduce((acc, item) => acc + item, 0);
}

console.log(arrayPlusArray([1, 2, 3, 4], [4]));

function multiTable(number) {
  const first = `1 * ${number} = ${number}`;
  const second = `2 * ${number} = ${2 * number}`;
  const third = `3 * ${number} = ${3 * number}`;
  const four = `4 * ${number} = ${4 * number}`;
  const five = `5 * ${number} = ${5 * number}`;
  const six = `6 * ${number} = ${6 * number}`;
  const seven = `7 * ${number} = ${7 * number}`;
  const eight = `8 * ${number} = ${8 * number}`;
  const nine = `9 * ${number} = ${9 * number}`;
  const ten = `10 * ${number} = ${10 * number}`;
  return `${first}\n${second}\n${third}\n${four}\n${five}\n${six}\n${seven}\n${eight}\n${nine}\n${ten}`;
}

console.log(multiTable(5));

function getSize(width, height, depth) {
  const volume = width * height * depth;
  const area = [2 * (width * height + width * depth + height * depth)];
  return area.concat(volume);
}

console.log(getSize(4, 2, 6));

const feast = (beast, dish) => {
  let lastBeastChar = beast.slice(-1).toLowerCase();
  let lastDishChar = dish.slice(-1).toLowerCase();
  let firstBeastChar = beast.slice(0, 1).toLowerCase();
  let firstDishChar = dish.slice(0, 1).toLowerCase();
  if (lastBeastChar === lastDishChar && firstBeastChar === firstDishChar) {
    return true;
  } else {
    return false;
  }
};

console.log(feast("great blue heron", "garlic naan"));

const expressionMatter = (a, b, c) => {
  let firstResult = a * (b + c);
  let secondResult = a + b + c;
  let thirdResult = a * b * c;
  let fourResult = (a + b) * c;
  const findMaxNumber = Math.max(firstResult, secondResult, thirdResult, fourResult);
  return findMaxNumber;
};

console.log(expressionMatter(9, 1, 1));

const calculate = (a, o, b) => {
  let calculateResult;
  if (o !== "*" && o !== "/" && o !== "+" && o !== "-" && o !== "w") {
    return null;
  }

  if (o === "w" && b === 0) {
    return null;
  }
  if (o === '/' && b === 0) {
    return null;
  }

  if (o === "+") {
    calculateResult = a + b;
  } else if (o === "-") {
    calculateResult = a - b;
  } else if (o === "/") {
    calculateResult = a / b;
  } else if (o === "*") calculateResult = a * b;
  return calculateResult;
};

const createPhoneNumber = (numbers) => {
  let toStrings = numbers.join("");
  let toFirstNumbers = `(${toStrings.slice(0, 3)})`;
  let toSecondaryNumbers = `${toStrings.slice(3, 6)}-`;
  let toThirdNumbers = toStrings.slice(6, 10);
  let result = `${toFirstNumbers} ${toSecondaryNumbers}${toThirdNumbers}`;
  return result;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

const maskify = (cc) => {
  return `${"#".repeat(Math.max(0, cc.length - 4))}${cc.slice(-4)}`;
};

console.log(maskify("4556364607935616"));

function squareDigits(num) {
  let numString = String(num);
  let result = "";
  for (let i = 0; i < numString.length; i++) {
    let digit = Number(numString[i]);
    result += (digit * digit).toString();
  }
  return Number(result);
}

console.log(squareDigits(9119));

function getCount(str) {
  const letters = "a,e,i,o,u";

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i])) {
      result += str[i];
    }
  }
  return result.length;
}

console.log(getCount("ababababa"));

function betterThanAverage(classPoints, yourPoints) {
  let result = classPoints.reduce((acc, item) => acc + item, 0);
  let finalResult = result / classPoints.length;
  if (finalResult > yourPoints) {
    return false;
  } else {
    return true;
  }
}

console.log(betterThanAverage([2, 3], 5));

const isTriangle = (a, b, c) => {
  if (a + b > c) {
    return true;
  } else {
    return false;
  }
};

console.log(isTriangle(3, 2, 4));

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("Roman"));

function bonusTime(salary, bonus) {
  if (bonus === true) {
    return `\u00A3${salary * 10}`;
  } else {
    return `\u00A3${salary}`;
  }
}

console.log(bonusTime(9900, false));

function checkAlive (health) {
  if (health <= 0) {
    return false
  } else  {
   return true
  }
}

console.log(checkAlive(0));

function getRealFloor(n) {
  let americanFloor = 13;

  if (n < americanFloor && n > 0) {
    return n - 1;
  }
  if (n > americanFloor) {
    return n - 2;
  }
  if (n <= 0) {
    return n;
  }
}

console.log(getRealFloor(-2));
function uefaEuro2016(teams, scores) {
  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  }
  if (scores[1] > scores[0]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  }

  if (scores[0] === scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }
}

console.log(uefaEuro2016(["Portugal", "Iceland"], [0, 0]));

function countPositivesSumNegatives(input) {
  if (input == null  || input.length === 0) {
    return [];
  }
  let positiveNumbers = [];
  let negativeNumbers = [];
  for (let number of input) {
    if (number > 0) {
      positiveNumbers.push(number);
    } else if (number < 0) {
      negativeNumbers.push(number);
    }
  }
  let positiveNumbersElements = positiveNumbers.length;
  let negativeNumbersSum = negativeNumbers.reduce(
    (acc, number) => acc + number,
    0
  );
  return [positiveNumbersElements, negativeNumbersSum];
}

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]));

function findAverage(array) {
  // your code here
  if (array.length === 0) {
    return 0;
  }
  let result = array.reduce((acc, item) => acc + item, 0);
  return result / array.length;
}

console.log(findAverage([1, 2, 3]));

function DNAStrand(dna) {
  const resultString = dna.replace(/[ATGC]/g, (match) => {
    switch (match) {
      case "A":
        return "T";
        break;
      case "T":
        return "A";
        break;
      case "G":
        return "C";
        break;
      case "C":
        return "G";
        break;
    }
  });
  return resultString;
}

console.log(DNAStrand("GTAT"));

var say = function (string1) {
  return function (string2) {
    console.log(string1 + " " + string2);
  };
};

say("Hello")("World");

function findShort(words) {
  let toArr = words.split(" ");
  let result = toArr.reduce((a, c) => (c.length < a.length ? c : a));
  return result.length;
}

console.log(findShort("Hi Roman"));

const abbrevName = (firstName) => {
  const toArray = firstName.split(" ");
  let thefirstName = "";
  for (let arrName of toArray) {
    thefirstName += `.${arrName[0]}`;
  }
  return thefirstName.toUpperCase().slice(1);
};

console.log(abbrevName("sam harris"));

const isReallyNaN = (val) => {
  return val !== val;
};

console.log(isReallyNaN("37"));

const correct = (str) => {
  if (str) {
    str = str.replace(/5/g, "S");
  }
  if (str.includes("0")) {
    str = str.replace(/0/g, "O");
  }
  if (str.includes("1")) {
    str = str.replace(/1/g, "I");
  }

  return str;
};

console.log(correct("501"));

function howManyDalmatians(number) {
  let dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  const respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number > 100
      ? dogs[3]
      : dogs[2];

  return respond;
}

console.log(howManyDalmatians(100));

const uniqueInOrder = (iterable) => {
  let totalResultArray = [];
  let last;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      totalResultArray.push((last = iterable[i]));
    }
  }
  console.log(last, totalResultArray);
  return totalResultArray;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

function countSheeps(sheep) {
  for (let i = sheep.length - 1; i >= 0; i--) {
    if (sheep[i] === undefined) {
      sheep.splice(i, 1);
    }
  }
  for (let i = sheep.length - 1; i >= 0; i--) {
    if (sheep[i] === false) {
      sheep.splice(i, 1);
    }
  }
  for (let i = sheep.length - 1; i >= 0; i--) {
    if (sheep[i] === null) {
      sheep.splice(i, 1);
    }
  }
  return sheep.reduce((acc, sh) => acc + sh, 0);
}

console.log(countSheeps([undefined]));

function reverseLetter(str) {
  //coding and coding..
  let pattern = /[^a-zA]/g;

  let res = str.replace(pattern, '');
  let reverseResult = '';
  for (let i = 0; i < res.length; i += 1) {
    reverseResult = res[i] + reverseResult;
  }
  return reverseResult;
}

console.log(reverseLetter('ab23482948290c'));

function longest(s1, s2) {
  const firstLetters = new Set(s1.split(''));
  const secondaryLetters = new Set(s2.split(''));
  const result = Array.from(firstLetters).concat(Array.from(secondaryLetters)).sort().join('');
  return Array.from((new Set(result))).join('');
}

console.log(longest('xyaabbbccccdefww', 'kljdehfhjkfhfkhahk'));

function addLength(str) {
  let toArr = str.split(' ');
  let wordsString = [];
  for (let i = 0; i < toArr.length; i += 1) {
    wordsString.push(toArr[i] + ' ' + toArr[i].length);
  }
  return wordsString;
}

console.log(addLength('Roman Chaban Igor'));

function generateRange(min, max, step) {
  let res = [];
  for (let i = min; i <= max; i += step) {
    res.push(i);
  }
  return res;
}

console.log(generateRange(2, 10, 2));

const formatMoney = (cash) => {
  return `$${cash.toFixed(2)}`;
};

console.log(formatMoney(3.1));

function solution(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += ' ' + string[i];
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(solution('camelCasing'));

const oddOrEven = (arr) => {
  const calculateArrayElements = arr.reduce((acc, item) => acc + item, 0);
  if (calculateArrayElements == [] || calculateArrayElements.length === 1) {
    return 'even';
  }
  return Math.abs(calculateArrayElements) % 2 === 1 ? 'odd' : 'even';
};

console.log(oddOrEven([1]));

const between = (a, b) => {
  let result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
};

console.log(between(1, 4));

function isPalindrome(x) {
  let palindrome = '';
  for (let i = 0; i < x.length; i++) {
    palindrome = x[i] + palindrome;
  }
  if (x.toLowerCase().includes(palindrome.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('rac'));

const capitals = (word) => {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].includes(word[i].toUpperCase())) {
      result.push(word.indexOf(word[i]));
    }
  }
  return result;
};

console.log(capitals('CodEWaRs'));

function shorter_reverse_longer(a, b) {
  let result = '';
  let reverseWord = '';
  for (let i = 0; i < a.length; i++) {
    reverseWord += a[i] + reverseWord;
  }
  if (a.length > b.length) {
    result = b + reverseWord + a + b;
  }
  return result;
}

console.log(shorter_reverse_longer('first', 'abcde'));

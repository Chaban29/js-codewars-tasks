"use strict";

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


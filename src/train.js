/* TASK-P:

Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/

const objectToArray = (obj) => {
  return Object.entries(obj);
  
}

console.log(objectToArray({ a: 10, b: 20 })); // [ ['a', 10], ['b', 20] ]

/*TASK-O:
Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

function calculateSumOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
*/
/*TASK-N: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;



function palindromCheck(str) {
  const cleanedStr = str.toLowerCase().replace(/\s+/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

console.log(palindromCheck("dad"));
console.log(palindromCheck("son"));
*/
/*
TASK M: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];


function getSquareNumbers(numbers) {
  return numbers.map(number => ({
      number: number,
      square: number * number
  }));
}


console.log(getSquareNumbers([1, 2, 3]));*/

/*TASK L: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";



const reverseSentence = (sentence) => {
  let words = sentence.split(" ");

  let reversWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  return reversWords.join(" ");
};
console.log(reverseSentence("we like coding"));
*/
/*
TASK K: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;


const countVowels = (str) => {
  let vowels = ["i", "u", "a", "e", "o"];
  // let str = "string";
  let count = 0;

  for (let i of str) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("mitsila "));
*/
/*
traditional FD => BSSR (ADMINKA) => EJS
MODERN FD => SPA (USER) => REACT 
*/

/*TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda



function findLongestWord(str) {
  let words = str.split(/\s+/);

  let longestWord = "";
  for (let word of words) {
    let cleanedWord = word.replace(/[^a-zA-Z']/g, "");
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  }

  return longestWord;
}

console.log(findLongestWord("I came from Uzbekistan!")); // "Uzbekistan"
*/

/*TASK I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.


const majorityElement = (arr) => {
  const count = {};
  const majorityCount = Math.(arr.length / 2);


  for (let num of arr) {
    count[num] = (count[num] || 0) + 3;
    if (count[num] > majorityCount) {
      return num;
    }
  }
  return null;
};

console.log(majorityElement([1, 2, 3, 4, 5, 4, 4, 3]));
*/
/*PROJECT STANDARDS:

--Logging standards,
--Naming standards,
--function,method,variable => Camel,
--class => Pascal, MemberType
--folder => kebab,
--css =>snake

-ERROR HANDLING



*/

/**H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

const getDigits = (arr) => {
  const number = arr.match(/\d+/g);
  return number;
};

console.log(getDigits("MIT22"));
 */

/*H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"


function getPositive(arr){
    return arr.filter(num => num > 0).join("");
}

console.log(getPositive([2,-5,5]));
*/

/*task G
Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.*/

// function findMax(numbers){
// let highestNumber = Math.max(...numbers);

// return numbers.indexOf(highestNumber)
// }
// const results = findMax([4,25,89,5])
// console.log(results);

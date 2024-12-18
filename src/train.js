/*TASK I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.
*/

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

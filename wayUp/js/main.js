// // 1.
// let cityInfo;
// let cityName = "Minsk";
// let country = "Belarus";
// let numPopulation = 9000000;
// let cityStadium = true;
// cityInfo = `${cityName} ${country} ${numPopulation} ${cityStadium}`;
// console.log(cityInfo);



// // 1.1 по-другому
// let cityInfo;
// let cityName = "Minsk";
// let country = "Belarus";
// let numPopulation = 9000000;
// let cityStadium = true;
// cityInfo = cityName + " " + country + " " + numPopulation + " " + cityStadium;
// console.log(cityInfo);



// // 2.
// let hight = 40;
// let width = 70;
// let area = hight * width;
// console.log(area);




// // 3.

// let time = 2;
// let speedOfFirst = 95;
// let speedOfSecond = 114;
// let result = (speedOfFirst + speedOfSecond) * time;
// console.log(result);



// // 4. if
// const randomNumber = Math.floor(Math.random() * 100);
// if (randomNumber < 20) {
//     console.log("randomNumber меньше 20")
// } else if (randomNumber > 50) {
//     console.log("randomNumber больше 50")
// } else {
//     console.log("randomNumber больше 20, и меньше 50")
// }

// // 5. switch case
// const randomNumber = Math.floor(Math.random() * 100);
// let a = randomNumber < 20;
// let b = randomNumber > 50;
// // console.log(randomNumber);
// // console.log(a);
// // console.log(b);
// switch (true) {
//     case a:
//         console.log("randomNumber меньше 20");
//         break;
//     case b:
//         console.log("randomNumber больше 50");
//         break;
//     default:
//         console.log("randomNumber больше 20, и меньше 50");
//         break;
// }





// //Домашнее заданиие ко второму уроку!!!!!!
// // 1.
// for (let i = 10; i <= 50; i += 2) {
//     console.log(i);
// }

// // 2.
// let mySelf = {
//     name: "Siarhei",
//     surname: "Spivak",
//     age: 28,
//     hasDomesticAnimal: true
// }
// console.log(mySelf);






// // 3.
// const array = [
//     'я в Симбирск,',
//     'в трактире.',
//     'с утра',
//     'В ту же ночь',
//     'Я остановился',
//     'для закупки',
//     'что и было поручено Савельичу.',
//     'приехал',
//     'где должен был',
//     'нужных вещей',
//     'отправился по лавкам.',
//     'пробыть сутки',
//     'Савельич'
// ]

// let a = array[3];
// let b = array[7];
// let c = array[0];
// let d = array[8];
// let e = array[11];
// let f = array[5];
// let g = array[9];
// let h = array[6];
// let i = array[4];
// let j = array[1];
// let k = array[12];
// let l = array[2];
// let m = array[10];


// let result = a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g + " " + h + " " + i + " " + j + " " + k + " " + l + " " + m;
// console.log(result);

// или

// let result = `${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}`;
// console.log(result);



// // 4.
// function allNames(firstName, lastName) {

//     const fullName = `${firstName} ${lastName}`;
//     console.log(fullName);
// }


// allNames('Siarhei', 'Spivak');



// // 5.
// let i = 21;
// while (i <= 67) {
//     i += 2;
//     console.log(i);
// }
"use strict"
//Вариант 1
console.log('35' + - "22");
//Вариант 2
console.log('35' * "22");
//верно
//Вариант 3
//console.log('558' > 22++);
//Вариант 4
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
//Вариант 5
console.log(!false && 11 || 18 &&!'');
//Вариант 6
let name = 0;
console.log(name ?? "Без имени");
//IF ELSE
//Вариант 1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант 2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант 3
let message = (92 > '11' && 58<100) ? 'Истина!' : 'Ложь!';
console.log(message);
//Вариант 4
if (0) {
	console.log('Ложь!');
	} else if (" ") {
		console.log('Истина!');
	}
//Цикли FOR и WHILE
//Задача № 1
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}
let number = 1;
	do {
		console.log(number);
		number++;
	} while (number < 6);
	for (let num = 1; num < 6; num++) {
		console.log(num);
	}
//Задача № 2
let numb = 8;
	while (numb) {
		console.log(numb);
		numb--;
	}

//Задача № 3
let numbe = 0;
	while (numbe < 3) {
		console.log(`Число: ${numbe}`)
		numbe++
	}
//Задача № 4
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size==1) {
			break firstFor;
		}
		console.log(size);
	}
} 
//Числа
//Задача № 1
let sourceNum = 1.005 + Number.EPSILON
let numOne = Math.round(sourceNum * 100) / (100);
console.log(numOne);
//Задача № 2
//получить число 135.58 из строки
let value = parseFloat("135.58px");
console.log(value);
//Задача № 3
//Построить верное условное ветвление
let val = 58 + "Фрилансер";
if (isNaN(val)) {
	console.log('Результат выражения NAN');
}
//Задача № 4
//найти максимальное число из 10, 58, 39, -150,0
console.log(Math.max(10,58,39,-150,0))
//Задача № 5
//округлить чило 58.858 до числа 58
console.log(Math.floor(58.858))
//Строки
//Задача № 1
//Верна ли запись?
let fls = "Фрилансер";
let text = `Привет! Я ${fls}`;
console.log(text);
//Задача № 2
//Получить символ "н" строки:
let word = "фрилансер";
let fiveSymbol = word[5];
console.log(fiveSymbol);
//Задача № 3
// Верно? (не верно)
let texts = 123 + "456";
//ожидаем 579
console.log(texts);
//Задача № 4
//получить строку в верхнем регистре
let wordOne = "фрилансер";
console.log(wordOne.toUpperCase());
//Задача № 5
//Получить подстроку "лан" строки:
let letters = "фрилансер";
console.log(letters.slice(3,6));
//Задача № 6
//true или  false
let letter = "фрилансер";
console.log(letter.includes('лан',4));
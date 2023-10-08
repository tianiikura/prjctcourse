/*task 1*/
/*1. Напишіть функцію яка буде використовуватись для сортування масиву фільмів
Функція буде приймати два аргумента:
властивість за якою треба посортувати
опцію напрямку сортування (зростання чи спадання)*/

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
	if (direction === ">") {
		return (a, b) => {
			return a[property] > b[property] ? 1 : -1;
	  	};
	} else {
		return (a, b) => {
			return a[property] < b[property] ? 1 : -1;
	  	};
	}
}

/*task 2*/
function someFunction (name) {// тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль
	console.log(`I'm ${name} and do sm work with result`);
}

function slower(func, seconds) {
	return function (...args) {
		let context = this;
		console.log(`Chill out, you will get you result in ${seconds} seconds`);
		setTimeout(function () { 
			return func.call(context, ...args);
		}, seconds*1000);
	}
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення

slowedSomeFunction("someFunction") // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds
//...через 5 секунд виведе результат роботи 'someFunction'
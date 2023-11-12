"use strict";
//task 1
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    })
    
    promise1.then(res => {
    console.log(res)
    })
    
    console.log('end');

//   1. start, 1, end, 2
//    Всі операції виконуються почергово: спочатку іде виклик console.log('start') і виводиться 'start'; потім відпрацьовує callback функція передана в проміс і виводиться console.log(1), а відображення обробки resolve іде в кінець черги в eventloop і чекає виклику функції переданої через then; потім виводиться console.log('end'); потім вже console.log(res), тобто "2".
    


//task 2
Promise.resolve(1)
		.then((x) => x + 1)
		.then((x) => { throw new Error('My Error') })
		.catch(() => 1)
		.then((x) => x + 1)
		.then((x) => console.log(x))
		.catch(console.error)

// 2. Кожен then створює новий проміс і вони послідовно оброблюються.(1+1), 'My Error',1, 2, виводиться 2. Останній catch не відпрацьовує, тому що немає нової помилки. Код післ .catch(() => 1) виконується, тому що в данному catch проміс переходить із статусу reject у resolve і продовжує послідовне виконання.

//task 3
const promise = new Promise(res => res(2));
	promise.then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .finally(v => {
	        console.log(v);
	        return v * 2;
	    })
	    .then(v => {
	        console.log(v);
	    });

    // 3. 2, 4, undefined, 8
    // Кожен then створює новий проміс і вони послідовно оброблюються: виводиться 2, потім 2*2, потім виводиться 4, 4*2, у finally виводиться undefined, оскільки в даний метод не отримує аргументів, а його результат ігнорується в загальному контексті виконання промісів. В кінці виводиться 8.
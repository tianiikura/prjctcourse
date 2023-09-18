/*task 1 */

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = [];

for (let i = 0; i < userNames.length; i ++) {
    let names = userNames[i].split(" ");
    let initialLetters = '';
    for (word of names) {
        initialLetters += word.slice(0,1) + '.';
    }
    initials.push(initialLetters);
}
initials.sort();
console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."] */
  
/*task 2 */

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];
let vowels = ["А", "И", "У", "Е", "О", "І", "Я", "Ю", "Є"];

userNames.map(name => {
    const firstLetter = name.toUpperCase()[0];
    if (vowels.includes(firstLetter)) {
        filteredNames.push(name);
    }
  });
console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена'] * /
*/

  /*task 3 */
const resultsArray = [1, 2, [3, [4]]];
let productOfArray= 1;
let commonArray = resultsArray.flat(Infinity); // [1, 2, 3, 4]
for (let i=0; i<commonArray.length; i++){
    productOfArray *= commonArray[i];
}

console.log(productOfArray); // 24*/

/*task 4 */
// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
    
    function optimizer(data) {
        let newData = {};
        let dataArray = Object.entries(data);
        dataArray.forEach(([key, value]) => {
            let lowercaseKey = key.toLowerCase();
            let roundedValue = Number(value).toFixed(2);
            newData[lowercaseKey] = roundedValue;
        });
        return Object.fromEntries(Object.entries(updatedData));
    };
    
    let updatedPriceData = optimizer(priceData);
    
    console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
    */

/*task 5 */

function durationBetweenDates (startDate, endDate, dimension) {
    let startDateTime = new Date(startDate);
    let endDateTime = new Date(endDate);
   
    if (startDateTime > endDateTime) {
        [startDateTime, endDateTime] = [endDateTime, startDateTime];
    }

    let timePeriod = '';
    if (dimension === "days") {
    const diffInMs = endDateTime - startDateTime;
    const days = Math.floor(diffInMs / (24 * 60 * 60 * 1000));
    timePeriod = `${days} days`;
    } else if (dimension === "hours") {
    const diffInHours = Math.floor((endDateTime - startDateTime) / (60 * 60 * 1000));
    timePeriod = `${diffInHours} hours`;
    } else if (dimension === "minutes") {
    const diffInMinutes = Math.floor((endDateTime - startDateTime) / (60 * 1000));
    timePeriod = `${diffInMinutes} minutes`;
    } else if (dimension === "seconds") {
    const diffInSeconds = Math.floor((endDateTime - startDateTime) / 1000);
    timePeriod = `${diffInSeconds} seconds`;
    } else {
    return "Invalid dimension. Please choose from the list.";
    }
    
    return timePeriod;
}
  
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // Returns '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // Returns '362 days'
  
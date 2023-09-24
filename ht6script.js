/*task 1 */

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

initials = userNames.map(
    fullName => fullName.split(" ").map(name => name.slice(0,1) + '.').join("")
);
initials.sort();
console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."] */
  
/*task 2 */

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];
let vowels = ["А", "И", "У", "Е", "О", "І", "Я", "Ю", "Є"];

userNames.forEach((name) => {
    const firstLetter = name.toUpperCase()[0];
    if (vowels.includes(firstLetter)) {
        filteredNames.push(name);
    }
});

//filteredNames =userNames.filter(name => vowels.includes(name.toUpperCase()[0]));

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
/* */

  /*task 3 */
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).reduce((accumulator, currentValue) => accumulator * currentValue, 1);

/*task 4 */
// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
    };
    
function optimizer(data) {
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => {
            return [key.toLowerCase(), Number(value).toFixed(2)];
        })
    );
};
    
let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
/* */

/*task 5 */

function durationBetweenDates (startDate, endDate, dimension) {
    let startDateTime = new Date(startDate);
    let endDateTime = new Date(endDate);
    let periodDuration;
    
    switch (dimension) {
    case "days":
        periodDuration = 24 * 60 * 60 * 1000;
        break;
    case "hours":
        periodDuration = 60 * 60 * 1000;
        break;
    case "minutes":
        periodDuration = 60 * 1000;
        break;
    case "seconds":
        periodDuration = 1000;
        break;
    default:
        return "Invalid dimension. Please choose from the list.";
    }

    let datesDifference = Math.abs(endDateTime - startDateTime);
    let periodAmount = Math.floor(datesDifference / periodDuration);

    return `${periodAmount} ${dimension}`;
};
  
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // Returns '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // Returns '362 days'
  
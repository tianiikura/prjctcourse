/* task 1*/

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    const filteredNamesSet = new Set();
  
    array.forEach(name => {
      filteredNamesSet.add(name);
    });
  
    const filteredNames = Array.from(filteredNamesSet);
    return filteredNames;
  }
  
  const filteredUserNames = filterUnique(userNames);
  
  console.log(filteredUserNames);  // Output: ['Петро', 'John', 'Емма', 'Марта', 'Mike', 'Яна', 'Mary', 'Василь', 'Антон', 'Олена']

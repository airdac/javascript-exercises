const removeFromArray = function() {
    const array = arguments[0];
    const argumentsToRemove = Array.from(arguments).slice(1);
    return array.filter((element) => !argumentsToRemove.includes(element));
};

// console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;

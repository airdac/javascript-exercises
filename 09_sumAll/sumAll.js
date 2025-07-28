const sumAll = function(first, last) {
    if ((typeof first != 'number') || (typeof last != 'number')) {
        return "ERROR";
    } else if (!Number.isInteger(first) || !Number.isInteger(last)) {
        return "ERROR";
    } else if (first < 0 || last < 0) {
        return 'ERROR';
    }
    const max = Math.max(first, last);
    const min = Math.min(first, last) - 1;
    console.log(max);
    console.log(typeof max);
    return (max * (max + 1)) / 2 - (min * (min + 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;

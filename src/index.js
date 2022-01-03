module.exports = function reverse(n) {
    let nArray = [...n.toString()].reverse();
    let convertedArray = [];
    nArray.forEach((value) => convertedArray.push(parseInt(value)));
    return parseInt(convertedArray.join(""));
};

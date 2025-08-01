const reverseString = function(str) {
    let outStr = '';
    for(let i = str.length-1 ;i >= 0; i --)
    {
        outStr += str[i];
    }

    return outStr.toString();
};

// Do not edit below this line
module.exports = reverseString;

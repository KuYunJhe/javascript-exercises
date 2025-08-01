const repeatString = function(str, number = 0) {
    if(number < 0)
    {
        return "ERROR";
    }
    let sumStr = "";
    for(i = 0; i < number; i++)
    {
        sumStr = sumStr + str;
    }

    return sumStr; 
};

// Do not edit below this line
module.exports = repeatString;

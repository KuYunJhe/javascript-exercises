const removeFromArray = function(array_1 = [],...array_2) {
    for(let i = 0; i < array_1.length; i++)
    {
        for(let j = 0 ; j < array_2.length ; j++)
        {
            if(array_1[i] === array_2[j])
            {
                array_1.splice(i,1);
                i = 0;
            }
        }
    }
    return array_1;
};

// Do not edit below this line
module.exports = removeFromArray;

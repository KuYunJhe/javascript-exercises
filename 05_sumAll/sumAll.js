const sumAll = function(star,end) {
    let sum = 0;
    if((typeof star == "number") && (typeof end == "number"))
    {
     if(star >=0  && end >=0 &&　star%1 === 0 && end %1 ===0) 
        {
            let i = star;
            let j = end;
            if(star > end)
            {
                i = end;
                j = star;
                console.log(`i = ${i},j = ${j}`)
            }
            while(i <= j)
            {
                sum = sum + i;
                i++;
            }
            return sum;
        }
        else{
            return "ERROR"
        }
    }
    else{
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;

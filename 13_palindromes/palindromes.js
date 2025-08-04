const palindromes = function (s) {

    s = s.replace(/[^a-zA-Z\d]/g, '').toLowerCase()
    let arr = s.split("")
    let arr_r = arr.slice().reverse()

    console.log(arr)
    console.log(arr_r)

    return arr.every((value, index) => value === arr_r[index]);

    // let arr = s.split(" ").join().split(",").join()
    // console.log(arr)
};

// Do not edit below this line
module.exports = palindromes;



const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

const findTheOldest = function (arr) {
    let result_index = arr.reduce((max, item, index) => {

        let nowYear = new Date().getFullYear();

        let age = 0;
        if (item.yearOfDeath === undefined) {
            age = nowYear - item.yearOfBirth;
        }
        else {
            age = item.yearOfDeath - item.yearOfBirth;
        }


        if (age > max[0]) {
            max[0] = age
            max[1] = index
        }

        // console.log(item.name)
        // console.log(`max = ${max}`)
        // console.log(`age = ${age}`)
        return max;
    }, [0, 0])

    // console.log(result_index[1])

    return arr[result_index[1]]

};

console.log(findTheOldest(people).name)



// Do not edit below this line
module.exports = findTheOldest;

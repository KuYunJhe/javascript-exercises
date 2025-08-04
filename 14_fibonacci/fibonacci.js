const fibonacci = function (num) {
    num = Number(num);

    let pre = 1;
    let cur = 1;
    let sum = 0;
    if (num == 1) {
        return pre;
    }
    else if (num == 2) {
        return cur;
    }
    else if (num == 0) {
        return 0;
    }
    else if (num < 0) {
        return "OOPS"
    }
    else {
        for (let i = 3; i <= num; i++) {
            cur = pre + cur;
            pre = cur - pre;
        }
        return cur;
    }

};

// Do not edit below this line
module.exports = fibonacci;

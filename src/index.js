exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        return array.reduce(function (a, b) {
            return Math.min(a, b);
        }, 0);
    }
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        return array.reduce(function (a, b) {
            return Math.max(a, b);
        }, 0);
    }
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let sum = array.reduce(function (a, b) {
            return a + b;
        });
        return sum / array.length;
    }
};

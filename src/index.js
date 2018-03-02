module.exports = function getZerosCount(number, base) {
    var p = [];
    var a = [];
    var sa = [];
    var wholeBase = base;
    var nextPrime = 2;
    while (wholeBase > 1) {
        while (wholeBase % nextPrime != 0) {
            nextPrime++;
        }
        p.push(nextPrime);
        sa.push(0);
        var pow = 0;
        while (wholeBase % nextPrime == 0) {
            pow++;
            wholeBase /= nextPrime;
        }
        a.push(pow);
    }

    for (var i = 2; i <= number; ++i) {
        var tmp = i;
        for (var j = 0; j < p.length; ++j) {
            while (tmp % p[j] == 0) {
                tmp /= p[j];
                sa[j]++;
            }
        }
    }

    var zeroNumber = Math.floor(sa[0] / a[0]);
    for (var i = 0; i < a.length; i++) {
        zeroNumber = Math.min(zeroNumber, Math.floor(sa[i] / a[i]));
    }

    return zeroNumber;
};
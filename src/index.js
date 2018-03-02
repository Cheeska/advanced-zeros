module.exports = function getZerosCount(number, base) {
    var allPrimes = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107,
        109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
        233, 239, 241, 251, 257
    ];
    var p = [];
    var a = [];
    var sa = [];
    var wholeBase = base;
    var nextPrimeIndex = 0;
    while (wholeBase > 1) {
        while (wholeBase % allPrimes[nextPrimeIndex] != 0) {
            nextPrimeIndex++;
        }
        p.push(allPrimes[nextPrimeIndex]);
        sa.push(0);
        var pow = 0;
        while (wholeBase % allPrimes[nextPrimeIndex] == 0) {
            pow++;
            wholeBase /= allPrimes[nextPrimeIndex];
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
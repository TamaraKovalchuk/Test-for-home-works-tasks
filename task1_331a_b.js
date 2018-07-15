var exports = (module.exports = {});
exports.sumOfSquares = function (n, oneOrAll) {  //true - one; false - all
    let x, y, z;
    let result = [];
    let m = Math.floor(Math.sqrt(n));
    for (x = 0; x <= m; x++) {
        for (y = x; y <= m; y++) {
            for (z = y; z<= m; z++) {
                if(Math.pow(x,2)+Math.pow(y,2)+Math.pow(z,2) === n){
                    result = [...result, {
                        x: x,
                        y: y,
                        z: z
                    }];
                    // console.log(x, y, z);
                    if (oneOrAll) {
                        return result;
                    }

                }
            }
        }
    }
    return result;
};
exports.sumOfSquares(25, true);
var exports = (module.exports = {});
exports.powerOf2 = (n) => {
    let k = 1;
    while ( k <= n) {
        k <<= 1;
    }
    return k;
};

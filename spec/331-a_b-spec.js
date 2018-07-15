var app = require('../task1_331a_b.js');
describe('Addition', function() {
    it('The function finds sum of squares', function() {
        var value = app.sumOfSquares(25, true)[0];
        expect(value.x).toBe(0);
        expect(value.y).toBe(0);
        expect(value.z).toBe(5);
    });
});
describe('Allvalues', function() {
    it('The function finds sum of squares', function() {
        var value = app.sumOfSquares(25, false)[1];
        expect(value.x).toBe(0);
        expect(value.y).toBe(3);
        expect(value.z).toBe(4);
    });
});
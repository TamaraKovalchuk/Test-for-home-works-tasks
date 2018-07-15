var app = require('../task1_108.js');
describe('Addition', function() {
    it('The function finds the 2 in power of R', function() {
        var value = app.powerOf2(12);
        expect(value).toBe(16);
    });
});
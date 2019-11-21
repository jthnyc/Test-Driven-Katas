const { expect } = require('chai');
const wrap = require('./wrap');

// Type of string
// Length of each line is not longer than the column number

describe('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
      expect(wrap("", 10)).to.equal("");
    });

    it('The type of text should be a string', () => {
        const test = wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 15)
        expect(typeof test).to.equal("string");
    });

    

    it('Length of each line is not longer than the column number', () => {
        const test = wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 15)
        const testAsArray = test.split('\n')
        const lineLength = testAsArray.every(line => line.length < 15)
        expect(lineLength).to.equal(true);
    });

});
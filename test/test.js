var assert = require('assert');
var deepID = require('../');

describe('DeepID.createID', function() {
    it('should create an ID given a single argument', function() {
        var value = deepID.createID(0);
        var expected = '0';
        assert.equal(expected, value);
    });

    it('should create an ID given two arguments', function() {
        var value = deepID.createID(0, 0);
        var expected = '0.0';
        assert.equal(expected, value);
    });

    it('should create an ID given many arguments', function() {
        var value = deepID.createID(0, 0, 0, 0, 0);
        var expected = '0.0.0.0.0';
        assert.equal(expected, value);
    });
});

describe('DeepID.getPreviousID', function() {
    it('should decrement number at depth', function() {
        var value = deepID.getPreviousID('1.0', 0);
        var expected = '0.0';
        assert.equal(expected, value);
    });

    it('should decrement number at depth', function() {
        var value = deepID.getPreviousID('1.1', 1);
        var expected = '1.0';
        assert.equal(expected, value);
    });

    it('should not allow negative values', function() {
        assert.throws(function() {
            deepID.getPreviousID('0.0', 0);
        });
    });

    it('should set numbers below depth to 0', function() {
        var value = deepID.getPreviousID('1.1', 0);
        var expected = '0.0';
        assert.equal(expected, value);
    });

    it('should set numbers below depth to 0', function() {
        var value = deepID.getPreviousID('0.1.2.3', 2);
        var expected = '0.1.1.0';
        assert.equal(expected, value);
    });
});

describe('DeepID.getNextID', function() {
    it('should increment number at depth', function() {
        var value = deepID.getNextID('0.0', 0);
        var expected = '1.0';
        assert.equal(expected, value);
    });

    it('should increment number at depth', function() {
        var value = deepID.getNextID('0.0', 1);
        var expected = '0.1';
        assert.equal(expected, value);
    });

    it('should set numbers below depth to 0', function() {
        var value = deepID.getNextID('0.1', 0);
        var expected = '1.0';
        assert.equal(expected, value);
    });

    it('should set numbers below depth to 0', function() {
        var value = deepID.getNextID('0.1.2', 0);
        var expected = '1.0.0';
        assert.equal(expected, value);
    });

    it('should set numbers below depth to 0', function() {
        var value = deepID.getNextID('0.1.2.3.4', 2);
        var expected = '0.1.3.0.0';
        assert.equal(expected, value);
    });
});

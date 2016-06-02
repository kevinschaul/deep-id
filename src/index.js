'use strict';

var SEPARATOR = '.';

var DeepID = {
    createID: function() {
        return Array.from(arguments)
            .reduce(function(p, v, i, l) {
                return p + v + (i === l.length - 1 ? '' : SEPARATOR);
            }, '');
    },

    getPreviousID: function(id, depth) {
        var levels = id.split(SEPARATOR);

        // Increment level at given depth
        --levels[depth];

        // Ensure new depth is not less than 0
        if (levels[depth] < 0) {
            throw Error;
        }

        // Reset sublevels
        var i;
        for (i = depth + 1; i < levels.length; i++) {
            levels[i] = 0;
        }

        return levels.join(SEPARATOR);
    },

    getNextID: function(id, depth) {
        var levels = id.split(SEPARATOR);

        // Increment level at given depth
        ++levels[depth];

        // Reset sublevels
        var i;
        for (i = depth + 1; i < levels.length; i++) {
            levels[i] = 0;
        }

        return levels.join(SEPARATOR);
    }
};

module.exports = DeepID;

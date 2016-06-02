# DeepID

Ordered multi-level ID system, inspired by React.

Useful for linear stories with optional branches, such as [The Waypoint](https://www.washingtonpost.com/graphics/world/lesbos/).

Here’s a janky diagram of how IDs work and available paths between them:

    0.0
     |
     |
     |
    1.0
     |
     |
     |
    2.0 --- 2.1 --- 2.2
     |     /     __ /
     |   /  __ /
     | /__/
    3.0
     |
     |
     |
    4.0 --- 4.1
     |     /
     |   /
     | /
    5.0

See [test/test.js](test/test.js) for detailed intended behavior.

# Usage

var deepID = require('deep-id');

var id = deepID.createId(0, 0);
deepID.getNextID(1);


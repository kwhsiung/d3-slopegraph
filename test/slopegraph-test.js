var tape = require("tape"),
    slopegraph = require("../");

tape("slopegraph() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(slopegraph.slopegraph(), 42);
  test.end();
});

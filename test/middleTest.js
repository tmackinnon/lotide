const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  
  it("returns ['3'] as the middle value for [1, '3', '3']", () => {
    assert.deepEqual(middle([1, '3', '3']), ['3']);
  });
  
  it("returns [] as the middle value for ['1']", () => {
    assert.deepEqual(middle(['1']), []);
  });

  it("returns [4, 5] as the middle value for [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });

  it("ensures original array was not altered when function is run", () => {
    const words = ["hello", "world", "lighthouse"];
    middle(words);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});
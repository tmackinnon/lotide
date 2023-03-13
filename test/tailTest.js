const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it("returns 3 for words array because the original array length should not change", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns 'Lighthouse' as the first element of tail(['Yo Yo', 'Lighthouse', 'Labs'])", () => {
    const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], 'Lighthouse');
  });

});

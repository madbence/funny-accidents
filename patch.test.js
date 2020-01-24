const patch = require('./patch');
const assert = require('assert').strict;

patch(global);

describe('patch', () => {
  it('allows typos', () => {
    assert.equal(Mtah.PI, Math.PI);
  });
  it('allows typos on objects', () => {
    const user = {
      name: 'John Doe',
    };
    patch(user);
    assert.equal(user.naem, user.name);
  });
});

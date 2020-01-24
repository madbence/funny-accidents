const distance = require('js-levenshtein');

module.exports = function patch(target) {
  const old = Object.getPrototypeOf(target);

  const p = new Proxy(target, {
    // has(target, name) {
    //   const names = Object.getOwnPropertyNames(target);
    //   for (const candidate of names) {
    //     if (distance(candidate, name) < 3) return true
    //   }
    //   return false;
    // },
    get(target, name) {
      if (typeof name !== 'string') return;

      const names = Object.getOwnPropertyNames(target);
      for (const candidate of names) {
        if (distance(candidate, name) < 3) return target[candidate];
      }

      throw new ReferenceError('haha!');
    },
  });

  Object.setPrototypeOf(target, p);

  return function unpatch() {
    Object.setPrototypeOf(target, old);
  }
};

# funny-accidents

> We don't make mistakes, only happy little accidents

inspired by [Jake Archibald's tweet][tweet], and by my own [old pet project][jadeite],
when i was kinda obsessed with the syntax of [pug] (it was called jade back then)

## install

install [`funny-accidents`][pkg] with [`npm`][npm] or [`yarn`][yarn]:

```sh
$ npm install funny-accidents
# or
$ yarn add funny-accidents
```

## usage

allow happy little accidents in the global scope:

```js
import 'funny-accidents';

consloe.log('hello');
cnosole.log('ehlo');
consoel.log('hola');
```

allow happy little mistakes on a specific object:

```js
import patch from 'funny-accidents/patch'

const user = {
  name: 'John Doe',
};

patch(user);

console.log(user.naem);
```

## how does this work?

it's using a [`Proxy`][proxy] to catch every property access on an object, and it selects the most appropriate existing one based on its [Levenshtein distance][levenshtein]. then it overrides `__proto__` of `global`.

## should i use this?

no.

## license

MIT

[levenshtein]: https://en.wikipedia.org/wiki/Levenshtein_distance
[pkg]: https://www.npmjs.com/package/funny-accidents
[npm]: https://npmjs.com
[yarn]: https://yarnpkg.com
[proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
[pug]: https://pugjs.org/api/getting-started.html
[jadeite]: https://github.com/madbence/node-jadeite
[tweet]: https://twitter.com/jaffathecake/status/1220272251909615616

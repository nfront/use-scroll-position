[![Build Status](https://travis-ci.com/nfront/use-scroll-position.svg?branch=master)](https://travis-ci.org/nfront/use-scroll-position) [![Greenkeeper badge](https://badges.greenkeeper.io/nfront/use-scroll-position.svg)](https://greenkeeper.io/) [![Maintainability](https://api.codeclimate.com/v1/badges/9b92debd461a76f384d6/maintainability)](https://codeclimate.com/github/nfront/use-scroll-position/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/9b92debd461a76f384d6/test_coverage)](https://codeclimate.com/github/nfront/use-scroll-position/test_coverage) [![npm bundle size](https://badgen.net/bundlephobia/min/@nfront/use-scroll-position)](https://bundlephobia.com/result?p=@nfront/use-scroll-position) [![npm (scoped)](https://img.shields.io/npm/v/@nfront/use-scroll-position.svg)](https://www.npmjs.com/package/@nfront/use-scroll-position)

[![Twitter URL](https://img.shields.io/twitter/url/https/github.com/nfront/use-scroll-position.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20this%20npm%20package:&url=https%3A%2F%2Fgithub.com%2Fnfront%2Fuse-scroll-position) [![Twitter Follow](https://img.shields.io/twitter/follow/magnusriga.svg?label=Follow&style=social)](https://twitter.com/intent/follow?screen_name=magnusriga)

# @nfront/use-scroll-position

A React hook that returns the browser window's X and Y scroll position. Uses a modern and stable Observable implementation.

## Install

`npm install --save @nfront/use-scroll-position`

or:

`yarn add @nfront/use-scroll-position`

## Why to use

use-scroll-position returns the scroll position of the browser window, using a modern, stable and performant implementation.

Unlike other packages with similar purpose, this package relies on the robust and modern reactive library [RxJS](https://rxjs-dev.firebaseapp.com/).

This hook only updates state when a scroll event happens, and does so at the interval specifified with the `throttle` variable (see below).

## How to use

Syntax:

```javascript
const scrollPosition = useScrollPosition( throttle );
```

Full example of using the hook in a React component:

```javascript
import useScrollPosition from 'use-scroll-position';
const MyComponent = props => {
  const scrollPosition = useScrollPosition(100);
  console.log(scrollPosition);
};
```

## Options

- `throttle`: (integer) Pass in the ms value you want the scroll-checker to throttle for. For instance, if you pass in 1000, the hook will only produce scroll values every 1 seconds. We recommend 100 for normal usage, which will produce scroll values every 100th millisecond.
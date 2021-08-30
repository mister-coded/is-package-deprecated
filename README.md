# is-package-deprecated

<p align="center">
  <img src="https://img.shields.io/npm/dw/is-package-deprecated?style=for-the-badge">
  <img src="https://img.shields.io/npm/v/is-package-deprecated?style=for-the-badge">
  <img src="https://img.shields.io/github/forks/mister-coded/is-package-deprecated?style=for-the-badge">
  <img src="https://img.shields.io/github/stars/mister-coded/is-package-deprecated?style=for-the-badge">
</p>

> Check if a package is deprecated

## Install

Using [npm](https://npmjs.com)

```
$ npm install is-package-deprecated
```

Using [yarn](https://yarnpkg.com/en/)

```
$ yarn add is-package-deprecated
```

## Usage

```js
const isPackageDeprecated = require('is-package-deprecated');

(async () => {

    // Check if a package is deprecated
    console.log(await isPackageDeprecated("javascript"));
    //=> true

    // Check if a package version is deprecated
    console.log(await isPackageDeprecated("axios", { version: "0.1.0" }));
    //=> true
})();
```
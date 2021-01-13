# cli-sac

Parse cli key value pairs

## Installation

[`npm i cli-sac`](https://www.npmjs.com/package/cli-sac)

## Usage


```js
import { parseCli } from "parse-cli";

parseCli(); // returns obect
```

### Example

```
node examples/example.js favouriteColor=red age=120
```

### Output

```js
{ favouriteColor: 'red', age: '120' }
```

## About

### Changelog

[Changelog](./changelog.md)


### License

[CC0](./license.txt)


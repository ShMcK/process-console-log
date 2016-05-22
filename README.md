# Process Logger

Override `console.log` in a Node.js child process to return properly typed output.


## Problem

Types are difficult to determine from a child process output.

`console.log('12', 12);` -> `12 12`

Is the output a 'string' or a 'number'?

`console.log({a: {b: { c: {d: 1}}}})` -> '[object Object]'

What's inside the object?

## Solution

```js
import {initProcessLogger} from 'process-logger';
initProcessLogger();// overrides window.console.log
```

Parse the output.

```js
import {parser} from './process-logger';

parser(output1); // logs: '12' 12
parser(output2); // logs: {a: {b: {c: {d: 1}}}}
```

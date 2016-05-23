# oh

Turns an object into a hash, e.g:

```javascript
var oh = require('oh');

var user = {
  firstname: 'John',
  lastname: 'Doe',
  repositories: [
    'foo',
    'bar'
  ]
};

oh(user);
// firstname-john-lastname-doe-repositories-foo-bar
```

## Installation

1. `npm install`

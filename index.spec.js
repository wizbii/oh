/* global describe, it */

var assert = require('assert');
var oh = require('./index');

describe('oh', function () {
  it('should handle arrays', function () {
    assert.equal(oh(['foo', 'bar', 'quz']), 'foo-bar-quz');
  });

  it('should handle objects', function () {
    assert.equal(oh({ foo: 'bar', quz: 'baz' }), 'foo-bar-quz-baz');
  });

  it('should sort object keys', function () {
    assert.equal(oh({ z: 'foo', a: 'bar', d: 'quz' }), 'a-bar-d-quz-z-foo');
  });

  it('should handle functions', function () {
    assert.equal(oh(function foo () {}), 'foo');
    assert.equal(oh(function () {}), 'function');
  });

  it('should handle strings', function () {
    assert.equal(oh('foo'), 'foo');
  });

  it('should handle null values', function () {
    assert.equal(oh(null), 'null');
    assert.equal(oh(void 0), 'null');
  });

  it('should handle booleans', function () {
    assert.equal(oh(true), 'true');
    assert.equal(oh(false), 'false');
  });

  it('should handle numbers', function () {
    assert.equal(oh(12), '12');
    assert.equal(oh(12.3), '12.3');
  });

  it('should support custom separators', function () {
    assert.equal(oh({ foo: 'bar', quz: 'baz' }, '+'), 'foo+bar+quz+baz')
  });

  it('should handle recursive structures', function () {
    var obj = {
      zoo: 'bar',
      qwe: [
        'foo',
        {
          xar: 'boom',
          abc: {
            tululu: 'bim'
          }
        }],
      bar: {
        quz: 'foo',
        aze: 'qwe',
        beach: 23
      }
    };

    var expected = 'bar-aze-qwe-beach-23-quz-foo-qwe-foo-abc-tululu-bim-xar-boom-zoo-bar';

    assert.equal(oh(obj), expected);
  });
});

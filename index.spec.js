/* global describe, it, expect */

const oh = require('./index')

describe('oh', function () {
  it('should handle arrays', function () {
    expect(oh(['foo', 'bar', 'quz'])).toBe('foo-bar-quz')
  })

  it('should handle objects', function () {
    expect(oh({ foo: 'bar', quz: 'baz' })).toBe('foo-bar-quz-baz')
  })

  it('should sort object keys', function () {
    expect(oh({ z: 'foo', a: 'bar', d: 'quz' })).toBe('a-bar-d-quz-z-foo')
  })

  it('should handle functions', function () {
    expect(oh(function foo () {})).toBe('foo')
    expect(oh(function () {})).toBe('function')
  })

  it('should handle strings', function () {
    expect(oh('foo')).toBe('foo')
  })

  it('should handle null values', function () {
    expect(oh(null)).toBe('null')
    expect(oh(undefined)).toBe('null')
  })

  it('should handle booleans', function () {
    expect(oh(true)).toBe('true')
    expect(oh(false)).toBe('false')
  })

  it('should handle numbers', function () {
    expect(oh(12)).toBe('12')
    expect(oh(12.3)).toBe('12.3')
  })

  it('should support custom separators', function () {
    expect(oh({ foo: 'bar', quz: 'baz' }, '+')).toBe('foo+bar+quz+baz')
  })

  it('should handle recursive structures', function () {
    const obj = { zoo: 'bar', qwe: ['foo', { xar: 'boom', abc: { tululu: 'bim' } }], bar: { quz: 'foo', aze: 'qwe', beach: 23 } }
    const expected = 'bar-aze-qwe-beach-23-quz-foo-qwe-foo-abc-tululu-bim-xar-boom-zoo-bar'

    expect(oh(obj)).toBe(expected)
  })
})

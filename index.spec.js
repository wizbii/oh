/* global describe, it, expect */

const oh = require('./index')

describe('oh', function () {
  it('should hashify objects', function () {
    const obj = { zoo: 'bar', qwe: ['foo', { xar: 'boom', abc: { tululu: 'bim' } }], bar: { quz: 'foo', aze: 'qwe', beach: 23 } }
    const expected = 'bar-aze-qwe-beach-23-quz-foo-qwe-foo-abc-tululu-bim-xar-boom-zoo-bar'

    expect(oh(obj)).toBe(expected)
  })
})

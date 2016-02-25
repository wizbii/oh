module.exports = function oh (obj, separator = '-') {
  if (obj == null) return 'null'
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj)
  if (typeof obj === 'string') return obj
  if (typeof obj === 'function') return obj.name || 'function'
  if (Array.isArray(obj)) return obj.map((v) => oh(v, separator)).join(separator)

  // we're left with objects

  const keys = Object.keys(obj).sort()

  return keys
    .map(function (key) {
      let prefix = key
      let value = oh(obj[key], separator)

      return ''.concat(prefix, separator, value)
    })
    .join(separator)
}

module.exports = function oh (obj, separator = '-') {
  if (typeof obj === 'string') return obj

  const keys = Object.keys(obj).sort()

  return keys
    .map(function (key) {
      let prefix = key
      let value = obj[key]

      if (Array.isArray(value)) {
        value =
          value
            .map((v) => oh(v))
            .join(separator)
      } else if (typeof value === 'object') {
        value = oh(value)
      }

      return ''.concat(prefix, separator, value)
    })
    .join(separator)
}

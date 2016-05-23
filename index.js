function oh (obj, separator) {
  if (separator == null) {
    separator = '-';
  }

  if (obj == null) {
    return 'null';
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (typeof obj === 'function') {
    return obj.name || 'function';
  }

  if (Array.isArray(obj)) {
    return obj
      .map(function (v) { return oh(v, separator); })
      .join(separator);
  }

  var keys = Object.keys(obj).sort();
  return keys
    .map(function (key) {
      var prefix = key;
      var value = oh(obj[key], separator);

      return ''.concat(prefix, separator, value);
    })
    .join(separator);
}

module.exports = oh;

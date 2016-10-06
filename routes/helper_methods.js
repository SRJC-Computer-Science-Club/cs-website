var pluralize = require('pluralize');

var trimURL = function trimURL(url) {
  var start = -1, end = -1, length = url.length, i = 0;
  while ( i < length) {
    if (url.charAt(i) == '.') {
      if (start == -1) {
        start = i +1;
      } else if (end == -1) {
        end = i;
      }
    }
    i++;
  }
  return url.substring(start, end);
}

module.exports = {pluralize, trimURL};

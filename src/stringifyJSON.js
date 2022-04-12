// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var res = '';

  var helper = function(node) {
    if (node === undefined || typeof node === 'function' ) {
      return '';
    }
    if (Array.isArray(node)) {
      res += '[';
      for (var i = 0; i < node.length; i++) {
        helper(node[i]);
        if (i < node.length - 1) {
          res += ',';
        }
      }
      res += ']';
    } else if (typeof node === 'object') {
      if (node === null) {
        res += 'null';
      } else {
        res += '{';
        var entries = Object.entries(node);
        for (var i = 0; i < entries.length; i++) {
          if (entries[i][1] === undefined || typeof entries[i][1] === 'function') {
            continue;
          }
          res += '"' + entries[i][0] + '":';
          helper(entries[i][1]);
          if (i < entries.length - 1) {
            res += ',';
          }
        }
        res += '}';
      }
    } else if (typeof node === 'number') {
      res += node.toString();
    } else if (typeof node === 'string') {
      res += '"' + node + '"';
    } else if (typeof node === 'boolean') {
      res += node ? 'true' : 'false';
    } else {
      res += '';
    }
  };

  helper(obj);
  return res;
};

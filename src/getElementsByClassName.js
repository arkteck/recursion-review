// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var res = [];

  var helper = function(element) {
    if (element.classList && element.classList.contains(className)) {
      res.push(element);
    }

    for (var childNode of element.childNodes) {
      if (!childNode) {
      }
      helper(childNode);
    }

  };

  helper(body);
  return res;

};

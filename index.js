var path = require('path');

module.exports = function (relativePath) {
  var pathList = [ process.cwd() ];
  [].push.apply(pathList, arguments);
  return path.join.apply(path, pathList);
};

const os = require("os");

module.exports = function () {
  return os.userInfo().username;
};

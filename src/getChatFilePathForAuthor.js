const path = require("path");
const getChatDirectoryPath = require("./getChatDirectoryPath");

module.exports = function (author) {
  const chatDirectoryPath = getChatDirectoryPath();
  return path.join(chatDirectoryPath, `${author}.csv`);
};

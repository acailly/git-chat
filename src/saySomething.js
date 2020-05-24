const fs = require("fs");
const getChatFilePathForAuthor = require("./getChatFilePathForAuthor");

module.exports = async function (author, content) {
  const chatFile = getChatFilePathForAuthor(author);

  const timestamp = new Date().getTime();
  const data = `${timestamp};${author};${content}\n`;

  await fs.appendFileSync(chatFile, data);
};

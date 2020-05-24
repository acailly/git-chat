const path = require("path");
const fs = require("fs");
const processLineByLine = require("./processLineByLine");
const getChatDirectoryPath = require("./getChatDirectoryPath");

module.exports = async function () {
  const chatDirectoryPath = getChatDirectoryPath();

  let chatFiles = [];
  for (const file of fs.readdirSync(chatDirectoryPath)) {
    if (path.extname(file) === ".csv") {
      const chatFile = path.join(chatDirectoryPath, file);
      chatFiles = [...chatFiles, chatFile];
    }
  }

  let messages = [];
  for (const chatFile of chatFiles) {
    await processLineByLine(chatFile, (line) => {
      const [timestamp, author, content] = line.split(",");
      const newMessage = { timestamp, author, content };
      messages.push(newMessage);
    });
  }

  return messages;
};

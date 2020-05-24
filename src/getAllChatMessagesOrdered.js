const getAllChatMessages = require("./getAllChatMessages");

module.exports = async function () {
  const messages = await getAllChatMessages();

  const orderedMessages = messages.sort((a, b) => a.timestamp - b.timestamp);

  return orderedMessages;
};

const getAllChatMessagesOrdered = require("../src/getAllChatMessagesOrdered");

module.exports = async function () {
  const messages = await getAllChatMessagesOrdered();

  const formattedMessages = messages.map((message) => {
    const formattedDate = new Date(+message.timestamp).toLocaleTimeString();
    return `${formattedDate} <${message.author}>\n\t\t\t${message.content}`;
  });

  return formattedMessages.join("\n");
};

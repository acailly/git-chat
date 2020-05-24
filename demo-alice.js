const saySomething = require("./src/saySomething");
const sync = require("./sync-daemon/sync");
const getChatHistory = require("./client-cli/getChatHistory");

async function demo() {
  await sync();

  await saySomething("Alice", "Hello Bob");

  await sync();

  const chatHistory = await getChatHistory();
  console.log(chatHistory);
}

demo();

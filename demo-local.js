const getIdentity = require("./src/getIdentity");
const saySomething = require("./src/saySomething");
const getChatHistory = require("./client-cli/getChatHistory");

async function demo() {
  const me = getIdentity();
  await saySomething(me, "Hello world");

  const other = "other";
  await saySomething(other, "Welcome!");

  const chatHistory = await getChatHistory();
  console.log(chatHistory);
}

demo();

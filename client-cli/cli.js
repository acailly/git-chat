const process = require("process");
const prompt = require("./prompt");
const getIdentity = require("../src/getIdentity");
const saySomething = require("../src/saySomething");
const getChatHistory = require("./getChatHistory");

async function loop() {
  const me = getIdentity();
  console.log(`Welcome ${me}!`);
  console.log(`This is a prototype for a git based chat client`);
  console.log(``);
  console.log(`Instructions:`);
  console.log(`- To say something, type your message then press ENTER`);
  console.log(`- To refresh history, just press ENTER without typing anything`);
  console.log(`- To exit, type 'exit' then press ENTER`);
  console.log();

  const chatHistory = await getChatHistory();
  console.log(`Last messages:`);
  console.log(``);
  console.log(chatHistory);

  prompt.question(`${me} >`, async (text) => {
    if (text.toLowerCase() === "exit") {
      console.log(``);
      console.log(`\tBye ${me}!`);
      console.log(``);
      process.exit();
    }
    if (text) {
      await saySomething(me, text);
    }
    loop();
  });
}

loop();

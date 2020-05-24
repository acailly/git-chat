const exec = require("child_process").exec;
const getChatDirectoryPath = require("../src/getChatDirectoryPath");

module.exports = async function () {
  const chatDirectoryPath = getChatDirectoryPath();
  await syncFolder(chatDirectoryPath);
};

async function syncFolder(folder) {
  // console.log("Syncing git - Starting for", folder);
  // console.log("Syncing git - Pull");
  const pullOutput = await execShellCommand("git pull");

  // console.log("Syncing git - Add");
  const addOutput = await execShellCommand("git add " + folder);

  const checkOutput = await execShellCommand("git diff --name-only --cached");
  if (checkOutput) {
    // console.log("Syncing git - Commit");
    const commitOutput = await execShellCommand(
      'git commit -m ":white_check_mark: Automatic sync git"'
    );

    // console.log("Syncing git - Push");
    const pushOutput = await execShellCommand("git push");
  } else {
    // console.log("Syncing git - No changes");
  }
  // console.log("Syncing git - Finished");
}

// From https://medium.com/@ali.dev/how-to-use-promise-with-exec-in-node-js-a39c4d7bbf77
function execShellCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
}

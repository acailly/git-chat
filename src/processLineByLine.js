// From https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line

const events = require("events");
const fs = require("fs");
const readline = require("readline");

module.exports = async function processLineByLine(filePath, lineProcessor) {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  rl.on("line", (line) => {
    // Process the line.
    lineProcessor(line);
  });

  await events.once(rl, "close");
};

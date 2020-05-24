const sync = require("./sync");
const getSyncIntervalDurationInMs = require("./getSyncIntervalDurationInMs");

module.exports = function () {
  sync();
  const intervalDurationInMs = getSyncIntervalDurationInMs();
  setInterval(() => sync(), intervalDurationInMs);
};

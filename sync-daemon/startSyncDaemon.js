const sync = require("./sync");
const getSyncIntervalDurationInMs = require("./getSyncIntervalDurationInMs");

module.exports = function () {
  const intervalDurationInMs = getSyncIntervalDurationInMs();
  setInterval(() => sync(), intervalDurationInMs);
};

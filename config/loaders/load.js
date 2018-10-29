const path = require("path");
const fs = require("fs");

module.exports = env => {
  let loaders = [];
  var normalizedPath = path.join(__dirname, ".");

  const addToLoader = payload => {
    if (!Array.isArray(payload)) {
      loaders.push(payload);
    } else {
      // Support for loaders with multiple specifications.
      payload.forEach(x => {
        loaders.push(x);
      });
    }
  };

  fs.readdirSync(normalizedPath).forEach(file => {
    let payload = require(normalizedPath + "/" + file);

    if (file === "load.js") return;
    if (typeof payload === "function") payload = payload(env);

    addToLoader(payload);
  });

  return loaders;
};

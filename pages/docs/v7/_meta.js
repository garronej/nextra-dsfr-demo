const { createCatchAllMeta } = require("nextra/catch-all");
const json = require("../../../remote-files/v7.json");

module.exports = async () => {
  return createCatchAllMeta(json.filePaths, json.nestedMeta);
};
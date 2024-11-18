const { Stats } = require("webpack");
const fs = require("fs");

module.exports = {
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.done.tap("StatsPlugin", (stats) => {
          const statsJSON = stats.toJson(outputOptions);
          fs.writeFileSync("stats.json", JSON.stringify(statsJSON, null, 2));
        });
      },
    },
  ],
};
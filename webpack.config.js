const { StatsWriterPlugin } = require("webpack-stats-plugin");
console.log(new StatsWriterPlugin());
module.exports = {
  plugins: [
    new StatsWriterPlugin({
      stats: {
        all: true,
        assets: true,
      },
    }),
  ],
};
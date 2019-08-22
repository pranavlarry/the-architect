const parts = require("./webpack.parts");

const pagesArr = ["component1Page", "homepage","navpage","intropage","talkaboutpage"];

module.exports = pagesArr.map(s =>
  parts.page(
    new Object({
      filename: "./" + s + "/" + s + ".html",
      template: "./src/pages/" + s + "/" + s + ".pug",
      entry: {
        ["./" + s + "/" + s]: [
          "./src/pages/" + s + "/" + s + ".js",
          "./src/pages/" + s + "/" + s + ".scss"
        ]
      }
    })
  )
);

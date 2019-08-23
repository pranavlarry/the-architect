const parts = require("./webpack.parts");
const pagesArr = ["homepage","navpage","intropage","talkaboutpage", "videomodalpage","solidusablepage","gridimagespage","sliderpage"];

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

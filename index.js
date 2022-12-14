import { resolve, join } from "path";

export default function Typo3Tailwind() {
  const config = this.options.typo3tailwind || {
    layouts: true
  }

  if (config.layouts) {
    this.addLayout(resolve(__dirname, "./layouts/default.vue"), "default");
  }

  this.addModule(["@nuxtjs/tailwindcss"]);

  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "nuxt-typo3-theme-plugin.js",
  });

  this.nuxt.hook("tailwindcss:config", function (tailwindConfig) {
    tailwindConfig.content.push(resolve(__dirname, "**/*.vue"));
    tailwindConfig.plugins.push(require('@tailwindcss/typography'));
    tailwindConfig.theme = {extend: {
      colors: {
        primary: "#ff8700"
      }
    }};
  });
  this.extendBuild((config, { isDev, isClient }) => {
    config.resolve.alias["~typo3-tailwind"] = resolve(__dirname);
  });
}

// REQUIRED if publishing the module as npm package
module.exports.meta = require("./package.json");

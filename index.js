import { resolve, join } from "path";

export default function Typo3Tailwind(moduleOptions) {
  console.log(this.options.typo3tailwind); // 'hello'

  this.nuxt.hook("ready", async (nuxt) => {
    console.log("Nuxt is ready");
  });

  this.addModule(["@nuxtjs/tailwindcss"]);

  this.addLayout(resolve(__dirname, "./layouts/default.vue"), "default");

  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "nuxt-typo3-theme-plugin.js",
  });
  // this.options.components = true;
  // this.nuxt.hook('components:dirs', dirs => {
  //   // Add ./components dir to the list

  //   dirs.push({
  //     path: join(__dirname, 'components'),
  //     level: 0
  //   })
  // })

  this.nuxt.hook("tailwindcss:config", function (tailwindConfig) {
    // console.log(tailwindTypography,"przed")
    // tailwindConfig = Object.assign(tailwindConfig, tailwindTypography);
    tailwindConfig.content.push(resolve(__dirname, "**/*.vue"));
    tailwindConfig.plugins.push(require('@tailwindcss/typography'));
    tailwindConfig.theme = {extend: {
      colors: {
        primary: "#ff8700"
      }
    }};
    console.log(tailwindConfig)
  });
  this.extendBuild((config, { isDev, isClient }) => {
    config.resolve.alias["~typo3-tailwind"] = resolve(__dirname);
  });
}

// REQUIRED if publishing the module as npm package
module.exports.meta = require("./package.json");

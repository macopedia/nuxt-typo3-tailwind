import { resolve, join } from "path";

export default function Typo3Tailwind() {
  const config = this.options.typo3tailwind || {
    layouts: true
  }

  this.options.typo3.components = true
  this.options.build.transpile.push('vee-validate/dist/rules')

  if (config.layouts) {
    this.addLayout(resolve(__dirname, "./layouts/default.vue"), "default");
  }

  this.addModule(["@nuxtjs/tailwindcss"]);

  this.options.css.push(resolve(__dirname, 'style.css'))

  this.nuxt.hook('components:dirs', dirs => {
    dirs.push({
      path: join(__dirname, 'components'),
      extensions: ['vue'],
      level: 100
    })
  })

  this.nuxt.hook("tailwindcss:config", function (tailwindConfig) {
    tailwindConfig.content = [
      resolve(__dirname, "**/*.vue"),
      'components/**/*.{vue,js,ts}',
      'layouts/**/*.{vue,js,ts}',
      'pages/**/*.{vue,js,ts}'
    ]
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

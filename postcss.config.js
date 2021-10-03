const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const variables = require('postcss-advanced-variables');
const imports = require('postcss-import');
const presetEnv = require('postcss-preset-env');
const vars = require('postcss-simple-vars');
const properties = require('postcss-custom-properties');
const mixins = require('postcss-mixins');
const media = require('postcss-custom-media');
const selectors = require('postcss-custom-selectors');

module.exports = {
   plugins: [
      imports(),
      mixins(),
      media(),
      selectors(),
      vars({
         silent: false,
      }),
      presetEnv({
         stage: 2,
      }),
      autoprefixer({
         overrideBrowserslist: ['last 2 versions', '> 5%'],
         grid: true,
      }),
      purgecss({
         content: ['./**/*.html'],
      }),
      cssnano({ preset: 'default' }),
   ],
};

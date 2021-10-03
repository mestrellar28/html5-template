const { resolve } = require('path');
const { defineConfig } = require('vite');
const { minifyHtml, injectHtml } = require('vite-plugin-html');
const viteImagemin = require('vite-plugin-imagemin');
const copy = require('rollup-plugin-copy');

// Compress images options
const imageOpt = {
   optipng: {
      optimizationLevel: 8,
   },
   mozjpeg: {
      quality: 100,
   },
   pngquant: {
      quality: [0.8, 0.8],
      speed: 4,
   },
   svgo: {
      plugins: [
         {
            name: 'removeViewBox',
         },
         {
            name: 'removeEmptyAttrs',
            active: false,
         },
      ],
   },
   webp: {
      quality: 85,
   },
};

// Exports config
module.exports = defineConfig({
   root: 'src',
   build: {
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'src/index.html'),
         },
      },
      cssCodeSplit: true,
      outDir: '../dist',
      assetsDir: './',
      sourcemap: 'inline',
   },
   plugins: [
      minifyHtml(),
      viteImagemin(imageOpt),
      copy({
         targets: [
            {
               src: 'src/fonts/*',
               dest: 'dist/fonts',
            },
         ],
         verbose: true,
         hook: 'writeBundle',
         copyOnce: true,
      }),
   ],
});

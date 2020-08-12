import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const babelParam = {
  babelHelpers: 'bundled',
  presets: ["@babel/preset-env"]
};

const isWatch = process.env.WATCH;

function localserver() {
  return {
    name: 'localserver',
    generateBundle () {
      console.log("http://localhost:10001/sample/sample1.html");
      console.log("http://localhost:10001/sample/sample2.html");
    }
  }
}

export default [
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/browser/PicoAudio.js',
        format: 'iife',
        name: 'PicoAudio'
      }
    ],
    plugins: [
      babel(babelParam),
      // LiveReroad
      isWatch && serve(''),
      isWatch && livereload({watch: 'dist/browser/PicoAudio.min.js'}),
      isWatch && localserver()
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/browser/PicoAudio.min.js',
        format: 'iife',
        name: 'PicoAudio'
      }
    ],
    plugins: [
      babel(babelParam),
      terser()
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/nodejs/pico-audio.js',
        format: 'cjs',
        name: 'PicoAudio',
        exports: 'default'
      },
      {
        file: 'dist/nodejs/pico-audio.mjs',
        format: 'esm'
      }
    ]
  }
];
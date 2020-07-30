import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';

const babelParam = {
  babelHelpers: 'bundled',
  presets: ["@babel/preset-env"]
};

export default [
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/PicoAudio.js',
        format: 'iife',
        name: 'PicoAudio',
        sourcemap: true
      }
    ],
    plugins: [
      babel(babelParam),
      sourcemaps()
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/PicoAudio.min.js',
        format: 'iife',
        name: 'PicoAudio',
        sourcemap: true
      }
    ],
    plugins: [
      babel(babelParam),
      terser(),
      sourcemaps()
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/PicoAudio.mjs',
        format: 'esm'
      }
    ]
  }
];
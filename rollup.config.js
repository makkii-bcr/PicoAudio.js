import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

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
        name: 'PicoAudio'
      }
    ],
    plugins: [
      babel(babelParam),
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/PicoAudio.min.js',
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
				format: 'esm',
				file: 'dist/PicoAudio.mjs'
			}
		]
	}
];
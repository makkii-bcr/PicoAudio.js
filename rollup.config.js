import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/PicoAudio-rollup.js',
        format: 'umd',
        name: 'PicoAudio'
      }
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
      // replace({
      //   'process.env.NODE_ENV': JSON.stringify('development'),
      //   'process.env.DEBUG': JSON.stringify(true),
      //   'process.env.TONYU2': JSON.stringify(false),
      // }),
      babel()
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/PicoAudio-rollup.min.js',
        format: 'umd',
        name: 'PicoAudio',
        plugins: [
          terser()
        ]
      }
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
      // replace({
      //   'process.env.NODE_ENV': JSON.stringify('development'),
      //   'process.env.DEBUG': JSON.stringify(true),
      //   'process.env.TONYU2': JSON.stringify(false),
      // }),
      babel()
    ]
  },
	{
		input: 'src/main.js',
		output: [
			{
				format: 'esm',
				file: 'dist/PicoAudio.module.js'
			}
		]
	}
];
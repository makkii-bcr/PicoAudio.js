import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/PicoAudio.js',
        format: 'umd',
        name: 'PicoAudio'
      }
    ],
    plugins: [
      babel()
    ]
  },
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/PicoAudio.min.js',
        format: 'umd',
        name: 'PicoAudio',
        plugins: [
          terser()
        ]
      }
    ],
    plugins: [
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
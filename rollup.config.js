import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import buble from 'rollup-plugin-buble';

export default [
  {
    input: 'src/main.js',
    output: {
      format: 'umd',
      file: 'dist/PicoAudio-rollup.js'
    },
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // only transpile our source code
      }),
      // buble( {
      //   target : {
      //     chrome: 49,
      //     node: 4,
      //     firefox: 45,
      //     safari: 9,
      //     edge: 12,
      //     ie: 11
      //   }
      // } ),
			// buble( {
			// 	transforms: {
			// 		arrow: false,
			// 		classes: true
			// 	}
			// } )
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
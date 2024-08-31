import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts', // Entry point for your library
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // CommonJS format
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES module format
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies
    resolve(),          // Resolve node_modules
    commonjs(),         // Convert CommonJS to ES6
    typescript({ tsconfig: './tsconfig.json' }), // Integrate TypeScript
    terser(),           // Minify the output
  ],
  external: ['react', 'react-dom'], // Prevent bundling of React and ReactDOM
};

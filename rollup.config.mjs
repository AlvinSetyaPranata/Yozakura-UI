import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: path.resolve(__dirname, 'src/index.ts'),
  output: {
    file: path.resolve(__dirname, 'dist/bundle.js'),
    format: 'es',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
};

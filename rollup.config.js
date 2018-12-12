import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { mainFile, components } from './build-config.json';

const options = {
  external: ['react', 'react-proptypes', 'styled-components'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.json'],
    }),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    uglify(),
  ],
};

export default [
  ...components.map(c => ({
    ...options,
    input: `./src/components/${c}.js`,
    output: {
      file: `./lib/${c}.js`,
      format: 'cjs',
    },
  })),
  {
    ...options,
    input: mainFile,
    output: {
      file: 'index.js',
      format: 'cjs',
    },
  },
];

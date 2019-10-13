import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import glob from 'glob';

const components = glob
  .sync('./src/**/*', {})
  .filter(c => c.includes('index.js'));

const options = {
  external: ['react', 'react-proptypes', 'styled-components'],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
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
    input: c,
    output: {
      file: `./lib/${c.split('/')[2]}.js`,
      format: 'cjs',
    },
  })),
];

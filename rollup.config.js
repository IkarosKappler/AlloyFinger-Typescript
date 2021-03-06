import resolve  from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble    from 'rollup-plugin-buble';
import { terser } from "rollup-plugin-terser";
import { version, author, license, description } from './package.json';

const moduleName = 'alloyfinger-typescript';
const name = "index.es6"; // "alloy_finger";

const banner = `\
/**
 * ${name} v${version}
 * ${description}
 *
 * @author ${author}
 * @license ${license}
 * @preserve
 */
`;

module.exports = [{
  input: 'src/cjs/index.js',
  output: {
    file: `dist/${name}.js`,
    name: moduleName,
    sourcemap: true,
    format: 'umd',
    banner
  },
  plugins: [
    resolve(),  // so Rollup can find external libs
    commonjs(), // so Rollup can convert commonJS to an ES module
    buble()
  ]
}, {
  input: `src/cjs/index.js`,
  output: {
    file: `dist/${name}.min.js`,
    name: moduleName,
      // sourcemap: true,
    format: 'umd',
    banner
  },
  plugins: [
    buble(),
    terser({
      // sourcemap: true,
      output: {
        comments: 'some'
      }
    })
  ]
}];

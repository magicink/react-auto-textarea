const { babel } = require('@rollup/plugin-babel')
const babelConfig = require('./.babelrc.json')
const commonjs = require('@rollup/plugin-commonjs')
const { terser } = require('rollup-plugin-terser')

module.exports = {
  external: [/@babel\/runtime/, 'react'],
  input: './src/index.js',
  output: {
    file: `./dist/bundle.js`,
    format: 'cjs'
  },
  plugins: [
    babel({
      babelHelpers: 'runtime',
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: babelConfig.plugins.filter(
        p => p !== '@babel/plugin-transform-modules-commonjs'
      ),
      presets: babelConfig.presets
    }),
    commonjs(),
    terser()
  ]
}

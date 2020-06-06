import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
    external: ['react', 'react-dom']
  }
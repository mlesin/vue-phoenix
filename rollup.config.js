import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'named',
    sourcemap: true,
    globals: {
      vue: 'Vue',
      'vue-class-component': 'VueClassComponent',
      phoenix: 'phoenix'
    }
  },
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      tsconfig: 'src/tsconfig.json'
    })
  ]
}

import typescript from 'rollup-plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'VuePhoenix',
    exports: 'named',
    globals: {
      vue: 'Vue',
      'vue-class-component': 'VueClassComponent',
      phoenix: 'phoenix'
    }
  },
  external: ['vue', 'vue-class-component', 'phoenix'],
  plugins: [typescript()]
}

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import typescript2 from 'rollup-plugin-typescript2';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'sample-library',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `sample-library.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.ts'),
      },
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'sample-library.css';
          return assetInfo.name;
        },
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ['src/components/**/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

import { resolve as resolvePath } from 'path'
import { defineConfig, type UserConfig } from 'vite'
import { copyManifest } from './config/copy-manifest'

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'post-build-hooks',
        async buildEnd() {
          copyManifest()
        },
      },
    ],
    build: {
      emptyOutDir: false,
      sourcemap: true,
      rollupOptions: {
        input: {
          'content-scripts/main': '/src/main.ts',
        },

        output: {
          format: 'iife',
          entryFileNames: '[name].js',
        },
      },
    },
  }
})

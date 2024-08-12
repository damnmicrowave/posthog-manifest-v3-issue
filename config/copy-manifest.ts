import { copyFileSync } from 'fs'

export function copyManifest() {
  copyFileSync('src/manifest.json', 'dist/manifest.json')
}

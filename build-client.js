import { build } from 'vite'
import { resolve } from 'path'

async function buildClient() {
  await build({
    root: './client',
    build: {
      outDir: '../dist',
      emptyOutDir: true
    },
    base: '/'
  })
}

buildClient()

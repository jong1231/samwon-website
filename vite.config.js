import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// GitHub Pages 배포 경로: 저장소 이름과 동일하게 유지할 것
const REPO_NAME = 'samwon-website'

export default defineConfig(({ mode }) => {
  const isPreview = mode === 'preview'
  return {
    base: isPreview ? './' : `/${REPO_NAME}/`,
    plugins: isPreview ? [react(), viteSingleFile()] : [react()],
    build: isPreview ? { assetsInlineLimit: 100000000, cssCodeSplit: false } : {},
    server: { port: 3000 },
  }
})

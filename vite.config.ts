import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path';

import { processMdRoute, markdownSetup } from './vite.util'

import Pages from 'vite-plugin-pages'

// Markdown related
import Markdown from "unplugin-vue-markdown/vite"

import VueRouter from 'unplugin-vue-router/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => { 
  console.log("define config", command, mode, isSsrBuild, isPreview)
  return {
    build: {
      assetsInlineLimit: 4096, // Default: 4096 (4KB)
    },
  plugins: [
    // VueRouter({ extensions: [".vue", ".md"] }),
    vue(
      {
        include: [/\.vue$/, /\.md$/], 
      }
    ),
    // 整个Markdown都是新增内容
    Markdown({
      headEnabled: true,
      // excerpt: true,
      // exposeExcerpt: true,
      markdownItOptions: {
        html: false,
        linkify: true,
        typographer: true,
      },
      frontmatterPreprocess(frontmatter, options, id, defaultHeadProcess) {
        processMdRoute(frontmatter, id)
        return {
          head: defaultHeadProcess(frontmatter, options),
          frontmatter
        }
      },
      
      // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
      markdownItSetup(md) {
        markdownSetup(md)
      },
      wrapperClasses: "markdown-body", // markdown-body是一个class类，将和github-markdown-css包对应
    }),
    Pages({
      pagesDir: ["src/articles"],
      extensions: ["md"],
      exclude: ["**/components/*.vue"],
      importMode: (r) => {
        return mode === 'development' ? 'sync' : 'async'
      },
    })
  ],
  resolve:{
    alias:{
      "@": resolve(__dirname, "./src"),
    }
  },
}
})

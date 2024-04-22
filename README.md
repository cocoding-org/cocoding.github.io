# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.


## Dependencies

- @unhead/vue : vue中给markdown文件添加header
- github-markdown-css: markdown通用样式
- markdown-it-anchor: 为Markdown标题生成唯一的ID，实现导航
- markdown-it-highlightjs: 代码块高亮样式
- markdown-it-prism: 代码块高亮样式，和highlightjs功能一致。
- unplugin-vue-markdown: 实现markdown的核心库，内部分装了markdown-it


<template>
 <div>
    <div class="markdown-body" v-html="MdContent"></div>
 </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

import readme from './readme.md'

import { markdownSetup } from '@/utils/markdown-util'

import MarkdownIt from 'markdown-it'

const route = useRoute()

const mdPath = route.params.path

const md = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
});

markdownSetup(md)

console.log("mdPath", mdPath, readme)

const MdContent = md.render(
`
## Recommended Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

- Use [vue-tsc](https://github.com/vuejs/language-tools/tree/master/packages/tsc) for performing the same type checking from the command line, or for generating d.ts files for SFCs.
`);


</script>

<style scoped>

</style>

# CoCoding Blog

通用Blog模板，基于[http://liuyanwei.jumppo.com](http://liuyanwei.jumppo.com)改造的。


## Dependencies

- @unhead/vue : vue中给markdown文件添加header
- github-markdown-css: markdown通用样式
- markdown-it-anchor: 为Markdown标题生成唯一的ID，实现导航
- markdown-it-highlightjs: 代码块高亮样式
- markdown-it-prism: 代码块高亮样式，和highlightjs功能一致。用一个就行了，我最终没用这个
- unplugin-vue-markdown: 实现markdown的核心库，内部分装了markdown-it
- vite-plugin-pages: 实现自动路由，markdown文章自动生成路由
- markdown-it-external-link：为markdown中的链接添加target="_blank"
- markdown-it-toc：为markdown中的标题添加目录
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 以下内容均为样式相关
import { createHead } from "@unhead/vue" 
import "github-markdown-css"
import "highlight.js/styles/default.css"

const head = createHead() 

// 引入对应css样式
import 'nprogress/nprogress.css'


import router from './router'

createApp(App)
    .use(router)
    .use(head)
    .mount('#app')

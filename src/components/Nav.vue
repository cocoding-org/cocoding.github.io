<template>
<aside id="sidebar">
  <nav id="tags">
    <div class="title">CoCoding</div>
    <a href="/" id="avatar" 
    :style="{
        'background-image': `url('${logoImg}')`
    }"
    ></a>

    <ul id="tags__ul">
        <li @click="changeCat('')" id="pl__all" class="tags__li tags-btn" :class="currentCat == ''?'active':''">所有文章</li>
        <li v-for="cat in Object.keys(categoryMap)" :key="cat" :id="cat" 
        @click="changeCat(cat)"
        class="tags__li tags-btn" :class="currentCat == cat?'active':''">{{ categoryMap[cat] }}</li>
    </ul>

    <div class="copyright">Copyright ©2024 CoCoding All Rights Reserved. </div>
    <div id="tags__bottom">
      <a href="{{ site.author.github }}" id="icon-github" class="tags-btn fontello" target="_blank"></a>
      <a href="/pages/rss.xml" id="icon-feed" class="tags-btn fontello" target="_blank"></a>
      <a href="mailto:{{ site.author.email }}" id="icon-email" class="tags-btn fontello"></a>
    </div>

  </nav> <!-- end #tags -->

  <div id="posts-list">
    <form action="" id="search-form">
      <a href="/" id="mobile-avatar" 
        :style="{
            'background-image': `url('${logoImg}')`,
            'display': isMobile() ? 'inline-block' : 'none'
        }"
      ></a>
      <!-- NOTE: input field is disabled by default -->
      <input id="search-input" type="text" v-model="search" placeholder="Search..." >
    </form>

    <nav id="pl__container">
        <a v-for="art in articles" 
        :title="art.title"
        class="pl__all" 
        :class="router.currentRoute.value.name == art.path? 'active' : ''"
        href="javascript:void(0)" @click="gotoRoute(art)">
            <span class="pl__circle"></span>
            <span class="pl__title">{{art.title || art.path}}</span>
            <span class="pl__date">{{ art.date }}</span>
        </a>

    </nav>
  </div> <!-- end #posts-list -->
</aside> <!-- end #sidebar -->
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
// import articles from '~pages'

import categoryJson from '@/assets/category.json'
import articleData from '@/assets/data.json'
import logoImg from '/cc2.svg'
import { useRouter } from 'vue-router';
import { isMobile } from '@/utils/browser';

const articleArr: any[] = Object.keys(articleData).map(k => {
            return {
                ...(articleData as any)[k],
                path: k
            }
        })
const router = useRouter();

const currentCat = ref('')

const search = ref('')

function changeCat(cat: string) {
    currentCat.value = cat
}

const hideMenu = inject<()=>{}>("hideMenu")

function gotoRoute(art: any) {
    router.push({
        name: art.path
    })
    if (isMobile()) {
        hideMenu!()
    }
}

const articles = computed(() => {
    let arr = articleArr
    if (currentCat.value !== '') {
        arr = articleArr
            .filter((v: any) => {
                return v["category"] === currentCat.value
            })
    }
    if (search.value !== '') {
        const str = search.value.toLowerCase()
        return arr
            .filter((v: any) => {
                return (v["keywords"] + " " + v["title"] + " " + v["description"]).toLowerCase().includes(str)
            })
    } else {
        return arr
    }
})

console.log("articles", articles)

const categoryMap = ref<Record<string, string>>(categoryJson);

</script>

<style>
.title {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    padding-top: 10px;
}
.copyright {
  color: #888;
  height: 20px;
  z-index: 999;
  position: fixed;
  bottom: 60px;
  width: 150px;
  font-size: 12px;
  margin: 0 5px;
}
</style>
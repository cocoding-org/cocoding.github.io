
<script setup lang="ts">
import Nav from '@/components/Nav.vue'
// import Article01 from '@/articles/article-01.md'
import { onBeforeMount, provide, ref } from 'vue';
import { useRouter } from 'vue-router';
// import { useMeta } from 'vue-meta';
const router = useRouter()
onBeforeMount(()=>{
  if (router.currentRoute.value.path === '/')
  router.push('readme')

  console.log(router.currentRoute.value)
  // useMeta({
  //   title: 'Article 01',
  //   meta: [
  //     { name: 'description', content: 'Article 01' },
  //     { name: 'keywords', content: 'Article 01' },
  //   ],
  // })
})
const showMenu = ref(true)
function toggleMenu() {
  showMenu.value = !showMenu.value
}
provide('hideMenu', ()=>{
  showMenu.value = false
})
</script>

<template>
  <div>
    <Nav v-show="showMenu" />
    <div id="post">
      <div id="pjax">
        <router-view>
        </router-view>
      </div> <!-- end #pjax -->
    </div>
    <button id="js-fullscreen" @click="toggleMenu()"><span id="icon-arrow" class="fontello" :class="showMenu?'':'fullscreen'"></span></button>
  </div>
</template>

<style>
@import '@/assets/css/style.css';
.markdown-body {
  padding: 10px;
}
.table-of-contents {
  width: 270px;
  position: fixed;
  top: 0px;
  bottom: 0;
  right: 0;
  z-index: 98;
  -webkit-transform: translateX(260px);
  -moz-transform: translateX(260px);
  -ms-transform: translateX(260px);
  -o-transform: translateX(260px);
  transform: translateX(260px);
  -webkit-transition: -webkit-transform .35s ease-in-out .1s;
  -moz-transition: -moz-transform .35s ease-in-out .1s;
  -ms-transition: -ms-transform .35s ease-in-out .1s;
  -o-transition: -o-transform .35s ease-in-out .1s;
  transition: transform .35s ease-in-out .1s; 
}
  .table-of-contents:hover {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0); 
      display: block; 
  }
  .table-of-contents>ol {
    padding: 20px;
    background: #000000d5;
    height: 100vh;
  }
  @media screen and (max-device-width: 1280px) {
    .table-of-contents {
      display: none; 
      } 
    }

</style>

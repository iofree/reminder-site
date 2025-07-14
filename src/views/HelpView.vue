<template>
  <div class="page-wrapper">
    <div class="headerBackground subPageHeaderBackground">
      <div class="container subPageContainer">
        <AppHeader />
        <article class="page markdown-body">
          <div v-if="loading" class="loading">加载中...</div>
          <div v-else-if="error" class="error">{{ error }}</div>
          <div v-else v-html="content"></div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { useMarkdown } from '@/composables/useMarkdown'
import AppHeader from '@/components/AppHeader.vue'

const languageStore = useLanguageStore()

const markdownFile = computed(() => {
  return languageStore.currentLanguage === 'en' 
    ? '/src/content/help-en.md'
    : '/src/content/help.md'
})

const { content, loading, error } = useMarkdown(markdownFile.value)
</script>

<style scoped>
.page-wrapper {
  background-color: #fff;
}

.subPageHeaderBackground {
  background-color: #fff;
}

.subPageHeaderBackground .logo > p {
  color: #000;
}

.container {
  display: grid;
  margin: auto;
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 115px auto auto auto;
  grid-column-gap: 30px;
  grid-template-areas: 
    "h h h h h h h h h h h h"
    "p p p p p p p p p p p p"
    "c c c c c c c c c c c c"
    "f f f f f f f f f f f f";
  background-color: #fff;
}

.page {
  margin-top: 30px;
  margin-bottom: 70px;
  grid-column: 3/11;
}

@media only screen and (max-width: 768px) {
  .page {
    margin-top: 30px;
    margin-bottom: 70px;
    grid-column: 1/-1;
  }
}

.loading, .error {
  text-align: center;
  padding: 40px;
  font-size: 1.6rem;
}

.error {
  color: #e74c3c;
}
</style>
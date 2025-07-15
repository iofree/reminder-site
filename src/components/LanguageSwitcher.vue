<template>
  <div class="language-switcher">
    <button @click="toggleDropdown" class="language-btn" :class="{ active: showDropdown }">
      <i class="fas fa-globe"></i>
      <span>{{ currentLanguageLabel }}</span>
      <i class="fas fa-chevron-down dropdown-icon" :class="{ rotated: showDropdown }"></i>
    </button>
    <div v-show="showDropdown" class="language-dropdown">
      <a href="#" @click.prevent="switchLanguage('zh')" class="language-option">
        <i class="fas fa-check" v-show="languageStore.currentLanguage === 'zh'"></i>
        {{ languageStore.t.language.chinese }}
      </a>
      <a href="#" @click.prevent="switchLanguage('en')" class="language-option">
        <i class="fas fa-check" v-show="languageStore.currentLanguage === 'en'"></i>
        {{ languageStore.t.language.english }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { useRouter } from 'vue-router'

const languageStore = useLanguageStore()
const router = useRouter()
const showDropdown = ref(false)

const currentLanguageLabel = computed(() => {
  return languageStore.currentLanguage === 'zh' ? '中文' : 'English'
})

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const switchLanguage = (lang: string) => {
  languageStore.setLanguage(lang)
  showDropdown.value = false
  
  // 路由跳转逻辑
  const currentPath = router.currentRoute.value.path
  let newPath = ''
  
  if (lang === 'en') {
    if (currentPath.startsWith('/en')) {
      newPath = currentPath
    } else if (currentPath === '/') {
      newPath = '/en'
    } else {
      newPath = '/en' + currentPath
    }
  } else {
    if (currentPath.startsWith('/en')) {
      newPath = currentPath.replace('/en', '') || '/'
    } else {
      newPath = currentPath
    }
  }
  
  if (newPath !== currentPath) {
    router.push(newPath)
  }
}

const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.language-switcher')) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
  margin-right: 20px;
}

.language-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  position: relative;
}

.language-btn.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

.dropdown-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.language-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  min-width: 120px;
  z-index: 1000;
  margin-top: 4px;
}

.language-option {
  display: block;
  padding: 10px 16px;
  color: #24292e;
  text-decoration: none;
  font-size: 1.4rem;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.language-option i {
  width: 16px;
  color: #28a745;
}

.language-option:hover {
  background-color: #f6f8fa;
  color: #24292e;
}

.language-option:first-child {
  border-radius: 6px 6px 0 0;
}

.language-option:last-child {
  border-radius: 0 0 6px 6px;
}

@media only screen and (max-width: 768px) {
  .language-switcher {
    margin-right: 15px;
  }
  
  .language-btn {
    padding: 6px 10px;
    font-size: 1.2rem;
  }
  
  .language-option {
    padding: 8px 12px;
    font-size: 1.2rem;
  }
}
</style>
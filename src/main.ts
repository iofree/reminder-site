import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useLanguageStore } from './stores/language'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 初始化语言设置
const languageStore = useLanguageStore()
languageStore.initLanguage()

// 路由守卫，根据路径设置语言
router.beforeEach((to) => {
  if (to.path.startsWith('/en')) {
    languageStore.setLanguage('en')
  } else {
    languageStore.setLanguage('zh')
  }
})

app.mount('#app')
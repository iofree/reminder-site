import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Translations {
  site: {
    title: string
    description: string
  }
  nav: {
    help: string
    privacy: string
    terms: string
  }
  footer: {
    made_by: string
    in: string
  }
  features: {
    cycle_reminder: {
      title: string
      description: string
    }
    countdown_clock: {
      title: string
      description: string
    }
    timeline_reminder: {
      title: string
      description: string
    }
    clipboard_recognition: {
      title: string
      description: string
    }
    dark_light_mode: {
      title: string
      description: string
    }
  }
  language: {
    switch: string
    chinese: string
    english: string
  }
}

const translations: Record<string, Translations> = {
  zh: {
    site: {
      title: "不忘提醒",
      description: "帮助你不忘记任何一件小事"
    },
    nav: {
      help: "文档",
      privacy: "隐私政策",
      terms: "使用条款"
    },
    footer: {
      made_by: "制作者",
      in: "在"
    },
    features: {
      cycle_reminder: {
        title: "循环提醒",
        description: "您可以设置每天/每周/每月/每年循环提醒"
      },
      countdown_clock: {
        title: "倒计时时钟",
        description: "您可以创建倒计时时钟，在倒计时结束时 App 会通知您。支持任意时间间隔，支持专注模式。"
      },
      timeline_reminder: {
        title: "时间线提醒",
        description: "将来为了需要提醒的事，按时间线排列，并及时通知您。"
      },
      clipboard_recognition: {
        title: "自动从剪切板识别时间",
        description: "当您在 App 中打开了读取剪切板的权限，我们可以自动从您的剪切板识别时间，自动带入。"
      },
      dark_light_mode: {
        title: "暗/亮模式",
        description: "支持暗黑，明亮模式"
      }
    },
    language: {
      switch: "切换语言",
      chinese: "中文",
      english: "English"
    }
  },
  en: {
    site: {
      title: "Never Forget Reminder",
      description: "Help you never forget any little thing"
    },
    nav: {
      help: "Documentation",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    footer: {
      made_by: "Made by",
      in: "in"
    },
    features: {
      cycle_reminder: {
        title: "Recurring Reminders",
        description: "You can set daily/weekly/monthly/yearly recurring reminders"
      },
      countdown_clock: {
        title: "Countdown Timer",
        description: "You can create countdown timers, and the app will notify you when the countdown ends. Supports any time interval and focus mode."
      },
      timeline_reminder: {
        title: "Timeline Reminders",
        description: "Future reminders are arranged in timeline order and notify you in time."
      },
      clipboard_recognition: {
        title: "Auto Time Recognition from Clipboard",
        description: "When you enable clipboard reading permission in the app, we can automatically recognize time from your clipboard and auto-fill it."
      },
      dark_light_mode: {
        title: "Dark/Light Mode",
        description: "Supports dark and light modes"
      }
    },
    language: {
      switch: "Switch Language",
      chinese: "中文",
      english: "English"
    }
  }
}

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref<string>('zh')
  
  const t = computed(() => translations[currentLanguage.value])
  
  const setLanguage = (lang: string) => {
    currentLanguage.value = lang
    localStorage.setItem('preferred-language', lang)
    document.documentElement.lang = lang
  }
  
  const initLanguage = () => {
    const savedLang = localStorage.getItem('preferred-language')
    if (savedLang) {
      currentLanguage.value = savedLang
    } else {
      const browserLang = navigator.language || 'zh'
      currentLanguage.value = browserLang.startsWith('zh') ? 'zh' : 'en'
    }
    document.documentElement.lang = currentLanguage.value
  }
  
  return {
    currentLanguage,
    t,
    setLanguage,
    initLanguage
  }
})
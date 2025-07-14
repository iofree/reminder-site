import { ref, onMounted, watch } from 'vue'
import { parseMarkdown } from '@/utils/markdown'

export function useMarkdown(filePath: string | (() => string)) {
  const content = ref('')
  const loading = ref(true)
  const error = ref<string | null>(null)

  const loadMarkdown = async () => {
    try {
      loading.value = true
      const path = typeof filePath === 'function' ? filePath() : filePath
      const response = await fetch(path)
      if (!response.ok) {
        throw new Error(`Failed to load markdown file: ${response.statusText}`)
      }
      const text = await response.text()
      content.value = parseMarkdown(text)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      console.error('Error loading markdown:', err)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    loadMarkdown()
  })

  // 如果 filePath 是响应式的，监听变化
  if (typeof filePath === 'function') {
    watch(filePath, () => {
      loadMarkdown()
    })
  }

  return {
    content,
    loading,
    error,
    reload: loadMarkdown
  }
}
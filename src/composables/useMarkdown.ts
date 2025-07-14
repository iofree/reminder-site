import { ref, onMounted } from 'vue'
import { parseMarkdown } from '@/utils/markdown'

export function useMarkdown(filePath: string) {
  const content = ref('')
  const loading = ref(true)
  const error = ref<string | null>(null)

  const loadMarkdown = async () => {
    try {
      loading.value = true
      const response = await fetch(filePath)
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

  return {
    content,
    loading,
    error,
    reload: loadMarkdown
  }
}
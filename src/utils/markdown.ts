import { marked } from 'marked'

// 配置 marked
marked.setOptions({
  breaks: true,
  gfm: true
})

// 自定义渲染器
const renderer = new marked.Renderer()

// 自定义图片渲染
renderer.image = function(href, title, text) {
  return `<img src="${href}" alt="${text}" title="${title || ''}" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); margin: 10px 0;" />`
}

// 自定义链接渲染
renderer.link = function(href, title, text) {
  return `<a href="${href}" title="${title || ''}" style="color: #1d63ea; text-decoration: none;">${text}</a>`
}

marked.use({ renderer })

export function parseMarkdown(content: string): string {
  return marked(content)
}
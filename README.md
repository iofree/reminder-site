# Reminder 网站

这是一个基于 Jekyll 的静态网站项目，用于展示 iOS 应用"不忘提醒"的产品页面。该网站采用响应式设计，支持移动端和桌面端访问。

## 项目概述

**不忘提醒** 是一款功能强大的 iOS 提醒应用，提供以下核心功能：
- 循环提醒（每天/每周/每月/每年）
- 倒计时时钟和专注模式
- 时间线提醒
- 自动剪切板时间识别
- 暗/亮模式支持
- 农历提醒支持
- 小组件功能

## 技术栈

- **Jekyll** - 静态网站生成器
- **GitHub Pages** - 托管平台
- **SCSS** - CSS 预处理器
- **HTML5** - 标记语言
- **Font Awesome** - 图标库

## 项目结构

```
├── _config.yml          # Jekyll 配置文件
├── _data/               # 数据文件（多语言支持）
│   ├── features/        # 功能特性数据
│   │   ├── zh.yml      # 中文功能列表
│   │   └── en.yml      # 英文功能列表
│   ├── pages/          # 页面数据
│   │   ├── zh.yml      # 中文页面数据
│   │   └── en.yml      # 英文页面数据
│   └── translations.yml # 通用翻译文本
├── _includes/           # 可重用的 HTML 组件
│   ├── appstoreimages.html
│   ├── features.html
│   ├── footer.html
│   ├── head.html
│   ├── header.html
│   ├── language-switcher.html
│   ├── get-translation.html
│   └── screencontent.html
├── _layouts/            # 页面布局模板
│   ├── default.html
│   └── page.html
├── _pages/              # 静态页面
│   ├── en/             # 英文页面
│   │   ├── help.md
│   │   ├── privacy.md
│   │   └── terms.md
│   ├── help.md         # 中文页面
│   ├── privacy.md
│   └── terms.md
├── _sass/               # SCSS 样式文件
│   ├── base.scss
│   ├── github-markdown.scss
│   └── layout.scss
├── assets/              # 静态资源
│   ├── img/            # 应用截图
│   ├── screenshot/     # 屏幕截图
│   └── videos/         # 视频文件
├── en/                  # 英文站点根目录
├── scripts/             # 构建和部署脚本
├── Gemfile             # Ruby 依赖管理
├── index.html          # 中文首页
└── main.scss           # 主样式文件
```

## 目录详细说明

### 核心配置文件
- **`_config.yml`** - Jekyll 主配置文件，包含网站基本信息、多语言配置、应用信息等
- **`Gemfile`** - Ruby 依赖管理文件，定义项目所需的 gem 包

### 数据文件 (`_data/`)
用于存储结构化数据，支持多语言内容：

- **`_data/features/`** - 应用功能特性数据
  - `zh.yml` - 中文功能列表
  - `en.yml` - 英文功能列表
- **`_data/pages/`** - 页面相关数据
  - `zh.yml` - 中文页面数据
  - `en.yml` - 英文页面数据
- **`_data/translations.yml`** - 通用 UI 文本翻译

### 模板和组件
- **`_layouts/`** - 页面布局模板
  - `default.html` - 默认页面布局
  - `page.html` - 静态页面布局
- **`_includes/`** - 可重用的 HTML 组件
  - `head.html` - 页面头部
  - `header.html` - 网站头部导航
  - `footer.html` - 网站底部
  - `features.html` - 功能特性展示
  - `language-switcher.html` - 语言切换器
  - `get-translation.html` - 翻译助手

### 内容页面 (`_pages/`)
存储静态页面内容，支持多语言：
- 中文页面直接放在 `_pages/` 根目录
- 英文页面放在 `_pages/en/` 子目录
- 支持的页面类型：帮助页面、隐私政策、使用条款等

### 样式文件 (`_sass/`)
- **`base.scss`** - 基础样式
- **`layout.scss`** - 布局样式
- **`github-markdown.scss`** - Markdown 内容样式

### 静态资源 (`assets/`)
- **`img/`** - 应用截图和展示图片
- **`screenshot/`** - 屏幕截图
- **`videos/`** - 视频文件

### 多语言支持
- **`en/`** - 英文站点根目录
- **`index.html`** - 中文首页
- 支持中文 (`zh`) 和英文 (`en`) 两种语言

## 环境要求

- Ruby 2.7+
- Jekyll 4.0+
- Bundler

## 安装与运行

### 1. 克隆项目
```bash
git clone <repository-url>
cd reminder-site
```

### 2. 安装依赖
```bash
# 安装 Bundler（如果未安装）
gem install bundler

# 安装项目依赖
bundle install
```

### 3. 本地开发运行
```bash
# 启动开发服务器
rm -rf _site .sass-cache .jekyll-metadata
bundle exec jekyll serve

# 或者使用 GitHub Pages 兼容模式
bundle exec jekyll serve --livereload

# 指定端口运行
bundle exec jekyll serve --port 4001
```

访问 `http://localhost:4000` 查看网站

### 4. 构建生产版本
```bash
# 构建静态文件到 _site 目录
bundle exec jekyll build

# 构建生产环境版本
JEKYLL_ENV=production bundle exec jekyll build
```

## 部署

### GitHub Pages 部署
1. 推送代码到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为源
4. 网站将自动部署到 `https://username.github.io/repository-name`

### 手动部署
```bash
# 构建生产版本
JEKYLL_ENV=production bundle exec jekyll build

# 将 _site 目录内容上传到服务器
rsync -avz _site/ user@server:/path/to/website/
```

## 配置说明

主要配置在 `_config.yml` 文件中：

- **应用信息**：应用名称、价格、描述、App Store 链接
- **开发者信息**：姓名、邮箱、社交媒体链接
- **功能特性**：应用功能列表和图标
- **主题设置**：颜色、透明度、设备样式等
- **图片资源**：应用截图和展示图片

## 自定义修改

### 修改应用信息
编辑 `_config.yml` 中的以下字段：
```yaml
app_name: 你的应用名称
app_description: 应用描述
ios_app_id: 你的应用ID
appstore_link: App Store链接
apk_link: APK下载链接（可选）
```

### APK 下载功能
支持在 App Store 下载按钮旁边显示 Android APK 下载按钮：

#### 单语言配置
```yaml
apk_link: https://your-domain.com/app.apk
```

#### 多语言配置
```yaml
apk_links:
  zh: https://your-domain.com/app-zh.apk
  en: https://your-domain.com/app-en.apk
```

**注意：** 
- 如果不配置 `apk_link` 或 `apk_links`，APK 下载按钮不会显示
- 多语言配置优先级高于单语言配置
- APK 按钮会显示在 Play Store 按钮之后、App Store 按钮之前

### 添加功能特性
在 `_config.yml` 的 `features` 部分添加：
```yaml
features:
  - title: 新功能标题
    description: 功能描述
    fontawesome_icon_name: 图标名称
```

### 更换应用截图
1. 将新截图放入 `assets/img/` 目录
2. 在 `_config.yml` 的 `img` 部分更新路径

### 修改样式
编辑 `_sass/` 目录下的 SCSS 文件或在 `_config.yml` 中调整颜色变量

## 开发命令

```bash
# 安装依赖
bundle install

# 本地开发（带实时重载）
bundle exec jekyll serve --livereload

# 构建生产版本
JEKYLL_ENV=production bundle exec jekyll build

# 检查链接
bundle exec jekyll doctor

# 清理构建文件
bundle exec jekyll clean
```

## 故障排除

### 常见问题

1. **依赖安装失败**
   ```bash
   bundle update
   bundle install
   ```

2. **端口被占用**
   ```bash
   bundle exec jekyll serve --port 4001
   ```

3. **样式不生效**
   - 检查 `main.scss` 文件
   - 清理缓存：`bundle exec jekyll clean`

4. **图片不显示**
   - 检查图片路径
   - 确认 `picture_CDN` 配置

## 内容管理指南

### 添加新的功能特性

1. **编辑功能数据文件**
   ```bash
   # 编辑中文功能列表
   vim _data/features/zh.yml
   
   # 编辑英文功能列表
   vim _data/features/en.yml
   ```

2. **功能数据格式**
   ```yaml
   - title: 功能标题
     description: 功能描述
     fontawesome_icon_name: fas fa-icon-name
   ```

### 添加新的静态页面

1. **创建中文页面**
   ```bash
   # 在 _pages/ 目录下创建新页面
   touch _pages/new-page.md
   ```

2. **创建英文页面**
   ```bash
   # 在 _pages/en/ 目录下创建对应英文页面
   touch _pages/en/new-page.md
   ```

3. **页面头部格式**
   ```yaml
   ---
   layout: page
   title: 页面标题
   include_in_header: true
   ---
   
   页面内容...
   ```

### 更新翻译文本

编辑 `_data/translations.yml` 文件添加新的翻译项：
```yaml
zh:
  new_text: "中文文本"
en:
  new_text: "English text"
```

在模板中使用翻译：
```liquid
{% include get-translation.html key="new_text" %}
```

### 添加新的应用截图

1. **准备图片文件**
   - 将截图放入 `assets/img/` 目录
   - 推荐使用 PNG 格式，保持一致的尺寸比例

2. **更新配置文件**
   在 `_config.yml` 的 `img` 部分添加新图片：
   ```yaml
   img:
     - url: assets/img/new-screenshot.png
   ```

### 修改应用信息

编辑 `_config.yml` 文件中的多语言应用信息：
```yaml
app_info:
  zh:
    name: 应用中文名称
    description: 中文描述
    price: 价格
  en:
    name: App English Name
    description: English description
    price: Price
```

### 自定义样式

1. **修改主题颜色**
   在 `_config.yml` 中调整颜色变量：
   ```yaml
   topbar_color: "#000000"
   link_color: "#1d63ea"
   feature_icons_foreground_color: "#1d63ea"
   ```

2. **添加自定义样式**
   在 `_sass/` 目录下的相应文件中添加 CSS 规则

### 多语言内容管理

1. **语言配置**
   在 `_config.yml` 中配置支持的语言：
   ```yaml
   languages: ["zh", "en"]
   default_language: "zh"
   language_names:
     zh: "中文"
     en: "English"
   ```

2. **内容组织原则**
   - 中文内容：放在根目录或对应的中文目录
   - 英文内容：放在 `en/` 子目录或 `_pages/en/` 目录
   - 数据文件：按语言代码分别创建 `zh.yml` 和 `en.yml`

### 开发工作流

1. **本地开发**
   ```bash
   bundle exec jekyll serve --livereload
   ```

2. **内容更新流程**
   - 修改内容文件
   - 本地预览确认
   - 提交到版本控制
   - 自动部署到生产环境

3. **多语言测试**
   - 测试语言切换功能
   - 确认所有语言版本内容完整
   - 检查翻译文本是否正确显示

## 许可证

本项目采用 MIT 许可证，详见 LICENSE 文件。

# Dynamic Content Rendering System

This document explains how to use the new dynamic content rendering system for multilingual Jekyll sites.

## Overview

The dynamic content rendering system provides centralized translation functions with automatic fallback mechanisms. It consists of several include files that handle different types of content:

- `get-translation.html` - For UI translations
- `get-app-info.html` - For app information (name, description, price)
- `get-page-content.html` - For page content from data files
- `get-features.html` - For feature lists
- `get-appstore-link.html` - For App Store links

## Core Features

### 1. Current Language Detection
All functions automatically detect the current page language using:
```liquid
{% assign current_lang = page.lang | default: site.default_language %}
```

### 2. Fallback Mechanism
Each function implements a three-tier fallback system:
1. Try current language content
2. Fallback to default language content
3. Final fallback to key name or placeholder

### 3. Missing Translation Handling
When translations are missing, the system gracefully falls back to prevent broken content.

## Usage Examples

### Getting UI Translations
```liquid
{% include get-translation.html key="press_kit" %}
{{ translated_value }}
```

### Getting App Information
```liquid
{% include get-app-info.html info_key="name" %}
{{ app_info_value }}

{% include get-app-info.html info_key="description" %}
{{ app_info_value }}

{% include get-app-info.html info_key="price" %}
{{ app_info_value }}
```

### Getting Page Content
```liquid
{% include get-page-content.html page_name="help" content_key="content.heading" %}
{{ page_content_value }}

{% include get-page-content.html page_name="help" content_key="content.contact.methods.email" %}
{{ page_content_value }}
```

### Getting Features
```liquid
{% include get-features.html %}
{% for feature in localized_features %}
  <h3>{{ feature.title }}</h3>
  <p>{{ feature.description }}</p>
{% endfor %}
```

### Getting App Store Links
```liquid
{% include get-appstore-link.html %}
<a href="{{ appstore_link_value }}">Download</a>
```

## Data Structure Requirements

### Translation Files (_data/translations.yml)
```yaml
zh:
  press_kit: "媒体资料包"
  contact_us: "联系我们"
en:
  press_kit: "Press Kit"
  contact_us: "Contact Us"
```

### Page Content Files (_data/pages/[lang].yml)
```yaml
pages:
  help:
    title: "帮助"
    content:
      heading: "应用标题"
      contact:
        methods:
          email: "邮件: admin@example.com"
```

### Feature Files (_data/features/[lang].yml)
```yaml
features:
  - title: "功能标题"
    description: "功能描述"
    fontawesome_icon_name: "icon-name"
```

## Configuration Requirements

### Site Configuration (_config.yml)
```yaml
languages: ["zh", "en"]
default_language: "zh"
language_names:
  zh: "中文"
  en: "English"

# Multilingual app info
app_info:
  zh:
    name: "中文应用名"
    description: "中文描述"
    price: "免费"
  en:
    name: "English App Name"
    description: "English Description"
    price: "Free"

# Multilingual App Store links
appstore_links:
  zh: "https://apps.apple.com/cn/app/..."
  en: "https://apps.apple.com/us/app/..."
```

## Implementation Benefits

1. **Centralized Translation Logic**: All translation logic is in one place
2. **Automatic Fallbacks**: No broken content when translations are missing
3. **Easy Maintenance**: Add new languages by creating data files
4. **Flexible Content**: Support for nested content structures
5. **Performance**: Minimal overhead with efficient Liquid templates

## Migration from Old System

To migrate existing templates:

1. Replace direct `site.data.translations[lang][key]` calls with `{% include get-translation.html key="..." %}`
2. Replace app info logic with `{% include get-app-info.html info_key="..." %}`
3. Use `{% include get-page-content.html %}` for dynamic page content
4. Update feature rendering with `{% include get-features.html %}`

## Error Handling

The system handles missing content gracefully:
- Missing translations return the key name
- Missing app info falls back to legacy config
- Missing page content returns the content key
- Missing features fall back to site.features

This ensures the site never breaks due to missing translations.
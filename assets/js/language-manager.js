// Enhanced Language Manager with preference memory and browser detection
window.languageManager = {
    supportedLanguages: ['zh', 'en'],
    defaultLanguage: 'zh',
    
    // 获取浏览器首选语言
    getBrowserLanguage: function() {
        try {
            // 获取浏览器语言列表
            const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
            
            for (let browserLang of browserLanguages) {
                // 标准化语言代码（如 zh-CN -> zh, en-US -> en）
                const normalizedLang = browserLang.toLowerCase().split('-')[0];
                
                // 检查是否支持该语言
                if (this.supportedLanguages.includes(normalizedLang)) {
                    return normalizedLang;
                }
            }
            
            // 如果没有匹配的语言，返回默认语言
            return this.defaultLanguage;
        } catch (error) {
            console.warn('Error detecting browser language:', error);
            return this.defaultLanguage;
        }
    },
    
    // 获取用户保存的语言偏好
    getSavedLanguage: function() {
        try {
            if (typeof Storage !== 'undefined' && localStorage) {
                const savedLang = localStorage.getItem('preferred_language');
                if (savedLang && this.supportedLanguages.includes(savedLang)) {
                    return savedLang;
                }
            }
        } catch (error) {
            console.warn('Error reading saved language preference:', error);
        }
        return null;
    },
    
    // 保存语言偏好
    saveLanguagePreference: function(language) {
        try {
            if (typeof Storage !== 'undefined' && localStorage) {
                localStorage.setItem('preferred_language', language);
                // 标记用户已经主动选择过语言
                localStorage.setItem('language_manually_selected', 'true');
            }
        } catch (error) {
            console.warn('Could not save language preference:', error);
        }
    },
    
    // 检查用户是否曾经主动选择过语言
    hasUserSelectedLanguage: function() {
        try {
            if (typeof Storage !== 'undefined' && localStorage) {
                return localStorage.getItem('language_manually_selected') === 'true';
            }
        } catch (error) {
            console.warn('Error checking language selection history:', error);
        }
        return false;
    },
    
    // 获取当前页面语言
    getCurrentLanguage: function() {
        const pathSegments = window.location.pathname.split('/').filter(segment => segment);
        if (pathSegments.length > 0 && this.supportedLanguages.includes(pathSegments[0])) {
            return pathSegments[0];
        }
        return this.defaultLanguage;
    },
    
    // 确定应该使用的语言（优先级：用户选择 > 浏览器语言 > 默认语言）
    getPreferredLanguage: function() {
        // 1. 首先检查用户保存的偏好
        const savedLanguage = this.getSavedLanguage();
        if (savedLanguage) {
            return savedLanguage;
        }
        
        // 2. 如果用户从未选择过语言，使用浏览器语言
        if (!this.hasUserSelectedLanguage()) {
            return this.getBrowserLanguage();
        }
        
        // 3. 最后使用默认语言
        return this.defaultLanguage;
    },
    
    // 自动语言检测和重定向
    autoDetectAndRedirect: function() {
        try {
            const currentLanguage = this.getCurrentLanguage();
            const preferredLanguage = this.getPreferredLanguage();
            
            // 如果当前语言与偏好语言不同，进行重定向
            if (currentLanguage !== preferredLanguage) {
                console.log(`Auto-redirecting from ${currentLanguage} to ${preferredLanguage}`);
                this.selectLanguage(preferredLanguage, false); // false 表示不是用户主动选择
            }
        } catch (error) {
            console.error('Error in auto language detection:', error);
        }
    },
    
    // 选择语言并重定向
    selectLanguage: function(language, isUserSelection = true) {
        try {
            // 验证语言
            if (!this.supportedLanguages.includes(language)) {
                console.warn('Unsupported language:', language);
                language = this.defaultLanguage;
            }
            
            const currentPath = window.location.pathname;
            const pathSegments = currentPath.split('/').filter(segment => segment);
            
            // 移除当前路径中的语言前缀
            if (this.supportedLanguages.includes(pathSegments[0])) {
                pathSegments.shift();
            }
            
            // 构建新路径
            let newPath;
            if (language === this.defaultLanguage) {
                newPath = '/' + pathSegments.join('/');
            } else {
                newPath = '/' + language + '/' + pathSegments.join('/');
            }
            
            // 确保路径格式正确
            if (newPath !== '/' && newPath.endsWith('/')) {
                newPath = newPath.slice(0, -1);
            }
            
            if (newPath === '') {
                newPath = '/';
            }
            
            // 保存语言偏好（只有用户主动选择时才标记为手动选择）
            if (isUserSelection) {
                this.saveLanguagePreference(language);
            } else {
                // 自动检测时只保存语言，不标记为手动选择
                try {
                    if (typeof Storage !== 'undefined' && localStorage) {
                        localStorage.setItem('preferred_language', language);
                    }
                } catch (e) {
                    console.warn('Could not save language preference:', e);
                }
            }
            
            // 重定向到新URL
            window.location.href = newPath;
            
        } catch (error) {
            console.error('Error in language selection:', error);
        }
    },
    
    // 初始化语言管理器
    init: function() {
        try {
            // 页面加载完成后进行自动语言检测
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    // 延迟执行，确保页面完全加载
                    setTimeout(() => this.autoDetectAndRedirect(), 100);
                });
            } else {
                // 如果页面已经加载完成，立即执行
                setTimeout(() => this.autoDetectAndRedirect(), 100);
            }
        } catch (error) {
            console.error('Error initializing language manager:', error);
        }
    }
};

// 自动初始化语言管理器
window.languageManager.init();
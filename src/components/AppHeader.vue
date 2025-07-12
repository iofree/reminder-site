<template>
  <header>
    <div class="logo">
      <div class="appIconShadow">
        <svg width="0" height="0">
          <defs>
            <clipPath id="shape">
              <path id="shape" class="cls-1" d="M6181.23,233.709v-1.792c0-.5-0.02-1-0.02-1.523a24.257,24.257,0,0,0-.28-3.3,11.207,11.207,0,0,0-1.04-3.132,10.683,10.683,0,0,0-1.95-2.679,10.384,10.384,0,0,0-2.68-1.943,10.806,10.806,0,0,0-3.13-1.038,19.588,19.588,0,0,0-3.3-.285c-0.5-.017-1-0.017-1.52-0.017h-22.39c-0.51,0-1.01.017-1.53,0.017a24.041,24.041,0,0,0-3.3.285,11.009,11.009,0,0,0-3.13,1.038,10.491,10.491,0,0,0-4.62,4.622,10.893,10.893,0,0,0-1.04,3.132,19.2,19.2,0,0,0-.28,3.3c-0.02.5-.02,1-0.02,1.523v22.392c0,0.5.02,1,.02,1.524a24.257,24.257,0,0,0,.28,3.3,10.9,10.9,0,0,0,1.04,3.132,10.491,10.491,0,0,0,4.62,4.622,11.04,11.04,0,0,0,3.13,1.038,19.891,19.891,0,0,0,3.3.285c0.51,0.017,1.01.017,1.53,0.017h22.39c0.5,0,1-.017,1.52-0.017a24.221,24.221,0,0,0,3.3-.285,10.836,10.836,0,0,0,3.13-1.038,10.408,10.408,0,0,0,2.68-1.943,10.683,10.683,0,0,0,1.95-2.679,11.217,11.217,0,0,0,1.04-3.132,20.257,20.257,0,0,0,.28-3.3c0.02-.5.02-1,0.02-1.524v-20.6h0Z" transform="translate(-6131 -218)"/>
            </clipPath>
          </defs>
        </svg>
        <router-link v-if="$route.path !== '/'" to="/" target="_self">
          <img class="headerIcon" :src="siteConfig.app_icon" alt="App Icon">
        </router-link>
        <img v-else class="headerIcon" :src="siteConfig.app_icon" alt="App Icon">
        <div class="divider"></div>
      </div>
      <p class="headerName">{{ siteConfig.app_name }}</p>
    </div>
    <LanguageSwitcher />
    <nav class="scroll">
      <ul>
        <li><router-link to="/help" target="_self">{{ languageStore.t.nav.help }}</router-link></li>
        <li><router-link to="/privacy" target="_self">{{ languageStore.t.nav.privacy }}</router-link></li>
        <li><router-link to="/terms" target="_self">{{ languageStore.t.nav.terms }}</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { siteConfig } from '@/config/site'
import LanguageSwitcher from './LanguageSwitcher.vue'

const languageStore = useLanguageStore()
</script>

<style scoped>
header {
  grid-area: h;
  display: flex;
  margin-right: -15px;
}

.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 115px;
  margin-right: 30px;
}

.logo > p {
  color: #ffffff;
  white-space: nowrap;
  display: flex;
  font-weight: bold;
  margin-left: 15px;
}

@media only screen and (max-width: 768px) {
  .logo {
    height: 80px;
    margin-right: 0px;
  }

  .logo > p {
    display: none;
  }
}

.headerIcon {
  width: 50px;
  height: 50px;
  -webkit-clip-path: url(#shape);
  clip-path: url(#shape);
}

@media only screen and (max-width: 768px) {
  .divider {
    position: relative;
    min-width: 1px;
    max-width: 1px;
    background-color: rgba(127, 127, 127, 0.2);
    display: inline-block;
    margin-left: 15px;
  }
}

.scroll {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  height: 115px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

@media only screen and (max-width: 768px) {
  .scroll {
    height: 80px;
    padding-top: 100px;
    padding-bottom: 100px;
    margin-top: -60px;
    justify-content: flex-start;
  }
}

.scroll::-webkit-scrollbar {
  display: none;
}

nav > ul {
  color: #fff;
  display: flex;
  list-style-type: none;
}

nav > ul li {
  padding-left: 30px;
}

@media only screen and (max-width: 768px) {
  nav > ul li {
    padding-left: 20px;
  }
}

nav > ul li:first-child {
  padding-left: 0px;
  padding-left: 15px;
}

nav > ul li:last-child {
  padding-right: 15px;
}

nav > ul li a:link,
nav > ul li a:visited {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
}

nav > ul li a:hover,
nav > ul li a:active {
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
}
</style>
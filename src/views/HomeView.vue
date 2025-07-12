<template>
  <div class="imageWrapper">
    <div class="headerBackground">
      <div class="container">
        <AppHeader />
        <PhonePreview />
        <div class="appInfo">
          <div class="appIconShadow">
            <svg width="0" height="0">
              <defs>
                <clipPath id="shape120">
                  <path id="shape" class="cls-1"
                        d="M6821,495.533v-4.281c0-1.2-.04-2.4-0.04-3.642a57.7,57.7,0,0,0-.68-7.882,26.144,26.144,0,0,0-2.48-7.483,25.115,25.115,0,0,0-11.04-11.044,26.118,26.118,0,0,0-7.49-2.481,47.28,47.28,0,0,0-7.88-.68c-1.2-.04-2.4-0.04-3.64-0.04h-53.5c-1.2,0-2.4.04-3.64,0.04a57.813,57.813,0,0,0-7.88.68,26.323,26.323,0,0,0-7.49,2.481,25.115,25.115,0,0,0-11.04,11.044,26.144,26.144,0,0,0-2.48,7.483,47.313,47.313,0,0,0-.68,7.882c-0.04,1.2-.04,2.4-0.04,3.642v53.5c0,1.2.04,2.4,0.04,3.641a57.7,57.7,0,0,0,.68,7.883,26.137,26.137,0,0,0,2.48,7.482,25.115,25.115,0,0,0,11.04,11.044,26.261,26.261,0,0,0,7.49,2.481,47.28,47.28,0,0,0,7.88.68c1.2,0.04,2.4.04,3.64,0.04h53.5c1.2,0,2.4-.04,3.64-0.04a57.654,57.654,0,0,0,7.88-.68,26.057,26.057,0,0,0,7.49-2.481,25.115,25.115,0,0,0,11.04-11.044,26.137,26.137,0,0,0,2.48-7.482,47.316,47.316,0,0,0,.68-7.883c0.04-1.2.04-2.4,0.04-3.641V495.533h0Z"
                        transform="translate(-6701 -458)" filter="url(#f1)"/>
                </clipPath>
              </defs>
            </svg>
            <img class="appIconLarge" :src="siteConfig.app_icon" alt="App Icon">
          </div>
          <div class="appNamePriceContainer">
            <h1 class="appName">
              {{ languageStore.currentLanguage === 'en' ? languageStore.t.site.title : siteConfig.app_name }}
            </h1>
            <h2 class="appPrice">
              {{ siteConfig.app_price }}
            </h2>
          </div>
          <div class="appDescriptionContainer">
            <p class="appDescription">
              {{ languageStore.currentLanguage === 'en' ? languageStore.t.site.description : siteConfig.app_description }}
            </p>
          </div>
          <div class="downloadButtonsContainer">
            <a v-if="siteConfig.playstore_link" class="playStoreLink" :href="siteConfig.playstore_link">
              <img class="playStore" src="/assets/playstore.png" alt="Google Play">
            </a>
            <a class="appStoreLink" :href="siteConfig.appstore_link">
              <img class="appStore" src="/assets/appstore.png" alt="App Store">
            </a>
          </div>
        </div>
        <FeatureList />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { siteConfig } from '@/config/site'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import FeatureList from '@/components/FeatureList.vue'
import PhonePreview from '@/components/PhonePreview.vue'

const languageStore = useLanguageStore()
</script>

<style scoped>
.imageWrapper {
  height: 714px;
  background: 
    linear-gradient(
      rgba(54, 59, 61, 0.8), 
      rgba(54, 59, 61, 0.8)
    ),
    url('/assets/headerimage.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  border-radius: 0px 0px 40px 40px;
}

.headerBackground {
  height: 115px;
  background-color: rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 768px) {
  .headerBackground {
    height: 80px;
  }
}

.container {
  display: grid;
  margin: auto;
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 115px 876px auto auto;
  grid-column-gap: 30px;
  grid-template-areas: 
    "h h h h h h h h h h h h"
    "p p p p p i i i i i i i"
    "c c c c c c c c c c c c"
    "f f f f f f f f f f f f";
}

@media only screen and (max-width: 768px) {
  .container {
    grid-template-rows: 80px 811px auto auto;
  }
}

@media only screen and (max-width: 992px) {
  .container {
    grid-column-gap: 0px;
    grid-template-columns: 1;
    grid-template-rows: 115px auto auto auto auto;
    grid-template-areas: 
      "h h h h h h h h h h h h"
      "i i i i i i i i i i i i"
      "p p p p p p p p p p p p"
      "c c c c c c c c c c c c"
      "f f f f f f f f f f f f";
  }
}

.appInfo {
  grid-area: i;
  display: flex;
  flex-wrap: wrap;
  padding-top: 140px;
  align-content: flex-start;
}

@media only screen and (max-width: 992px) {
  .appInfo {
    padding-top: 50px;
    justify-content: center;
  }
}

.appIconShadow {
  display: flex;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
}

.appIconLarge {
  width: 120px;
  height: 120px;
  -webkit-clip-path: url(#shape120);
  clip-path: url(#shape120);
}

.appNamePriceContainer {
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 30px;
}

.appName {
  color: #ffffff;
}

.appPrice {
  color: #ffffff;
  font-weight: normal;
  margin-top: 13px;
}

@media only screen and (max-width: 768px) {
  .appNamePriceContainer {
    width: 100%;
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  }

  .appName {
    margin-top: 30px;
    text-align: center;
  }
  
  .appPrice {
    margin-top: 13px;
    text-align: center;
  }
}

.appDescriptionContainer {
  font-size: 2.5rem;
  font-weight: normal;
  width: 100%;
  align-items: flex-start;
  margin-top: 45px;
  flex: 0 1 auto;
  line-height: 1.5;
}

.appDescription {
  color: #ffffff;
}

@media only screen and (max-width: 992px) {
  .appDescription {
    text-align: center;
  }
}

.downloadButtonsContainer {
  display: inline-block;
  margin-top: 42px;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.1)) drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2));
}

@media only screen and (max-width: 992px) {
  .downloadButtonsContainer {
    text-align: center;
  }
}

.playStore {
  height: 75px;
  margin-right: 24px;
}

@media only screen and (max-width: 992px) {
  .playStore {
    margin-right: 24px;
    margin-bottom: 0px;
  }
}

@media only screen and (max-width: 528px) {
  .playStore {
    margin-right: 0px;
    margin-bottom: 24px;
  }
}

.appStore {
  height: 75px;
}
</style>
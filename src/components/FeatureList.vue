<template>
  <div class="features">
    <div v-for="(feature, index) in siteConfig.features" :key="index" class="feature">
      <div>
        <span class="fa-stack fa-1x">
          <i class="iconBack fas fa-circle fa-stack-2x"></i>
          <i class="iconTop fas" :class="`fa-${feature.fontawesome_icon_name}`" class="fa-stack-1x"></i>
        </span>
      </div>
      <div class="featureText">
        <h3>{{ getFeatureTitle(index) }}</h3>
        <p>{{ getFeatureDescription(index) }}</p>
      </div>
    </div>

    <div class="images">
      <img 
        v-for="(img, index) in siteConfig.images" 
        :key="index" 
        :src="img.url" 
        alt="" 
        width="300"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { siteConfig } from '@/config/site'

const languageStore = useLanguageStore()

const getFeatureTitle = (index: number): string => {
  const featureKeys = ['cycle_reminder', 'countdown_clock', 'timeline_reminder', 'clipboard_recognition', 'dark_light_mode']
  const key = featureKeys[index] as keyof typeof languageStore.t.features
  return key ? languageStore.t.features[key].title : siteConfig.features[index].title
}

const getFeatureDescription = (index: number): string => {
  const featureKeys = ['cycle_reminder', 'countdown_clock', 'timeline_reminder', 'clipboard_recognition', 'dark_light_mode']
  const key = featureKeys[index] as keyof typeof languageStore.t.features
  return key ? languageStore.t.features[key].description : siteConfig.features[index].description
}
</script>

<style scoped>
.features {
  grid-area: c;
  display: flex;
  flex: 0 1 auto;
  align-content: flex-start;
  justify-content: flex-start;
  flex-grow: 1;
  flex-wrap: wrap;
  margin-top: 93px;
}

.feature {
  display: flex;
  padding-top: 63px;
  padding-left: 15px;
  padding-right: 15px;
  width: calc(100%/3);
  )
}

.feature:nth-child(-n+3) {
  padding-top: 0px;
}

.feature:nth-child(3n) {
  padding-right: 0px;
}

.feature:nth-child(3n+1) {
  padding-left: 0px;
}

.iconBack {
  color: #e6e6e6;
}

.iconTop {
  color: #1d63ea;
}

.featureText {
  margin-left: 18px;
}

.featureText > h3 {
  color: #000000;
}

.featureText > p {
  color: #666666;
  margin-top: 8px;
  line-height: 1.5;
}

.images {
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.images img {
  margin: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

@media only screen and (max-width: 992px) {
  .features {
    flex-grow: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 11px;
  }

  .feature {
    display: flex;
    padding-top: 41px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }

  .feature:nth-child(-n+3) {
    padding-top: 41px;
  }

  .feature:nth-child(1) {
    padding-top: 0px;
  }

  .feature:nth-child(3n) {
    padding-right: 15px;
  }
  
  .feature:nth-child(3n+1) {
    padding-left: 15px;
  }
}

@media only screen and (max-width: 375px) {
  .features {
    flex-grow: 1;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 11px;
  }

  .feature {
    display: flex;
    padding-top: 41px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }

  .feature:nth-child(-n+3) {
    padding-top: 41px;
  }

  .feature:nth-child(1) {
    padding-top: 0px;
  }

  .feature:nth-child(3n) {
    padding-right: 0px;
  }
  
  .feature:nth-child(3n+1) {
    padding-left: 0px;
  }
}
</style>
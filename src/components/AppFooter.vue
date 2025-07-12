<template>
  <footer>
    <p v-if="siteConfig.your_name" class="footerText">
      {{ languageStore.t.footer.made_by }}
      <a v-if="siteConfig.your_link" :href="siteConfig.your_link">{{ siteConfig.your_name }}</a>
      <span v-else>{{ siteConfig.your_name }}</span>
      <span v-if="siteConfig.your_city">
        {{ languageStore.t.footer.in }} {{ siteConfig.your_city }}
      </span>
    </p>
    
    <div class="footerIcons">
      <a v-if="siteConfig.facebook_username" :href="`https://facebook.com/${siteConfig.facebook_username}`">
        <span class="fa-stack fa-1x">
          <i class="socialIconBack fas fa-circle fa-stack-2x"></i>
          <i class="socialIconTop fab fa-facebook fa-stack-1x"></i>
        </span>
      </a>

      <a v-if="siteConfig.twitter_username" :href="`https://twitter.com/${siteConfig.twitter_username}`">
        <span class="fa-stack fa-1x">
          <i class="socialIconBack fas fa-circle fa-stack-2x"></i>
          <i class="socialIconTop fab fa-twitter fa-stack-1x"></i>
        </span>
      </a>

      <a v-if="siteConfig.instagram_username" :href="`https://instagram.com/${siteConfig.instagram_username}`">
        <span class="fa-stack fa-1x">
          <i class="socialIconBack fas fa-circle fa-stack-2x"></i>
          <i class="socialIconTop fab fa-instagram fa-stack-1x"></i>
        </span>
      </a>

      <a v-if="siteConfig.github_username" :href="`https://github.com/${siteConfig.github_username}`">
        <span class="fa-stack fa-1x">
          <i class="socialIconBack fas fa-circle fa-stack-2x"></i>
          <i class="socialIconTop fab fa-github fa-stack-1x"></i>
        </span>
      </a>

      <a v-if="siteConfig.email_address" :href="`mailto:${siteConfig.email_address}`">
        <span class="fa-stack fa-1x">
          <i class="socialIconBack fas fa-circle fa-stack-2x"></i>
          <i class="socialIconTop fas fa-envelope fa-stack-1x"></i>
        </span>
      </a>
    </div>
    
    <div class="footerLinks">
      <router-link to="/help" target="_self">{{ languageStore.t.nav.help }}</router-link>
      <router-link to="/privacy" target="_self">{{ languageStore.t.nav.privacy }}</router-link>
      <router-link to="/terms" target="_self">{{ languageStore.t.nav.terms }}</router-link>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { siteConfig } from '@/config/site'

const languageStore = useLanguageStore()
</script>

<style scoped>
footer {
  grid-area: f;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.footerText {
  color: #666666;
  display: block;
  line-height: 1.5;
  width: 100%;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 70px;
}

.footerIcons {
  padding-bottom: 70px;
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
}

.footerLinks {
  display: flex;
  text-align: center;
  padding-bottom: 70px;
}

.footerLinks a {
  margin-right: 30px;
  color: #1d63ea;
  text-decoration: none;
}

.footerLinks a:last-child {
  margin-right: 0px;
}

.socialIconBack {
  color: #e6e6e6;
}

.socialIconTop {
  color: #666666;
}

@media only screen and (max-width: 768px) {
  .footerLinks {
    flex-direction: column;
  }

  .footerLinks a {
    justify-content: stretch;
    margin-right: 0px;
    margin-top: 20px;
  }

  .footerLinks a:first-child {
    margin-top: 0px;
  }
}

@media only screen and (max-width: 992px) {
  .footerText {
    color: #666666;
    display: block;
    line-height: 1.5;
    width: 100%;
    text-align: center;
    padding-top: 54px;
    padding-bottom: 61px;
  }
  
  .footerIcons {
    padding-bottom: 70px;
    display: flex;
  }
}
</style>
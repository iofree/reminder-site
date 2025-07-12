<template>
  <div class="page-wrapper">
    <div class="headerBackground subPageHeaderBackground">
      <div class="container subPageContainer">
        <AppHeader />
        <article class="page markdown-body">
          <h1>{{ languageStore.currentLanguage === 'en' ? 'Product Privacy Policy and Terms of Use' : '产品隐私政策与使用条款' }}</h1>
          
          <p v-if="languageStore.currentLanguage === 'en'">
            This application respects and protects the personal privacy rights of all users who use the service. In order to provide you with more accurate and personalized services, this application will use and disclose your personal information in accordance with the provisions of this privacy policy. However, this application will treat this information with a high degree of diligence and prudence. Except as otherwise provided in this privacy policy, this application will not disclose this information to the outside world or provide it to third parties without your prior permission. This application will update this privacy policy from time to time. When you agree to this application service use agreement, you are deemed to have agreed to the entire content of this privacy policy. This privacy policy is an integral part of this application service use agreement.
          </p>
          <p v-else>
            本应用尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本应用会按照本隐私权政策的规定使用和披露您的个人信息。但本应用将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本应用不会将这些信息对外披露或向第三方提供。本应用会不时更新本隐私权政策。 您在同意本应用服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本应用服务使用协议不可分割的一部分。
          </p>

          <!-- 继续添加隐私政策的其他内容... -->
          <div v-if="languageStore.currentLanguage === 'en'">
            <h2>1. Scope of Application</h2>
            <p>(A) Personal registration information you provide according to the requirements of this application when you register for this application account.</p>
            <p>(B) When you use this application network service or visit this application platform webpage, this application automatically receives and records information on your browser and computer, including but not limited to your IP address, browser type, language used, access date and time, software and hardware feature information, and webpage records you require;</p>
            <p>(C) User personal data obtained by this application from business partners through legal channels.</p>
            
            <h2>2. Information Use</h2>
            <p>(A) This application will not provide, sell, rent, share or trade your personal information to any unrelated third party, unless you have obtained your permission in advance, or the third party and this application (including this application affiliated companies) provide services for you alone or jointly, and after the service ends, it will be prohibited from accessing all these materials that it was previously able to access.</p>
            
            <h2>3. Information Disclosure</h2>
            <p>Under the following circumstances, this application will disclose your personal information in whole or in part according to your personal wishes or legal provisions:</p>
            
            <h2>4. Information Security</h2>
            <p>(A) This application accounts have security protection functions. Please keep your username and password information properly. This application will ensure that your information is not lost, abused and altered through security measures such as encrypting user passwords.</p>
          </div>
          
          <div v-else>
            <h2>1. 适用范围</h2>
            <p>(A) 在您注册本应用帐号时，您根据本应用要求提供的个人注册信息。</p>
            <p>(B) 在您使用本应用网络服务，或访问本应用平台网页时，本应用自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；</p>
            <p>(C) 本应用通过合法途径从商业伙伴处取得的用户个人数据。</p>
            
            <h2>2. 信息使用</h2>
            <p>(A)本应用不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和本应用（含本应用关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。</p>
            
            <h2>3. 信息披露</h2>
            <p>在如下情况下，本应用将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：</p>
            
            <h2>4. 信息安全</h2>
            <p>(A) 本应用帐号均有安全保护功能，请妥善保管您的用户名及密码信息。本应用将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import AppHeader from '@/components/AppHeader.vue'

const languageStore = useLanguageStore()
</script>

<style scoped>
.page-wrapper {
  background-color: #fff;
}

.subPageHeaderBackground {
  background-color: #fff;
}

.subPageHeaderBackground .logo > p {
  color: #000;
}

.container {
  display: grid;
  margin: auto;
  max-width: 1170px;
  padding-left: 15px;
  padding-right: 15px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 115px auto auto auto;
  grid-column-gap: 30px;
  grid-template-areas: 
    "h h h h h h h h h h h h"
    "p p p p p p p p p p p p"
    "c c c c c c c c c c c c"
    "f f f f f f f f f f f f";
  background-color: #fff;
}

.page {
  margin-top: 30px;
  margin-bottom: 70px;
  grid-column: 3/11;
}

@media only screen and (max-width: 768px) {
  .page {
    margin-top: 30px;
    margin-bottom: 70px;
    grid-column: 1/-1;
  }
}
</style>
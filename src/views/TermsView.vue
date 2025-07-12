<template>
  <div class="page-wrapper">
    <div class="headerBackground subPageHeaderBackground">
      <div class="container subPageContainer">
        <AppHeader />
        <article class="page markdown-body">
          <h1>{{ languageStore.currentLanguage === 'en' ? 'Subscription Service Agreement' : '订阅服务协议' }}</h1>
          
          <p v-if="languageStore.currentLanguage === 'en'">
            This rule is regarded as a supplementary agreement to the "Member Service Agreement" and is an integral part of it, forming a unified whole with it. If there is a conflict between this rule and the "Member Service Agreement", this rule shall prevail. If you need to use the VIP auto-renewal service, you need to agree to this rule.
          </p>
          <p v-else>
            本规则被视为《会员服务协议》的补充协议，是其不可分割的组成部分，与其构成统一整体，如本规则与《会员服务协议》存在冲突的，以本规则为准。如您需使用VIP自动续费服务，则需同意本规则。
          </p>

          <p v-if="languageStore.currentLanguage === 'en'">You understand and agree:</p>
          <p v-else>您理解并同意：</p>

          <div v-if="languageStore.currentLanguage === 'en'">
            <p>1. Service Name: Auto-renewal.</p>
            
            <p>2. This service is provided to you on the premise that you have already activated VIP service. If you activate VIP service, you are deemed to authorize VIP to deduct the next billing cycle monthly fee from your iTunes account (hereinafter collectively referred to as "account") balance when your VIP service is about to expire.</p>
            
            <p>VIP has two subscription options available:</p>
            <ul>
              <li>1 month, auto-renew every 1 month</li>
              <li>12 months, auto-renew every 12 months</li>
            </ul>
            
            <p>3. Accounts that purchase auto-renewal VIP will automatically renew and deduct corresponding fees 24 hours before expiration.</p>
            
            <p>4. If you need to cancel auto-renewal, please operate to cancel at least 24 hours in advance. You can stop or terminate this service through the following methods:</p>
            
            <p>Unsubscribe Method 1: In the "Manage My Subscriptions" in the App, cancel the VIP subscription.</p>
            
            <p>Unsubscribe Method 2: Apple in-app payment (IAP payment, in-app purchase) auto-renewal users unsubscribe method is as follows: Open Apple phone "Settings" --> Enter "iTunes Store & App Store" --> Click "Apple ID", select "View Apple ID", enter "Account Settings" page, click "Subscriptions", select VIP to cancel subscription.</p>
            
            <p>5. The same Apple ID can only activate auto-renewal service for one account.</p>
          </div>
          
          <div v-else>
            <p>1、服务名称：自动续费。</p>
            
            <p>2、本服务是在您已开通VIP服务的前提下，为您提供的自动续费服务。如您开通VIP服务，则视为您授权VIP有权在您的VIP服务即将到期时，从您的iTunes账户（以下统称"账户"）余额中代扣下一个计费周期包月费。</p>
            
            <p>VIP有两种种订购方式可供选择：</p>
            <ul>
              <li>1个月，每1个月自动续订</li>
              <li>12个月，每12个月自动续订</li>
            </ul>
            
            <p>3、购买自动续费VIP的账号，会在到期前24小时，自动续订并扣除相应费用。</p>
            
            <p>4、如需取消自动续订，请至少提前24小时操作取消。您可通过下述方式中止或终止本服务：</p>
            
            <p>退订方法一：在App中的"管理我的订阅"中，取消VIP的订阅。</p>
            
            <p>退订方法二：苹果应用内支付（IAP支付，in-app purchase）自动续费用户退订方法如下： 打开苹果手机"设置" --> 进入"iTunes Store 与 App Store"-->点击 "Apple ID"，选择"查看Apple ID"，进入"账户设置"页面，点击"订阅"，选择VIP取消订阅即可。</p>
            
            <p>5、同一个appleid只能给一个账号开通自动续费服务。</p>
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
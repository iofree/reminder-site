<template>
  <div class="page-wrapper">
    <div class="headerBackground subPageHeaderBackground">
      <div class="container subPageContainer">
        <AppHeader />
        <article class="page markdown-body">
          <h1>{{ languageStore.currentLanguage === 'en' ? 'Never Forget Reminder' : '不忘提醒' }}</h1>
          
          <p v-if="languageStore.currentLanguage === 'en'">
            Never Forget Reminder is a powerful memo application that provides rich reminder functions and automatic date and time recognition, helping users manage time more efficiently.
          </p>
          <p v-else>
            不忘提醒是一款强大的备忘录应用，它提供了丰富的提醒功能和自动识别日期时间的功能，帮助用户更高效地管理时间。
          </p>

          <p v-if="languageStore.currentLanguage === 'en'">
            The application supports multiple reminder methods, including recurring reminders, future reminders, countdown reminders, and lunar calendar reminders.
          </p>
          <p v-else>
            该应用支持多种提醒方式，包括重复提醒、未来提醒、倒计时提醒和农历提醒等。
          </p>

          <p v-if="languageStore.currentLanguage === 'en'">
            Users can set reminder times according to their needs, such as daily, monthly, yearly, or on a specific day of the week. Chinese people often need to celebrate lunar birthdays, so this application also supports lunar birthday reminders.
          </p>
          <p v-else>
            用户可以根据自己的需求设置提醒时间，比如每天、每月、每年或每周的某一天。 中国人常常需要过农历生日，所以本应用还支持了农历生日提醒。
          </p>

          <p v-if="languageStore.currentLanguage === 'en'">
            Users can also enable power reminders to let the application continuously remind users to complete tasks and improve work efficiency.
          </p>
          <p v-else>
            用户还可以开启强力提醒，让应用不断提醒用户完成任务，提高工作效率。
          </p>

          <p v-if="languageStore.currentLanguage === 'en'">
            In addition, the application also supports automatic recognition of date and time in the clipboard, so users can quickly create reminders without manually entering time. At the same time, users can also turn off the clipboard function in settings to ensure personal privacy and security.
          </p>
          <p v-else>
            另外，该应用还支持自动识别剪切板中的日期时间，这样用户就可以快速创建提醒，不用再手动输入时间。同时，用户也可以在设置中关闭剪切板功能，以保证个人隐私安全。
          </p>

          <p v-if="languageStore.currentLanguage === 'en'">
            Furthermore, the application also supports offline work, and all data is stored locally without the need to register an account. This allows users to use the application without connecting to the Internet, further improving work efficiency.
          </p>
          <p v-else>
            此外，该应用还支持离线工作，所有数据都存储在本地，不需要注册账户。这样用户就可以在不连接互联网的情况下使用该应用，进一步提高工作效率。
          </p>

          <div class="image-gallery">
            <img src="/assets/img/1.png" alt="Screenshot 1" height="500">
            <img src="/assets/img/2.png" alt="Screenshot 2" height="500">
            <img src="/assets/img/3.png" alt="Screenshot 3" height="500">
          </div>

          <h2 v-if="languageStore.currentLanguage === 'en'">What is Power Reminder</h2>
          <h2 v-else>什么是强力提醒</h2>

          <p v-if="languageStore.currentLanguage === 'en'">
            Power reminder means that when the user has not completed a certain task, the application will continuously remind the user to complete the task. This reminder method can help users focus more on the current task and avoid forgetting to complete important things due to distraction. Power reminders can help users focus more when working or studying, improving efficiency.
          </p>
          <p v-else>
            强力提醒是指当用户没有完成某项任务时，应用会持续提醒用户完成该任务。这种提醒方式可以帮助用户更加专注于当前的任务，避免因为分心而忘记完成重要的事情。强力提醒可以让用户在工作或学习时更加专注，提高效率。
          </p>

          <img src="/assets/img/5.png" alt="Power Reminder" height="600">

          <h2 v-if="languageStore.currentLanguage === 'en'">Lunar Calendar Support</h2>
          <h2 v-else>支持阴历</h2>

          <p v-if="languageStore.currentLanguage === 'en'">
            The lunar calendar (also called the lunar leap month calendar) is a calendar calculated based on the moon's orbit cycle, which is China's traditional agricultural calendar. Many Chinese people still celebrate lunar birthdays, but many applications do not support the lunar calendar because it is different from the Gregorian calendar. The lunar calendar dates change every year on the Gregorian calendar, and when there are leap months, the dates may not exist every year. In Never Forget Reminder, users can set annual reminders according to the lunar calendar, such as reminding themselves on their lunar birthday every year. The application will automatically calculate when encountering leap months and other situations.
          </p>
          <p v-else>
            阴历（也称阴闰月历）是根据月亮的运行周期来计算的历法，它是中国传统的农历。很多中国人还过农历生日，但是很多应用并不支持农历，因为他和公历不太一样，农历日期在公历上每年的日期都会变化，遇到闰月日子可能还不是每年都有。不忘提醒中用户可以根据阴历来设置每年的提醒，比如在每年的农历生日提醒自己，遇到闰月等情况应用也会自动计算。
          </p>

          <h2 v-if="languageStore.currentLanguage === 'en'">Widgets</h2>
          <h2 v-else>小组件</h2>

          <p v-if="languageStore.currentLanguage === 'en'">
            Never Forget Reminder supports widgets to display the most recent upcoming to-do items and recent annual reminders (anniversaries, birthdays, etc.). Users can conveniently view them on the desktop.
          </p>
          <p v-else>
            不忘提醒支持小组件来展示最近即将要完成的代办事项，以及最近的每年提醒（纪念日，生日等），用户可以方便的在桌面查看。
          </p>

          <img src="/assets/img/7.png" alt="Widgets" height="600">

          <h1 v-if="languageStore.currentLanguage === 'en'">Contact Us</h1>
          <h1 v-else>联系我们</h1>

          <p v-if="languageStore.currentLanguage === 'en'">
            If you encounter problems during use or have any suggestions, please contact us.
          </p>
          <p v-else>
            如果您在使用过程中遇到问题，或者有任何建议，请联系我们。
          </p>

          <ul>
            <li v-if="languageStore.currentLanguage === 'en'">Email: <a href="mailto:admin@iofree.xyz">admin@iofree.xyz</a></li>
            <li v-else>邮件: <a href="mailto:admin@iofree.xyz">admin@iofree.xyz</a></li>
            
            <li>QQ {{ languageStore.currentLanguage === 'en' ? 'Group' : '群' }}: <a href="https://jq.qq.com/?_wv=1027&k=JS74kp2g">762894053</a></li>
            <li>Twitter: <a href="https://twitter.com/Allen_Xuxu">Allen</a></li>
            
            <li v-if="languageStore.currentLanguage === 'en'">Weibo: <a href="https://weibo.com/u/5894049515">顾_惜朝</a></li>
            <li v-else>微博: <a href="https://weibo.com/u/5894049515">顾_惜朝</a></li>
          </ul>
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

.image-gallery {
  display: flex;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
  justify-content: center;
}

.image-gallery img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}
</style>
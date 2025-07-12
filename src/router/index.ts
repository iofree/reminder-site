@@ .. @@
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
+import HelpView from '../views/HelpView.vue'
+import PrivacyView from '../views/PrivacyView.vue'
+import TermsView from '../views/TermsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
+    {
+      path: '/help',
+      name: 'help',
+      component: HelpView
+    },
+    {
+      path: '/privacy',
+      name: 'privacy',
+      component: PrivacyView
+    },
+    {
+      path: '/terms',
+      name: 'terms',
+      component: TermsView
+    },
+    // English routes
+    {
+      path: '/en',
+      name: 'home-en',
+      component: HomeView
+    },
+    {
+      path: '/en/help',
+      name: 'help-en',
+      component: HelpView
+    },
+    {
+      path: '/en/privacy',
+      name: 'privacy-en',
+      component: PrivacyView
+    },
+    {
+      path: '/en/terms',
+      name: 'terms-en',
+      component: TermsView
+    },
    {
      path: '/about',
      name: 'about',
@@ .. @@
    }
  ]
})

export default router
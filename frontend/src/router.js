import { createRouter, createWebHashHistory } from "vue-router";
import MainContent from "./components/MainContent.vue";
import CountryPage from "./components/CountryPage.vue";

const routes = [
  { path: "/",
    name: "Home",
   component: MainContent
  },
  { path: "/country/:name",
    name: "Country",
    component: CountryPage
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

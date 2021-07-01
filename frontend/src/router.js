import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import CountryPage from "./views/CountryPage.vue";

const routes = [
  { path: "/",
    name: "Home",
   component: HomePage
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

import { createApp, provide, h } from "vue";
import "./style.css";
import App from "./App.vue";
import themeProvider from "./components/themeProvider.vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createRouter, createWebHistory } from "vue-router";
import aboutPage from "./pages/aboutPage.vue";
import homePage from "./pages/homePage.vue";
import notFound from "./pages/notFound.vue";

// createApp(App).mount('#app')
//statemanagement and project
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com",
});
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
// app.use(themeProvider);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: homePage,
    },
    {
      path: "/about",
      component: aboutPage,
    },
    {
      path: "/:catchAll(.*)",
      component: notFound,
    },
  ],
});
app.use(router);

app.mount("#app");

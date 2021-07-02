<template>
  <Header v-on:switch-theme="switchTheme"/>
  <div class="container_page">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    components: {
        Header,
    },
    methods: {
      switchTheme() {
        if (localStorage.getItem('theme') === 'light') {
          localStorage.setItem('theme', 'dark');
          const body = document.querySelector('body');
          body.style.color = 'hsl(0, 0%, 98%)';
          body.style.backgroundColor = 'hsl(200, 15%, 8%)';
        } else {
          localStorage.setItem('theme', 'light');
          const body = document.querySelector('body');
          body.style.color = 'hsl(200, 15%, 8%)';
          body.style.backgroundColor = 'hsl(0, 0%, 98%)';
        }
      }
    },
    created() {
      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
      } else {
        this.theme = localStorage.getItem('theme');
      }
    }

}
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: hsl(200, 15%, 8%);
  background-color: hsl(0, 0%, 98%);
}
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
.container_page {
  padding: 2rem 4rem;
  min-height: 100vh;
}
</style>

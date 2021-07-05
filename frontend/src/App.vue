<template>
<div class="theme" :class="theme === 'light' ? '' : 'dark'">
  <Header :theme="theme" v-on:switch-theme="switchTheme"/>
  <div class="container_page">
    <router-view :key="$route.path" :theme="theme"></router-view>
  </div>
</div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    components: {
        Header,
    },
    data() {
      let theme;
      return {
        theme,
      }
    },
    methods: {
      switchTheme() {
        if (localStorage.getItem('theme') === 'light') {
          localStorage.setItem('theme', 'dark');
          this.theme = 'dark';
        } else {
          localStorage.setItem('theme', 'light');
          this.theme = 'light';
        }
      }
    },
    created() {
      if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
        this.theme = 'light';
      } else {
        this.theme = localStorage.getItem('theme');
      }
    }

}
</script>

<style>
.theme {
  color: hsl(200, 15%, 8%);
  background-color: hsl(0, 0%, 98%);
}
.dark {
  color: hsl(0, 0%, 100%);
  background-color:hsl(207, 26%, 17%);
}
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

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

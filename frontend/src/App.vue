<template>
  <Header />
  <div class="container_page">
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    components: {
        Header,
    }
}
</script>

<style>
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
  color: hsl(200, 15%, 8%);
  font-size: 14px;
  background-color: hsl(0, 0%, 98%);
}
.container_page {
  padding: 2rem 4rem;
  min-height: 100vh;
}
</style>

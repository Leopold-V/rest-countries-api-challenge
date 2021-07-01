<template>
  <Header />
  <div class="container_page">
    <router-view></router-view>
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
  color: #2c3e50;
  font-size: 14px;
}
.container_page {
  padding: 2rem 4rem;
}
</style>

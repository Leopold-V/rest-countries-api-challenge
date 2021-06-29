<template>
  <Header />
  <MainContent />
</template>

<script>
import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";

export default {
    components: {
        Header,
        MainContent
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
</style>

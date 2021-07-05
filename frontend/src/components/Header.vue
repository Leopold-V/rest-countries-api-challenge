<template>
  <div class="header" :class="theme === 'light' ? '' : 'dark'">
    <router-link to="/"><h1>Where in the world?</h1></router-link>
    <div id="theme_switch" @click="$emit('switch-theme')">
      <svg
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      <span style="margin-left: .5rem">Dark Mode</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      theme: {
          type: String,
          required: true,
      },
    },
}

</script>

<style scoped>
#theme_switch {
  display: flex;
  align-items: center;
  cursor: pointer;
}
h1 {
  font-size: 16px;
}
.header {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 .5rem rgba(0, 0, 0, .2);
  padding: 1rem 1.3rem;
}
.header.dark {
  background:hsl(209, 23%, 22%);
}
@media (min-width: 868px) {
  header {
    height: 2rem;
    padding: 1rem 4rem;
  }
}
</style>

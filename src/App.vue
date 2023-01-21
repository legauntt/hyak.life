<template>
  <div id="app">
    <HyakHeader />
    <router-view />
    <HyakFooter />
  </div>
</template>

<script lang="ts">
import HyakHeader from "@/components/HyakHeader.vue";
import HyakFooter from "@/components/HyakFooter.vue";

export default {
  name: "HomeView",
  components: {
    HyakHeader,
    HyakFooter,
  },
};
</script>

<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

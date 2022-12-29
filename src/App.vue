<template>
  <Header :logo="logo"/>
  <RouterView />
  <Footer />
</template>

// App.vue
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
 components: { Header, Footer },
 data() {
 },
 async created() {
 },
 methods: {

 }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

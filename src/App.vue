<template>
  <div id="app">
    <Header />
    <!-- <About />
    <Index /> -->
    
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Index from "./components/Index";
// import About from "./components/About";


import { router } from "./routes/router";

export default {
  name: "app",
  router,
  components: {
    Header,
    Footer
    // Index,
    // About
  }
};
</script>

<style>

@import "./assets/css/mycss.css";
@import "./assets/css/common.css";


</style>

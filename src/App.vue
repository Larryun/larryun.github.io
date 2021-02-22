<template>
  <div id="app">
    <b-container fluid class="p-0 m-0">
      <Header></Header>
      <About></About>
    </b-container>
  </div>
</template>

<script>
import About from "./components/About";
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    About,
    Header
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: Cambria, Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>

<template>
  <div id="app">
    <b-container fluid>
      <b-row class="justify-content-center">
          <Header></Header>
        <b-col sm="12" md="9" lg="7" xl="5">
          <NavComponent></NavComponent>
          <router-view></router-view>
<!--          <About></About>-->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import NavComponent from "./components/NavComponent";

export default {
  name: 'App',
  components: {
    NavComponent,
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

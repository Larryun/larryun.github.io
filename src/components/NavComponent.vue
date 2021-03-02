<template>
  <b-row class="justify-content-center pt-3">
    <b-col>
      <ul class="nav bg-light bg-light justify-content-center rounded-1 md-font">
        <li class="nav-item"><a class="nav-link" ><router-link to="/">Home</router-link></a></li>
        <li class="nav-item"><a class="nav-link" ><router-link to="/projects">Projects</router-link></a></li>
        <li class="nav-item"><a class="nav-link" ><router-link to="/resume">Resume</router-link></a></li>
        <li class="nav-item"><a class="nav-link" ><router-link to="/about">About Me</router-link></a></li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped>

</style>
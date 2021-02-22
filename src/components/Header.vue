<template>
  <b-container fluid>
    <b-row class="justify-content-center bg-dark">
      <b-col class="text-center text-white">
        <p class="m-0" id="my_name">Larry Un</p>
        <i class="">Student at UC Berkeley majoring in Comptuer Science</i>
        <ul class="list-inline m-2">
          <li class="list-inline-item">
            <a class="icon-link" href="https://linkedin.com/in/larryun">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="icon-link" href="https://github.com/larryun">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row class="row justify-content-center pt-3">
      <b-col sm="5" md="8" lg="3">
        <ul class="nav bg-light bg-light justify-content-center rounded-1">
          <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="">Resume</a></li>
          <li class="nav-item"><a class="nav-link" href="index.html">About</a></li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
@import "../assets/style.css";

</style>
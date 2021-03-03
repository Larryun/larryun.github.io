<template>
  <b-container fluid>
    <b-row class="justify-content-center bg-dark">
      <b-col class="text-center text-white">
        <p class="m-0" id="my_name">Larry Un</p>
        <i class="">Student at UC Berkeley majoring in Computer Science</i>
        <ul class="list-inline m-3">
          <li class="list-inline-item">
            <a class="icon-link" href="https://linkedin.com/in/larryun">
              <i class="fab fa-linkedin fa-3x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="icon-link" href="https://github.com/larryun">
              <i class="fab fa-github fa-3x"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="icon-link" href="mailto:larryun@berkeley.edu">
              <i class="fa fa-envelope fa-3x"></i>
            </a>
          </li>
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
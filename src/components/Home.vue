<template>
  <ParagraphComponent>
    <template v-slot:header>
      <div class="text-center display-3">
        Hello!
      </div>
    </template>
    <template v-slot:body>
      <p class="paragraph">
        I am <b>Larry</b>, currently studying Computer Science at University of California, Berkeley
        and actively seeking software engineering internships in Summer 2021
      </p>
      <p class="paragraph">
        Interest: <b>Computer Security</b>, <b>Computer Networking</b>, <b>Machine Learning</b>
        and <b>Biking</b>.
      </p>
    </template>
  </ParagraphComponent>
</template>

<script>
import ParagraphComponent from "./ParagraphComponent";

export default {
  name: "Home",
  components: {
    ParagraphComponent
  }
}
</script>

<style scoped>

</style>
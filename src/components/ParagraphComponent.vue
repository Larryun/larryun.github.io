<template>
  <div>
    <div class="pt-3">
      <slot name="header"></slot>
    </div>
    <slot name="body"></slot>
  </div>

</template>

<script>
export default {
  name: "ParagraphComponent"
}
</script>

<style scoped>
@import "../assets/style.css";

</style>
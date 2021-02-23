<template>
  <div>
      <slot name="header"></slot>
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
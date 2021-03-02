<template>
  <div class="pt-3 border-bottom">
    <b-row align-h="between">
      <b-col md="5" class="text-left h3 font-weight-bold mb-0">
        <slot name="name"></slot>
      </b-col>
      <b-col md="7" class="text-right h3 font-weight-bold mb-0">
        <slot name="date"></slot>
      </b-col>
    </b-row>
    <slot name="body"></slot>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent"
}
</script>

<style scoped>

</style>
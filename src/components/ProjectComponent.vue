<template>
  <div class="pt-3 border-bottom-thick">
    <b-row align-h="between">
      <b-col md="5" sm="12" class="text-left h2 font-weight-bold mb-0">
        <slot name="name"></slot>
      </b-col>
      <b-col md="7" sm="12" class="text-right h2 font-weight-bold mb-0">
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
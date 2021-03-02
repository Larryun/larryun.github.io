<template>
  <div class="pb-2">
    <template v-if="disabled">
      <a class="link-disabled" :id='"disabled-tooltip-target-" + id'>Github</a>
      <b-tooltip :target='"disabled-tooltip-target-" + id' triggers="hover">
        {{ tooltipText }}
      </b-tooltip>
    </template>
    <template v-else>
      <a href="">Github</a>
    </template>
  </div>
</template>

<script>
export default {
  name: "SourceCodeLinkComponent",
  props: {
    "id": {
      type: Number,
      required: true,
    },
    "disabled": {
      type: Boolean,
      required: true,
    },
    "tooltipText": {
      type: String,
      default: "Source code is not public due to course policy. " +
          "Please contact me for source code. "
    },
    "href": {
      type: String,
    }
  }

}
</script>

<style scoped>

</style>
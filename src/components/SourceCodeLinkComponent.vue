<template>
  <div class="m-2 p-2">
    <template v-if="disabled">
      <a class="link-disabled h3" target="_blank" :id='"disabled-tooltip-target-" + id'>{{text}}</a>
      <b-tooltip :target='"disabled-tooltip-target-" + id' triggers="hover">
        {{ tooltipText }}
      </b-tooltip>
    </template>
    <template v-else>
      <a :href="href" target="_blank" class="h3">{{text}}</a>
    </template>
  </div>
</template>

<script>
export default {
  name: "SourceCodeLinkComponent",
  props: {
    "id": {
    },
    "disabled": {
      type: Boolean,
      default: false,
    },
    "tooltipText": {
      type: String,
      default: "Source code is not public due to course policy. " +
          "Please contact me for source code. "
    },
    "href": {
      type: String,
    },
    "text": {
      type: String,
      required: true
    }

  }

}
</script>

<style scoped>

</style>
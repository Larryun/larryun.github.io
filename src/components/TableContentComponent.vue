<template>
  <div>
    <b-button variant="light" class="border-dark mt-3 table_content_button" v-b-toggle.table_content>Show table of
      Content
    </b-button>
    <b-collapse id="table_content" class="border-bottom">
      <ul class="paragraph mt-2">
        <li>
          <a href="" @click.prevent="scrollTo('pacman_ai')">Pacman AI</a>
        </li>
        <li>
          <a href="" @click.prevent="scrollTo('course_notify')">Course Notify</a>
          <ul>
            <li><a href="" @click.prevent="scrollTo('course_notify_tech_stack')">Tech Stack</a></li>
            <li><a href="" @click.prevent="scrollTo('course_notify_demo')">Demonstration</a></li>
          </ul>
        </li>
        <li>
          <a href="" @click.prevent="scrollTo('the_game')">The Game</a>
          <ul>
            <li><a href="" @click.prevent="scrollTo('the_game_demo')">Demonstration</a></li>
          </ul>
        </li>
        <li>
          <a href="" @click.prevent="scrollTo('planet_defenders')">Planet Defenders</a>
          <ul>
            <li><a href="" @click.prevent="scrollTo('planet_defender_demo')">Demonstration</a></li>
            <li><a href="" @click.prevent="scrollTo('planet_defender_backdoor_mode_demo')">Backdoor Mode Demonstration</a></li>
          </ul>
        </li>
      </ul>
    </b-collapse>

  </div>
</template>

<script>
export default {
  name: "TableContentComponent",
  props: ["vm"],
  methods: {
    scrollTo: function (name) {
      let element = this.vm.$refs[name]
      element.scrollIntoView({behavior: "smooth"});
    }
  }
}
</script>

<style scoped>

</style>
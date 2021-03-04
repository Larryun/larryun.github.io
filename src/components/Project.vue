<template>
  <b-container fluid class="">
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
      </ul>
    </b-collapse>
    <div class="text-center display-3 border-bottom-thick pb-3">
      Projects
    </div>
    <a ref="pacman_ai"></a>
    <ProjectComponent>
      <template v-slot:name>
        Pacman AI
      </template>
      <template v-slot:date>
        Jan 2021 - Current
      </template>
      <template v-slot:body>
        <p class="paragraph mb-1">
          School project for CS 188 (Intro to Artificial Intelligence) - A multi-agent AI for the Pacman game.
        </p>
        <div class="">
          <img src="../assets/img/pacman.gif" class="img-fluid"/>
          <i>Pacman minimax agent with search depth = 1</i>
        </div>
        <p class="paragraph">
          Implemented with <b>minimax algorithm</b> to search for the optimal action
          in this multi-agent environment and utilized <b>Alpha-Beta pruning</b> more efficient searching.
        </p>

        <p class="paragraph">
          The heuristic value is calculated based on the distance from the ghosts, current score and
          number of remain foods and capsules.
        </p>
        <SourceCodeLinkComponent id=1 :disabled="true" text="Github"/>
      </template>
    </ProjectComponent>

    <a ref="course_notify"></a>
    <ProjectComponent>
      <template v-slot:name>
        Course Notify
        <a href="http://coursenotify.com" target="_blank" class="icon-link-dark">
          <i class="fas fa-link fa-1x"></i>
        </a>
      </template>
      <template v-slot:date>
        Spring 2020 - Current
      </template>
      <template v-slot:body>
        <p class="paragraph mb-1">
          An easy-to-use course availability notification system for De Anza College and Foothill College.
          Assisted <b>130+</b> students to enrolls in highly in-demand courses and sent out <b>600+</b> notifications.
          <br>
        </p>
        <a ref="course_notify_tech_stack"></a>
        <div class="h3 font-weight-bold">Tech Stacks</div>
        <ul class="paragraph">
          <li>
            <b>Backend</b>
            <ul>
              <li>
                <b>Python</b>: for scraping, parsing and managing course data and users.
              </li>
              <li>
                <b>MongoDB</b>: storing course data, email addresses and remove keys.
              </li>
              <li>
                <b>Flask</b>: RESTful API endpoints for serving course data and opt-in/out.
              </li>
              <li>
                <b>AWS + Docker</b>: Hosted on AWS with Docker for quick deployment.
              </li>
            </ul>
          </li>
          <li>
            <b>Frontend</b>
            <ul>
              <li><b>Vue.js: Because it's awesome</b></li>
            </ul>
          </li>
        </ul>
        <a ref="course_notify_demo"></a>
        <div class="h3 font-weight-bold">
          Demonstrations
        </div>
        <p class="paragraph">
          Provide an email address and select courses to receive notifications about.
          <br>
          Opt-in example:
        </p>
        <b-row class="justify-content-center">
          <b-col xs="5" sm="7" md="7" lg="6">
            <img src="../assets/img/coursenotify_add.gif" width="100%" class="img-fluid d-block mx-auto"/>
          </b-col>
        </b-row>
        <div>
          <i>Opt-in with email address to receives courses availability notifications</i>
        </div>

        <p class="paragraph">
          Confirmation email is sent immediately after opt-in.
          <br>
          Confirmation email example:
        </p>
        <b-row class="justify-content-center">
          <b-col xs="6" sm="11" md="11" lg="10">
            <img src="../assets/img/coursenotify_email.png" width="100%" class="img-fluid d-block mx-auto"/>
          </b-col>
        </b-row>
        <div>
          <i>Confirmation email received; listed the course name, status, and a remove link for opt-out</i>
        </div>

        <p class="paragraph">
          Confirmation email is sent went course availability status is changed from
          <b>Full -> Open</b> / <b>Full -> Waitlist</b> / <b>Waitlist -> Open</b>
          <br>
          Notification email example:
        </p>
        <b-row class="justify-content-center">
          <b-col xs="6" sm="11" md="11" lg="10">
            <img src="../assets/img/coursenotify_notification.png" width="100%" class="img-fluid d-block mx-auto"/>
          </b-col>
        </b-row>
        <div>
          <i>Notification email received; listed the course name, status, and a remove link for opt-out</i>
        </div>

        <p class="paragraph">
          The <b>opt-out/remove</b> link will provide an URL with remove key for opt-out. Visiting the link
          will remove the email address from the watch list. Remove key is ensured to be unique.
          <br>
          Opt-out example when the URL is visited:
        </p>
        <b-row class="justify-content-center">
          <b-col xs="6" sm="11" md="11" lg="10">
            <img src="../assets/img/coursenotify_remove.gif" width="100%" class="img-fluid d-block mx-auto"/>
          </b-col>
        </b-row>
        <div>
          <i>Opt-out with the link provided</i>
        </div>
        <b-row class="justify-content-center">
          <SourceCodeLinkComponent
              href="https://github.com/larryun/coursenotify_web"
              text="Github(Frontend)"
          />
          <SourceCodeLinkComponent
              href="https://github.com/larryun/coursenotify_v2"
              text="Github(Backend)"
          />
        </b-row>
      </template>
    </ProjectComponent>

    <a ref="the_game"></a>
    <ProjectComponent>
      <template v-slot:name>
        CS 61B: The Game
      </template>
      <template v-slot:date>
        Fall 2020
      </template>
      <template v-slot:body>
        <p class="paragraph">
          Final project for CS61B (Data Structures) - A Roguelike game written in <b>Java</b> that utilized data
          structures and algorithms
          to create different features.
        </p>
        <p class="paragraph">
          We(A team of two) built a game with random generated worlds, enemies and infinite levels. The goal in each
          level for the player is to locate and collect all the pink items; player will advance to next level with
          higher difficult
          when all items is collected. The game ends when
          player's <i v-html="thumbNail('player')"/> health hit 0.
        </p>
        <p class="paragraph">
          There are two types of enemy:
        </p>
        <ul class="paragraph">
          <li><b>Stalker </b><img src="../assets/img/the_game_stalker.png"/> :
            The red spade; slowly follows the player (implemented with A* algorithm for finding the shortest path
            to the player), deals 1 damage if collided with player.
          </li>
          <li><b>Shooter </b><img src="../assets/img/the_game_shooter.png"/> : The grey rhombus shape; shoot bullets in
            four directions, deals 1 damage if collided with
            player.
          </li>
        </ul>
        <a ref="the_game_demo"></a>
        <div class="h3 font-weight-bold">Demonstrations</div>
        <p class="paragraph">
          This is a regular gameplay where the player collects all the items and successfully advance to next level.
          If we press <b>E</b>, the player shoot a yellow laser beam(with cool-down time of 5 ticks) that destroy
          everything on its path.
        </p>
        <img src="../assets/img/the_game_gameplay.gif" class="img-fluid">
        <i>The player collected all items and advanced to next level (video is sped up by x2)</i>
        <p class="paragraph">
          Given the seed, the game will randomly generate rooms, hallways and enemies for the world.
        </p>
        <p class="paragraph">
          The cheat mode: Pressing <b>R</b> gives us a a complete view of the world. And pressing <b>T</b> draw the
          projected path(the yellow arrows) of all stalkers.
        </p>
        <img src="../assets/img/the_game_showoff.gif" class="img-fluid">
        <i>Demonstrations for the cheat mode (video is sped up by x2)</i>
        <b-row class="justify-content-center">
          <SourceCodeLinkComponent id=2 disabled text="Github"/>
          <SourceCodeLinkComponent href="https://www.youtube.com/watch?v=-cpaaC5BSAc" text="Youtube"/>
        </b-row>
      </template>
    </ProjectComponent>
    <p class="h3 m-3 text-center">
      This portfolio website is writen in <b>Vue.js</b>. <br>
      <b>BoostrapVue</b> for the layout and UI components. <br>
      And the <b>Cambria</b> font.
      <SourceCodeLinkComponent href="https://github.com/larryun/larryun.github.io" text="Github"/>
    </p>
  </b-container>


</template>

<script>
import ProjectComponent from "./ProjectComponent";
import SourceCodeLinkComponent from "./SourceCodeLinkComponent";

export default {
  name: "Project",
  components: {
    SourceCodeLinkComponent,
    ProjectComponent,
  },
  methods: {
    thumbNail: (type) => {
      let src = "";
      let filename = "";
      if (type === "player") {
        filename = "the_game_player.png";
      } else if (type === "shooter") {
        filename = "the_game_shooter.png";
      } else if (type === "stalker") {
        filename = "the_game_stalker.png";
      }
      src = require(`../assets/img/${filename}`)
      return `<img src="${src}"/>`
    },
    scrollTo: function (name) {
      let element = this.$refs[name]
      element.scrollIntoView({behavior: "smooth"});
    }
  }

}
</script>

<style scoped>

</style>
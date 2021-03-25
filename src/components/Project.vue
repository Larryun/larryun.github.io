<template>
  <b-container fluid class="">
    <TableContentComponent :vm="this">
    </TableContentComponent>
    <div class="text-center display-3 border-bottom-thick pb-3">
      Projects
    </div>
    <a ref="pacman_ai"></a>
    <ProjectComponent>
      <template v-slot:name>
        Pacman AI
      </template>
      <template v-slot:date>
        Spring 2021
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
            4 directions, deals 1 damage if collided with
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

    <a ref="planet_defenders"></a>
    <ProjectComponent>
      <template v-slot:name>
        Planet Defenders
      </template>
      <template v-slot:date>
        Spring 2020
      </template>
      <template v-slot:body>
        <p class="paragraph">
          Lead a team of five people and designed a arcade game in Space Invaders theme. Written in <b>C++</b> with <a
            href="https://www.sfml-dev.org/">SFML</a>
          graphics library. This is a final project for the course <b>CIS29: Advanced C++ at De Anza College</b>.
        </p>
        <p class="paragraph">
          This project's target was to build a game with <b>SFML</b> and utilize new C++ features with an emphasis on
          <b>OOP structure</b>.
        </p>
        <p class="paragraph">
          For this project, our team built an <b>exceptions and UI libraries for handling exceptions and UI elements</b>;
          and structured the project with polymorphic classes (e.g. <b>Enemy</b>, <b>Projectile</b>, ...) that inherits from an
          abstract class <b>GameObject</b>. My role was coding the game logics, structures and physics.
        </p>

        <a class="img-btn" @click="openImg('planet_defenders_uml.png')">
          <img src="../assets/img/planet_defenders_uml.png" class="img-fluid">
        </a>
        <i>The UML diagram that includes all classes and custom libraries. (Click to see more)</i>


        <a ref="planet_defender_demo"></a>
        <div class="h3 font-weight-bold">
          Demonstrations
        </div>
        <img src="../assets/img/planet_defenders_gameplay.gif" class="img-fluid">
        <i>Demonstrations for the Planet Defenders (video is sped up by x2)</i>

        <p class="paragraph">
          The game's goal is to get as many points as possible by shooting at the boss and the random generated
          enemies.
          There are <b>4 ships in this game which is randomly picked</b> for the player in the beginning of the game, each with different attributes(speed, attack speed, health):
        </p>
        <b-row>
          <b-col>
            <img src="../assets/img/planet_defender_ship1.png" class="img-fluid"><br>
            <p>Medium Speed <br>Medium Attack Speed <br> Medium MaxHp</p>
          </b-col>
          <b-col>
            <img src="../assets/img/planet_defender_ship2.png" class="img-fluid">
            <p>Fast Speed <br>Fast Attack Speed <br> Low MaxHp</p>
          </b-col>
          <b-col>
            <img src="../assets/img/planet_defender_ship3.png" class="img-fluid">
            <p>Slow Speed <br>Slow Attack Speed <br> High MaxHp</p>
          </b-col>
          <b-col>
            <img src="../assets/img/planet_defender_ship4.png" class="img-fluid">
            <p>Fast Speed <br> Medium Speed <br> Low MaxHp</p>
          </b-col>
        </b-row>
        <p class="paragraph">
          The boss is located in the top of the game that moves back and forth, shoots <b>two types of projectiles</b>:
        </p>

        <img src="../assets/img/planet_defender_boss.png" class="img-fluid"><br>
        <i>The boss, kind of scary, I think</i>

        <ul class="paragraph">
          <li>
            Straight Projectile <i v-html="thumbNail('straight')"/> : A fast and high damage projectile that aims
            directly at the player.
          </li>
          <li>
            Curved Projectile <i v-html="thumbNail('curved')"/> : A slow and curved projectile that follows and
            and steers towards the player.
          </li>
        </ul>

        <p class="paragraph">
          Each time the boss is killed, the <b>difficulty increases</b> (higher enemy damage and max HP, generate more often, ...)
        </p>
        <p class="paragraph">
          Moreover, various type of random <b>power-ups will fall from the top</b>. Unfortunately, there are only
          two types of power-ups due to the limited time.
        </p>

        <ul class="paragraph">
          <li>
            Health Restore: <i v-html="thumbNail('health_restore')"/> : Restore player's HP by 10.
          </li>
          <li>
            Curved Projectile <i v-html="thumbNail('shield')"/> : Protect player for short period of time.
          </li>
        </ul>

        <a ref="planet_defender_demo"></a>
        <div class="h3 font-weight-bold">
          Backdoor Mode Demonstrations
        </div>
        <img src="../assets/img/planet_defender_backdoor_gameplay.gif" class="img-fluid">

        <p class="paragraph">
          We also implemented a <b>backdoor mode</b> for more fun; triggered by pressing key '<b>=</b>':
        </p>
        <ul class="paragraph">
          <li>
            Infinity HP (Key ' <b>-</b> '): Gives infinity HP to player.
          </li>
          <li>
            Accelerate (Key ' <b>]</b> '): Increase Speed
          </li>
          <li>
            Decelerate (Key ' <b>[</b> '): Decrease Speed
          </li>
          <li>
            Bigger Projectile(Key ' <b>"</b> '): Increase player's projectile Damage and hit box size.
          </li>
          <li>
            Change Ship Type(Key '1' - '4'): Change the type of the player's ship
          </li>
        </ul>

        <p class="paragraph">
          The awesome arts, textures and
          <a href="https://github.com/Larryun/CIS29_Group_Project/tree/master/resourses/sound">sounds effects</a>
          are designed by one of our teammate.
        </p>

        <b-row class="justify-content-center">
<!--          <SourceCodeLinkComponent id=2 disabled text="Github"/>-->
          <SourceCodeLinkComponent href="https://github.com/Larryun/CIS29_Group_Project" text="Github"/>
        </b-row>
      </template>
    </ProjectComponent>

    <p class="h5 pt-5 m-3 text-center">
      This portfolio website is writen in <b>Vue.js</b>.
      <b>BoostrapVue</b> for layout and the UI components.
      <SourceCodeLinkComponent href="https://github.com/larryun/larryun.github.io" text="Github"/>
    </p>
  </b-container>


</template>

<script>
import ProjectComponent from "./ProjectComponent";
import SourceCodeLinkComponent from "./SourceCodeLinkComponent";
import TableContentComponent from "./TableContentComponent";

export default {
  name: "Project",
  components: {
    TableContentComponent,
    SourceCodeLinkComponent,
    ProjectComponent,
  },
  methods: {
    thumbNail: (type) => {
      let filename_map = {
        "player": "the_game_player.png",
        "shooter": "the_game_shooter.png",
        "stalker": "the_game_stalker.png",
        "straight": "planet_defender_straight.png",
        "curved": "planet_defender_curved.png",
        "health_restore": "planet_defender_healthrestore.png",
        "shield": "planet_defender_shield.png",
      }
      let src = "";
      let filename = filename_map[type];
      src = require(`../assets/img/${filename}`)
      return `<img src="${src}"/>`
    },
    openImg: (filename) => {
      let src = require(`../assets/img/${filename}`)
      window.open(src)
    }
    // scrollTo: function (name) {
    //   let element = this.$refs[name]
    //   element.scrollIntoView({behavior: "smooth"});
    // }
  }

}
</script>

<style scoped>

</style>
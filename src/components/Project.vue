<template>
  <b-container fluid class="">
    <div class="text-center display-3 border-bottom pb-3">
      Projects
    </div>
    <ProjectComponent>
      <template v-slot:name>
        Pacman AI
      </template>
      <template v-slot:date>
        Jan 2021 - Current
      </template>
      <template v-slot:body>
        <p class="paragraph mb-1">
          A multi-agent AI for the Pacman game.
        </p>
        <div class="">
          <img src="../assets/img/pacman.gif" class="img-fluid"/>
          <i>Pacman minimax agent with search depth = 1</i>
        </div>
        <p class="paragraph">
          Implemented with <b>minimax algorithm</b> to search for the optimal action and
          utilized <b>Alpha-Beta pruning</b> more efficient searching.
        </p>
        <SourceCodeLinkComponent id="1" :disabled="true">
        </SourceCodeLinkComponent>
      </template>
    </ProjectComponent>

    <ProjectComponent>
      <template v-slot:name>
        Course Notify
      </template>
      <template v-slot:date>
        Spring 2021 - Current
      </template>
      <template v-slot:body>
        <p class="paragraph mb-1">
          A easy-to-use course availability notification system for De Anza College and Foothill College.
          Assisted <b>130+</b> students to enrolls in highly in-demand courses and sent out <b>600+</b> notifications.
          <br>
        </p>
        <div class="h3 font-weight-bold">Tech Stacks</div>
        <p class="paragraph">
        <ul>
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
              <li><b>Vue.js</b></li>
            </ul>
          </li>
        </ul>
        <div class="h3 font-weight-bold">
          Demonstrations
        </div>
        <p class="paragraph">
          Provide a email address and select courses to receive notifications about
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
          Confirmation email is sent immediately after opt-in
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
          Confirmation email is sent went course status is changed from
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
          The <b>opt-out/remove</b> link will provide an URL with remove key to stop receiving notifications.
          And the remove key is ensured to be used only once.
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

      </template>
    </ProjectComponent>
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
  }

}
</script>

<style scoped>

</style>
<template>
  <b-container fluid class="">
    <b-row class="justify-content-center">
      <b-col>
        <div class="content fs-4">
          <BlockQuoteComponent class="pt-3 m-0">
            "Learning is never a waste of time."
          </BlockQuoteComponent>
          <ParagraphComponent>
            <template v-slot:header>
              <div class="text-center display-3">
                Hi there!
              </div>
            </template>
            <template v-slot:body>
              <p class="paragraph">
                I am <b>Larry</b>! Larry likes to make websites and learn a lot of stuff!
              </p>
              <p class="paragraph">
                <b>Larry</b> is currently studying Computer Science at University of California, Berkeley, graduating in
                Spring 2022! Also, I am actively looking for an internships in Summer 2021, hoping to put my ideas and
                skills into good use!
              </p>
            </template>
          </ParagraphComponent>
          <ParagraphComponent>
            <template v-slot:header>
              <div class="text-center display-4">
                Things that I know
              </div>
              <b-row class="justify-content-center">
                <b-col sm="12" md="3">
                  <img alt="python" src="../assets/img/python.webp" width="128px" class="img-fluid"/>
                  <p>
                    Python <br>
                    <a class="m-0">Projects</a>
                  </p>
                </b-col>
                <b-col sm="12" md="3">
                  <img alt="python" src="../assets/img/cpp.png" width="128px" class="img-fluid"/>
                  <p>
                    C++ <br>
                    <a class="m-0">Projects</a>
                  </p>
                </b-col>
                <b-col sm="12" md="3">
                  <img alt="python" src="../assets/img/java.png" width="128px" class="img-fluid"/>
                  <p>
                    Java <br>
                    <a class="m-0">Projects</a>
                  </p>
                </b-col>
              </b-row>
            </template>
            <template v-slot:body>
            </template>
          </ParagraphComponent>
          <ParagraphComponent>
            <template v-slot:header>
              <div class="text-center display-4">
                Courses that I Have Taken
              </div>
            </template>
            <template v-slot:body>
            </template>
          </ParagraphComponent>
        </div>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import BlockQuoteComponent from "./BlockQuoteComponent";
import ParagraphComponent from "./ParagraphComponent";

export default {
  name: "About",
  components: {
    ParagraphComponent,
    BlockQuoteComponent
  }
}
</script>

<style scoped>

</style>
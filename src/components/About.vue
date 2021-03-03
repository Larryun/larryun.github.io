<template>
   <b-container fluid class="">
    <b-row class="justify-content-center">
      <b-col>
        <div class="content fs-4">
          <BlockQuoteComponent class="h4 pt-3 m-0">
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
                <b>Larry</b> likes to make websites and learn a lot of stuff!
              </p>
              <p class="paragraph">
                <b>Larry</b> is an international student from <b style="color: #067662;">Macau</b>, currently studying
                Computer Science at University of California, Berkeley and graduating in
                Spring 2022! Also, I am actively seeking software engineering internship in Summer 2021, hoping to put my ideas and
                skills into good use!
              </p>
            </template>
          </ParagraphComponent>

          <ParagraphComponent>
            <template v-slot:header>
              <div class="text-center display-4">
                Education
              </div>
            </template>
            <template v-slot:body>
              <b-row align-h="between">
                <b-col cols="7" class="text-left h5 font-weight-bold mb-0">
                  University of California, Berkeley
                </b-col>
                <b-col cols="5" class="text-right h5 font-weight-bold mb-0">
                  Aug 2020 - Current
                </b-col>
              </b-row>
              <div class="text-left">
                Computer Science, B.A.
              </div>
              <b-row align-h="between">
                <b-col cols="7" class="text-left h5 font-weight-bold mb-0">
                  De Anza College
                </b-col>
                <b-col cols="5" class="text-right h5 font-weight-bold mb-0">
                  Aug 2018 - May 2020
                </b-col>
              </b-row>
              <div class="text-left">
                Computer Science
              </div>
            </template>
          </ParagraphComponent>

          <ParagraphComponent>
            <template v-slot:header>
              <div class="text-center display-4">
                Technical Courses
              </div>
              <b-list-group flush class="md-font text-left">
                <b-list-group-item v-for="course in courses" :key="course.course_number">
                  {{course.course_number}} - {{course.name}}
                </b-list-group-item>
              </b-list-group>
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

import ParagraphComponent from "./ParagraphComponent";
import BlockQuoteComponent from "./BlockQuoteComponent";

export default {
  name: "About",
    components: {
    ParagraphComponent,
    BlockQuoteComponent
  },
  data: () => {
    return {
      courses: [
        {course_number: "CS61A", name: "Structure and Interpretation of Computer Programs"},
        {course_number: "CS61B", name: "Data Structure"},
        {course_number: "CS61C", name: "Machine Structure"},
        {course_number: "EECS 16A", name: "Designing Information Devices and Systems I"},
        {course_number: "CS170", name: "Efficient Algorithms and Intractable Problems"},
        {course_number: "CS188", name: "Introduction to Artificial Intelligence"},
      ]
    }
  }
}
</script>

<style scoped>

</style>
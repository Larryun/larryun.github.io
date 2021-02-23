import Vue from 'vue'
import Router from 'vue-router'
import About from "../components/About";
import Project from "../components/Project";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Project',
      component: Project
    }
  ]
})
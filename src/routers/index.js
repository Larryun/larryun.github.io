import Vue from 'vue'
import Router from 'vue-router'
import About from "../components/About";
import Home from "../components/Home";
import Project from "../components/Project";
import Resume from "../components/Resume";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Project',
      component: Project
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    }
  ]
})
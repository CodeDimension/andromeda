import Vue from 'vue'
import Router from 'vue-router'
import InputFile from './views/input-file.vue';
import Alert from './views/alert.vue';
import Button from './views/button.vue';
import Checkbox from './views/checkbox.vue';
import input from './views/input.vue';
import progressBar from './views/progress-bar.vue';
import radio from './views/radio.vue';
import select from './views/select.vue';
import slideToggle from './views/slide-toggle.vue';
import textarea from './views/textarea.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/input-file',
      name: 'input-file',
      component: InputFile
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: Checkbox
    },
    {
      path: '/input',
      name: 'input',
      component: input
    },
    {
      path: '/progress-bar',
      name: 'progress-bar',
      component: progressBar
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/slide-toggle',
      name: 'slide-toggle',
      component: slideToggle
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: textarea
    }
  ]
})

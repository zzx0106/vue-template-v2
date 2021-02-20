import Vue from 'vue';
Vue.directive('scroll', {
  inserted(el, bind) {
    if (bind.value >= el.scrollHeight) {
      el.style.overflowY = 'auto';
    } else {
      el.style.overflowY = 'scroll';
    }
  },
  update(el, bind) {
    if (bind.value >= el.scrollHeight) {
      el.style.overflowY = 'auto';
    } else {
      el.style.overflowY = 'scroll';
    }
  },
});

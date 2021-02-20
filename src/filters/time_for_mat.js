import Vue from 'vue';
Vue.filter('f_timeFormat', function (e, mat = 'yyyy/mm/dd HH:MM:SS') {
  return new Date(e).format(mat);
});

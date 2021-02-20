import Vue from 'vue';
/** 号码脱敏 */
Vue.filter('f_phone_encrypt', function (e) {
  return e.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
});

import Vue from 'vue';
import './time_for_mat';
import './phone_encrypt';
/** 号码脱敏 */
Vue.filter('f_gender', function (e) {
  if (e == 0) {
    return '女';
  } else if (e == 1) {
    return '男';
  } else {
    return '未知';
  }
});

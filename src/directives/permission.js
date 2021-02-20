import Vue from 'vue';
import store from '@/store/store';

function checkPermission(el, binding) {
  const { value = [] } = binding;
  const pms = store.getters && store.getters.get_pms;
  if (value && value instanceof Array) {
    if (value.length > 0) {
      setTimeout(() => {
        const hasPermission = value.some((role) => !!pms[role]);
        if (!hasPermission) {
          el.parentNode && el.parentNode.removeChild(el);
          /** 如果是el-tab-pane 独立处理 */
          // if (el.className.includes('el-tab-pane')) {
          //   const id = el.getAttribute('aria-labelledby');
          //   const _el = el.parentNode.parentNode.querySelector(`[id=${id}]`);
          //   _el.parentNode.removeChild(_el);
          // } else {
          //   el.parentNode && el.parentNode.removeChild(el);
          // }
        }
      }, 0);
    }
  } else {
    throw new Error(`need pms! Like v-pms="['aabbcc','ccddee']"`);
  }
}
Vue.directive('pms', {
  inserted(el, binding) {
    checkPermission(el, binding);
  },
  update(el, binding) {
    checkPermission(el, binding);
  },
});

// 可用于统一处理组件
const BaseComponent = {
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    // ------------- vue
    /** 创建timeout定时器 */
    creatTimeout(callback, duration = 1000) {
      let timer = setTimeout(callback, duration);
      this.$once('hook:beforeDestroy', function () {
        clearInterval(timer);
      });
    },
    /** 创建interval定时器 */
    creatInterval(callback, duration = 1000) {
      let timer = setInterval(callback, duration);
      this.$once('hook:beforeDestroy', function () {
        clearInterval(timer);
      });
    },
  },
  computed: {},
  filters: {},
};
export default BaseComponent;

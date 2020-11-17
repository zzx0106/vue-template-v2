import Vue from 'vue'; // 引用了type和value
declare module 'vue/types/vue' {
  interface Vue {
    $observer: IntersectionObserver;
    /** 
     * 创建interval定时器 
     ```javascript
      this.creatTimeout(() => {
        // todo 
      }, 2000)
      ```
     */
    creatTimeout(callback: Function, duration?: number): void;
    /** 创建interval定时器
      ```javascript
      this.creatInterval(() => {
        // todo 
      }, 2000)
      ```
     */
    creatInterval(callback: Function, duration?: number): void;
    /**
     * 页面向上滚动到top的高度
     * @param top 想上滚动的距离
     * @param duration 滚动的时间
     */
  }
}

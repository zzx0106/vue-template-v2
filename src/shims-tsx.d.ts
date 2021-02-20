// import { AxiosResponse } from 'axios';
import Vue, { VNode } from 'vue';

type Res<T> = {
  result: T;
  status: {
    /** 状态提示 */
    msg: string;
    /** 状态码 */
    code: 200 | 404 | 403;
  };
};
// interface AxiosResponse<T> {
//   abc: T;
// }
declare global {
  // type IRes<T> = Promise<AxiosResponse<T>>;
  type IRes<T> = Promise<T>;
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

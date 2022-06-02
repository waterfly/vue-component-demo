/*
 * @Author: WaterFly
 * @Date: 2022-06-02 18:18:40
 * @Description:
 * Just enjoy code.
 */

import HelloVueComponent from "./HelloVueComponent.vue";

HelloVueComponent.install = function (Vue) {
  Vue.component(HelloVueComponent.name, HelloVueComponent);
};

export default HelloVueComponent;

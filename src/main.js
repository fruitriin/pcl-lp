// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.config.productionTip = false
Vue.use(Element);

/* eslint-disable no-new */
String.prototype.nl2br = function(){

  return this.replaceAll("\n", "<br>")
    .replaceAll("[spbr]", "<br class=hidden-sm-and-up>")
    .replaceAll("[mdobr]", "<br class=hidden-md-only>")
    .replaceAll("[mdubr]", "<br class=hidden-md-and-up>")
    .replaceAll("[mddbr]", "<br class=hidden-md-and-down>")
    .replaceAll("[mdbr]", "<br class='hidden-lg-and-up hidden-sm-and-down'>");
}

String.prototype.replaceAll = function(pattern, replacement = ""){
  return this.split(pattern).join(replacement)
}

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

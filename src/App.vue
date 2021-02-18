<template>
  <div class="contents">
    <Header/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header
  }
});
</script>

<style lang="scss">
@import "./assets/css/reset.css";
@import url("https://use.typekit.net/fhe2ech.css");
@font-face {
  font-family: "YakuHanJP";
  font-style: normal;
  font-weight: normal;
  src: url("./assets/font/YakuHanJP-Regular.woff2") format("woff2"),
    url("./assets/font/YakuHanJP-Regular.woff") format("woff");
}
body {
  color: #ffffff;
  font-family: "YakuHanJP", -apple-system, BlinkMacSystemFont, "游ゴシック",
    游ゴシック体, YuGothic, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue,
    Verdana, Meiryo, sans-serif;
  font-weight: 300;
  font-size: 14px;
  font-feature-settings: "palt";
  transition: 0.7s;
  letter-spacing: 0.14em;
  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
}
/* IE */
_:lang(x)::-ms-backdrop,
body {
  font-family: "Segoe UI", Meiryo, sans-serif;
}
li {
  list-style-type: none;
}
</style>
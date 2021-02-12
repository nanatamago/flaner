<template>
  <div class="container" :style="{background: state.backgroundColor}">
    <Mainvisual/>
    <div class="contents">
      <Hello/>
      <Works ref="works"/>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue";
import Hello from "./components/Hello.vue";
import Mainvisual from "./components/Mainvisual.vue";
import About from "./components/About.vue";
import Career from "./components/Career.vue";
import Works from "./components/Works.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import { ComponentNode } from "@vue/compiler-dom";

export default defineComponent({
  name: "App",
  components: {
    Hello,
    Mainvisual,
    About,
    Career,
    Works,
    Contact,
    Footer
  },
  setup: () => {
    const initialColor = "#d4d0bb";
    const state = reactive<{ backgroundColor: String }>({
      backgroundColor: initialColor
    });
    const works: any = ref<HTMLDivElement>();
    const client = works.value;
    window.addEventListener("scroll", function() {
      let scroll = window.pageYOffset;
      if (scroll < 700) {
        state.backgroundColor = initialColor;
      } else if (scroll > 700 && scroll < 1000) {
        state.backgroundColor = "#d2c3bc";
      } else if (scroll > 1000) {
        state.backgroundColor = "#b9cbce";
      }
    });
    return { state };
  }
});
</script>

<style lang="scss">
@import "./assets/css/reset.css";
@import url("https://use.typekit.net/fhe2ech.css");
/* IE */
_:lang(x)::-ms-backdrop,
body {
  font-family: "Segoe UI", Meiryo, sans-serif;
}
li {
  list-style-type: none;
}
.container {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "游ゴシック", 游ゴシック体,
    YuGothic, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, Verdana,
    Meiryo, sans-serif;
  font-weight: 300;
  font-size: 16px;
  font-feature-settings: "palt";
  transition: 0.7s;
  letter-spacing: 0.14em;
  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
}
.contents {
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 1024px) {
    width: 990px;
    margin: 0 auto;
  }
}
</style>
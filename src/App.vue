<template>
  <div class="container" :style="{background: state.backgroundColor}">
    <Mainvisual/>
    <div class="contents">
      <About/>
      <Career/>
      <Works ref="works"/>
      <Contact/>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue";
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
    Mainvisual,
    About,
    Career,
    Works,
    Contact,
    Footer
  },
  setup: () => {
    const initialColor = "#EBE6D2";
    const state = reactive<{ backgroundColor: String }>({
      backgroundColor: initialColor
    });
    const works: any = ref<HTMLDivElement>();
    const client = works.value;
    onMounted(() => {
      const pTop = client.getBoundingClientRect();
      console.log(pTop);
    });
    const getSpan = () => {
      console.log(works.value);
    };
    window.addEventListener("scroll", function() {
      let scroll = window.pageYOffset;
      if (scroll < 1000) {
        state.backgroundColor = initialColor;
      } else if (scroll > 1000 && scroll < 2000) {
        state.backgroundColor = "#D1C1B7";
      } else if (scroll > 2000) {
        state.backgroundColor = "#BAC6BD";
      }
      console.log(scroll);
      console.log(state.backgroundColor);
    });
    return { state, getSpan };
  }
});
</script>

<style lang="scss">
@import "./assets/css/reset.css";
/* IE */
_:lang(x)::-ms-backdrop,
body {
  font-family: "Segoe UI", Meiryo, sans-serif;
}
.container {
  color: #575757;
  font-family: -apple-system, BlinkMacSystemFont, "游ゴシック", 游ゴシック体,
    YuGothic, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, Verdana,
    Meiryo, sans-serif;
  font-weight: normal;
  font-size: 16px;
  font-feature-settings: "palt";
  transition: 0.7s;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
}
.contents {
  padding: 0 24px;
  @media screen and (min-width: 768px) {
    width: 990px;
    margin: 0 auto;
  }
}
</style>
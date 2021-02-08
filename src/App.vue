<template>
  <div class="container" :style="{background: state.backgroundColor}">
    <Mainvisual/>
    <div class="contents">
      <Profile/>
      <Works ref="works"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue";
import Mainvisual from "./components/Mainvisual.vue";
import Profile from "./components/Profile.vue";
import Works from "./components/Works.vue";
import { ComponentNode } from "@vue/compiler-dom";

export default defineComponent({
  name: "App",
  components: {
    Mainvisual,
    Profile,
    Works
  },
  setup: () => {
    const initialColor = "#F8F2DC";

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
      } else if (scroll > 1000 && scroll < 3000) {
        state.backgroundColor = "#D7C3BA";
      } else if (scroll > 3000) {
        state.backgroundColor = "#C4D3C2";
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
.container {
  color: #575757;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic",
    Verdana, Meiryo, sans-serif;
  /* IE */
  _:lang(x)::-ms-backdrop,
  body {
    font-family: "Segoe UI", Meiryo, sans-serif;
  }
  font-size: 14px;

  font-feature-settings: "palt";
  transition: 1s;
}
.contents {
  width: 85vw;
  margin: 0 auto;
  padding-bottom: 160px;
}
</style>
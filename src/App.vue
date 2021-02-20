<template>
  <div class="contents">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  watch,
  onMounted,
  computed,
  ComputedRef
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Footer
  },
  setup: () => {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const state = reactive<{
      position: Number;
      logoHeight: ComputedRef<Number>;
    }>({
      position: 0,
      logoHeight: computed(
        (): Number => {
          return store.state.logoHeight;
        }
      )
    });

    document.onscroll = e => {
      state.position =
        document.documentElement.scrollTop || document.body.scrollTop;
      checkDisplayLogo();
    };

    onMounted(() => {
      let initialPath = route.path;
      store.commit("setCurrentRoutePath", initialPath);
      checkDisplayLogo();
    });

    watch(
      () => route.path,
      path => {
        store.commit("setCurrentRoutePath", path);
        checkDisplayLogo();
      }
    );

    const checkDisplayLogo = () => {
      if (store.state.currentRoutePath !== "/") {
        return store.commit("setDisplayHeaderLogo", true);
      } else if (store.state.currentRoutePath === "/") {
        if (state.position > store.state.logoHeight + store.state.logoOffsetY) {
          return store.commit("setDisplayHeaderLogo", true);
        } else {
          return store.commit("setDisplayHeaderLogo", false);
        }
      }
    };

    return state;
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
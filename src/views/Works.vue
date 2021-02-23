<template>
  <main class="works" :style="{ background: state.backgroundColor }">
    <Mainvisual/>
    <div class="works__container">
      <Hello/>
      <WorksList/>
    </div>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  ComputedRef,
  onMounted,
  onUnmounted
} from "vue";
import { useStore } from "vuex";
import Mainvisual from "../components/Mainvisual.vue";
import Hello from "../components/Hello.vue";
import WorksList from "../components/WorksList.vue";

export default defineComponent({
  name: "Works",
  components: { Mainvisual, Hello, WorksList },
  setup: () => {
    const store = useStore();
    const state = reactive<{
      backgroundColor: ComputedRef<any>;
      rectOffsetY: ComputedRef<Number>;
      rectSwitchPoint: ComputedRef<Number>;
      isDarkmode: Boolean;
    }>({
      backgroundColor: computed(
        (): String => {
          return store.state.backgroundColor;
        }
      ),
      rectOffsetY: computed(
        (): Number => {
          return store.state.offsetY - 300;
        }
      ),
      rectSwitchPoint: computed(
        (): Number => {
          return store.state.offsetY + store.state.height / 2;
        }
      ),
      isDarkmode: false
    });

    const changeBackground = () => {
      let scroll = window.pageYOffset;
      if (state.isDarkmode) {
        store.commit("setBackgroundColor", "#474747");
      } else if (scroll < state.rectOffsetY) {
        store.commit("setBackgroundColor", "#d4d0bb");
      } else if (scroll > state.rectOffsetY && scroll < state.rectSwitchPoint) {
        store.commit("setBackgroundColor", "#d2c3bc");
      } else if (scroll > state.rectSwitchPoint) {
        store.commit("setBackgroundColor", "#b9cbce");
      }
    };

    const checkDarkMode = () => {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const darkModeOn = darkModeMediaQuery.matches;
      if (darkModeOn) {
        return (state.isDarkmode = true);
      } else {
        return (state.isDarkmode = false);
      }
    };

    onMounted(() => {
      checkDarkMode();
      if (state.isDarkmode) {
        store.commit("setBackgroundColor", "#474747");
      }
      window.addEventListener("scroll", changeBackground);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", changeBackground);
    });

    return { state, checkDarkMode };
  }
});
</script>

<style lang="scss" scoped>
.works {
  margin-bottom: -40px;
  padding-bottom: 112px;
  transition: 0.7s;
  @media screen and (min-width: 1024px) {
    margin-bottom: -80px;
    padding-bottom: 160px;
  }
  &__container {
    @media screen and (min-width: 1024px) {
      width: 990px;
      margin: 0 auto;
    }
  }
}
</style>

<template>
  <main class="works" :style="{background: state.backgroundColor}">
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
  onUnmounted,
  onUpdated,
  onBeforeMount
} from "vue";
import { useStore } from "vuex";
import axios from "axios";
import Mainvisual from "../components/Mainvisual.vue";
import Hello from "../components/Hello.vue";
import WorksList from "../components/WorksList.vue";

export default defineComponent({
  name: "Works",
  components: { Mainvisual, Hello, WorksList },
  setup: () => {
    const store = useStore();
    const state = reactive<{
      backgroundColor: ComputedRef<String>;
      rectOffsetY: ComputedRef<Number>;
      rectSwitchPoint: ComputedRef<Number>;
    }>({
      backgroundColor: computed(
        (): String => {
          return store.state.backgroundColor;
        }
      ),
      rectOffsetY: computed(
        (): Number => {
          return store.state.offsetY;
        }
      ),
      rectSwitchPoint: computed(
        (): Number => {
          return store.state.offsetY + store.state.height / 2;
        }
      )
    });

    const changeBackground = () => {
      let scroll = window.pageYOffset;
      if (scroll < state.rectOffsetY) {
        store.commit("setBackgroundColor", "#d4d0bb");
      } else if (scroll > state.rectOffsetY && scroll < state.rectSwitchPoint) {
        store.commit("setBackgroundColor", "#d2c3bc");
      } else if (scroll > state.rectSwitchPoint) {
        store.commit("setBackgroundColor", "#b9cbce");
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", changeBackground);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", changeBackground);
    });

    return { state };
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

<template>
  <main class="works" :style="{background: state.backgroundColor}">
    <Mainvisual/>
    <div class="works__container">
      <Hello/>
      <WorksList/>
      <Footer/>
    </div>
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  onUpdated,
  ComputedRef
} from "vue";
import { useStore } from "vuex";
import axios from "axios";
import Mainvisual from "../components/Mainvisual.vue";
import Hello from "../components/Hello.vue";
import WorksList from "../components/WorksList.vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "Works",
  components: { Mainvisual, Hello, WorksList, Footer },
  setup: () => {
    const initialColor = "#d4d0bb";
    const store = useStore();
    const state = reactive<{
      backgroundColor: String;
      rectOffsetY: ComputedRef<Number>;
      rectSwitchPoint: ComputedRef<Number>;
    }>({
      backgroundColor: initialColor,
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

    window.addEventListener("scroll", function() {
      let scroll = window.pageYOffset;
      if (scroll < state.rectOffsetY) {
        state.backgroundColor = initialColor;
      } else if (scroll > state.rectOffsetY && scroll < state.rectSwitchPoint) {
        state.backgroundColor = "#d2c3bc";
      } else if (scroll > state.rectSwitchPoint) {
        state.backgroundColor = "#b9cbce";
      }
    });
    return { state };
  }
});
</script>

<style lang="scss" scoped>
.works {
  &__container {
    @media screen and (min-width: 1024px) {
      width: 990px;
      margin: 0 auto;
    }
  }
}
</style>

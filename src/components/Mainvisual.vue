<template>
  <div class="mainvisual">
    <img class="mainvisual__image" ref="logo" src="../assets/images/logo.png" alt="flaner">
    <div class="mainvisual__container">
      <p
        v-if="!state.isVisible"
        :class="[state.deviceSwtich ? 'mainvisual__scroll' : 'mainvisual__swipe']"
      >
        <template v-if="state.deviceSwtich">SCROLL DOWN</template>
        <template v-else>SWIPE UP</template>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  reactive,
  computed,
  ComputedRef
} from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Mainvisual",
  setup: () => {
    const logo = ref();
    const store = useStore();
    const state = reactive<{
      deviceSwtich: Boolean;
      isVisible: ComputedRef<Boolean>;
    }>({
      deviceSwtich: false,
      isVisible: computed(
        (): Boolean => {
          return store.state.displayHeaderLogo;
        }
      )
    });

    const getDeviceSwtichPoint = () => {
      const targetPoint = window.matchMedia("(max-width: 1024px)");
      if (targetPoint.matches) {
        return (state.deviceSwtich = false);
      } else {
        return (state.deviceSwtich = true);
      }
    };

    onMounted(() => {
      const logoOffsetY: Number = Math.floor(
        window.pageYOffset + logo.value.getBoundingClientRect().top
      );
      const logoHeight: Number = logo.value.clientHeight;
      store.commit("setLogoRect", {
        logoHeight,
        logoOffsetY
      });
      getDeviceSwtichPoint();
    });

    return { logo, state };
  }
});
</script>

<style lang="scss" scoped>
.mainvisual {
  position: relative;
  width: 100%;
  height: 100vh;
  font-size: 12px;
  @media screen and (max-width: 600px) {
    &::before {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100vw;
      height: 100vh;
      background: url("../assets/images/mv_sp.jpg") no-repeat;
      background-size: cover;
      content: "";
    }
  }
  @media screen and (min-width: 600px) {
    background: url("../assets/images/mv.jpg") no-repeat center bottom;
    background-size: cover;
    background-attachment: fixed;
  }
  &__image {
    display: block;
    position: absolute;
    left: 0;
    bottom: 20%;
    width: 50vw;
    height: calc(50vw / 1.83);
    padding-left: 24px;
    object-fit: contain;
    @media screen and (min-width: 600px) {
      left: 0;
      bottom: 30%;
      width: 30vw;
      height: calc(30vw / 1.83);
      padding-left: 64px;
    }
    @media screen and (min-width: 1024px) {
      padding: 0;
      left: 10vw;
    }
  }
  &__container {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 24px;
    @media screen and (min-width: 1024px) {
      width: 990px;
      margin: 0 auto;
      padding: 0;
    }
  }
  &__scroll {
    display: inline-block;
    position: absolute;
    right: 24px;
    bottom: 0;
    z-index: 2;
    padding: 10px 10px 110px;
    overflow: hidden;
    color: #fff;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-decoration: none;
    writing-mode: vertical-lr;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 1px;
      height: 30px;
      background: #fff;
      animation: scr 1.5s ease infinite;
    }
    @keyframes scr {
      0% {
        transform: translateY(-70px);
      }
      50%,
      100% {
        transform: translateY(30px);
      }
    }
  }
  &__swipe {
    @extend .mainvisual__scroll;
    &::before {
      animation: swp 1.5s ease infinite;
    }
    @keyframes swp {
      0% {
        transform: translateY(30px);
      }
      50%,
      100% {
        transform: translateY(-70px);
      }
    }
  }
}
</style>

<template>
  <header class="header">
    <div class="header__container">
      <router-link
        :class="[ state.isVisible ? 'header__logo--visible' : 'header__logo' ]"
        :to="{ name:'works'}"
      >
        <img class="header__image" src="../assets/images/logo.png" alt="flaner">
      </router-link>
      <nav>
        <ul class="header__list">
          <li class="header__item">
            <router-link class="header__link" :to="{ name:'works'}">works</router-link>
          </li>
          <li class="header__item">
            <router-link class="header__link" :to="{ name:'about'}">about</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ComputedRef } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Header",
  setup: () => {
    const store = useStore();
    const state = reactive<{
      isVisible: ComputedRef<Boolean>;
    }>({
      isVisible: computed(
        (): Boolean => {
          return store.state.displayHeaderLogo;
        }
      )
    });

    return { state };
  }
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 32px;
  width: 100%;
  z-index: 100;
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    box-sizing: border-box;
    @media screen and (min-width: 1024px) {
      width: 990px;
      margin: 0 auto;
      padding: 0;
    }
  }
  &__logo {
    opacity: 0;
    transition: 0.3s;
    &--visible {
      @extend .header__logo;
      opacity: 1;
    }
  }
  &__image {
    display: block;
    width: 82px;
    height: 45px;
    object-fit: contain;
    @media screen and (min-width: 1024px) {
      width: 143px;
      height: 78px;
    }
  }
  &__list {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 0;
  }
  &__item {
    margin-left: 24px;
    &:first-child {
      margin-left: 0;
    }
    @media screen and (min-width: 600px) {
      margin-left: 40px;
    }
  }
  &__link {
    display: block;
    color: rgba(255, 255, 255, 0.65);
    font-family: Copperplate;
    font-size: 14px;
    text-decoration: none;
    letter-spacing: 3.9px;
    &.router-link-active {
      @extend .header__link;
      color: #ffffff;
    }
    @media screen and (min-width: 600px) {
      font-size: 18px;
    }
  }
}
</style>

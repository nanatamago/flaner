<template>
  <div class="detail overlay">
    <div class="detail__container">
      <div class="detail__close" @click="closeModal">
        <slot name="close"></slot>
      </div>
      <div class="detail__image">
        <slot name="image"></slot>
      </div>
      <div class="detail__comment">
        <slot name="comment"></slot>
      </div>
      <div class="detail__description">
        <slot name="description"/>
      </div>
      <div class="detail__contents">
        <slot name="contents"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ComputedRef } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Detail",
  setup: () => {
    const store = useStore();
    const state = reactive<{
      isiOS: ComputedRef<Boolean>;
    }>({
      isiOS: computed(() => {
        return store.state.userAgentiOS;
      })
    });
    const closeModal = () => {
      store.commit("setDisplayWorksItemModal", false);
      let body = document.body;
      if (state.isiOS) {
        body.style.position = "";
        body.style.top = "";
      } else {
        body.style.overflow = "";
      }
    };
    return { closeModal };
  }
});
</script>

<style lang="scss" scoped>
.detail {
  &.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    z-index: 150;
    background: rgba(71, 71, 71, 0.95);
  }
  &__container {
    padding: 40px 24px;
    @media screen and (min-width: 600px) {
      max-width: 550px;
      margin: 0 auto;
      padding: 64px 0;
    }
    @media screen and (min-width: 1024px) {
      max-width: 900px;
      padding: 64px 0 128px;
    }
  }
  &__close {
    display: inline-block;
    position: fixed;
    width: 40px;
    height: 40px;
    text-align: left;
    text-indent: -9999px;
    line-height: 1.5em;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: calc(50% - 15px);
      left: 5px;
      width: 40px;
      height: 1px;
      transform: rotate(45deg);
      transform-origin: 0% 50%;
      background: #ffffff;
    }
    &::after {
      left: -7px;
      transform: rotate(-45deg);
      transform-origin: 100% 50%;
    }
    @media screen and (min-width: 1024px) {
      width: 52px;
      height: 52px;
      &::before,
      &::after {
        top: calc(50% - 19px);
        left: 7px;
        width: 52px;
      }
      &::after {
        left: -8px;
      }
    }
  }
  &__image {
    max-width: 375px;
    margin-top: 48px;
    @media screen and (min-width: 600px) {
      max-width: 550px;
    }
    @media screen and (min-width: 1024px) {
      max-width: 900px;
      margin-top: 78px;
    }
  }
  &__description {
    margin-top: 24px;
  }
}
</style>

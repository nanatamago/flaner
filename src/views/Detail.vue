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
      <div class="detail__contents">
        <slot name="contents"/>
      </div>
      <div class="detail__description">
        <slot name="description"/>
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
      padding: 80px 0;
    }
    @media screen and (min-width: 1024px) {
      max-width: 900px;
      padding: 80px 0 128px;
    }
  }
  &__close {
    display: inline-block;
    position: fixed;
    padding-left: 1.8em;
    font-size: 1em;
    text-align: left;
    line-height: 1.5em;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: calc(50% - 7px);
      left: 4px;
      width: 18px;
      height: 1px;
      transform: rotate(45deg);
      transform-origin: 0% 50%;
      background: #ffffff;
    }
    &::after {
      left: -1px;
      transform: rotate(-45deg);
      transform-origin: 100% 50%;
    }
    @media screen and (min-width: 1024px) {
      padding-left: 3em;
      font-size: 1em;
      &::before,
      &::after {
        top: calc(50% - 16px);
        width: 48px;
      }
      &::after {
        left: -10px;
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

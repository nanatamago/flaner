<template>
  <div class="detail overlay">
    <div class="detail__container">
      <div class="detail__image">
        <slot name="image"></slot>
      </div>
      <div class="modal-content">
        <slot/>
      </div>
      <footer class="detail__footer" @click="closeModal">
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ComputedRef } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Detail",
  setup: props => {
    const store = useStore();
    const state = reactive<{
      worksList: Array<Object>;
      isiOS: ComputedRef<Boolean>;
    }>({
      worksList: props.worksList,
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
    background: rgba(71, 71, 71, 0.9);
  }
  &__container {
    padding: 40px 24px;

    @media screen and (min-width: 660px) {
      max-width: 550px;
      margin: 0 auto;
    }
    @media screen and (min-width: 1024px) {
      max-width: 990px;
    }
  }
  &__image {
    @media screen and (min-width: 660px) {
      max-width: 550px;
    }
    @media screen and (min-width: 1024px) {
      max-width: 990px;
    }
  }

  &-content {
    padding: 10px 20px;
  }

  &__footer {
    padding: 10px;
    text-align: right;
    cursor: pointer;
  }
}
</style>

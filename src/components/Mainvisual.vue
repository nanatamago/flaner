<template>
  <div class="mainvisual">
    <div class="mainvisual__container">
      <img class="mainvisual__image" src="../assets/images/logo.png" alt="flaner">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mainvisual"
});
</script>

<style lang="scss" scoped>
.mainvisual {
  position: relative;
  height: 75vh;
  font-size: 12px;
  background: url("../assets/images/mv_sp.jpg") no-repeat center top;
  background-size: cover;
  @media screen and (min-width: 600px) {
    height: 80vh;
    background: url("../assets/images/mv.jpg") no-repeat center bottom;
    background-size: cover;
  }
  &__container {
    position: absolute;

    left: 0;
    bottom: 20%;
    padding-left: 24px;
    @media screen and (min-width: 600px) {
      max-width: 550px;
      left: 0;
      bottom: 30%;
      padding-left: 64px;
    }
    @media screen and (min-width: 1024px) {
      width: 100%;
      left: 10vw;
    }
  }
  &__image {
    display: block;
    width: 50vw;
    height: calc(50vw / 1.83);
    object-fit: cover;
    @media screen and (min-width: 600px) {
      width: 30vw;
      height: calc(30vw / 1.83);
    }
  }
}
</style>

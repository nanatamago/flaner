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
  height: 75vh;
  font-size: 12px;
  background: url("../assets/images/mv_sp.jpg") no-repeat center top;
  background-size: cover;
  @media screen and (min-width: 50em) {
    height: 85vh;
    background: url("../assets/images/mv.jpg") no-repeat center bottom;
  }
  &__container {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    @media screen and (min-width: 50em) {
      width: 8vw;
    }
  }
  &__image {
    display: inline-block;
    position: absolute;
    left: 24px;
    bottom: 20%;
    width: 50vw;
    height: calc(50vw / 1.83);
    object-fit: cover;
    @media screen and (min-width: 50em) {
      width: 25vw;
      height: calc(25vw / 1.83);
    }
  }
}
</style>

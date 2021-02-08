<template>
  <div class="mainvisual">
    <div class="mainvisual__container">
      <div class="mainvisual__logo">
        <img class="mainvisual__image" src="../assets/images/logo.png" alt="flaner">
      </div>
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
  height: 85vh;
  font-size: 12px;
  background: url("../assets/images/mv.jpg") no-repeat center bottom;
  background-size: cover;
  &__container {
    position: relative;
    width: 85vw;
    height: 100%;
    margin: 0 auto;
  }
  &__logo {
    display: inline-block;
    position: absolute;
    top: 30vh;
    left: 0;
  }
  &__image {
    display: block;
    width: 25vw;
    height: calc(25vw / 1.83);
    object-fit: cover;
  }
}
</style>

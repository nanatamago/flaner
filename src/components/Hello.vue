<template>
  <div class="hello">
    <p class="hello__text">
      I’m Nana Takahashi,
      <br>a designer
      <br>developer
    </p>
    <p class="hello__button">about me</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hello"
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiri&display=swap");
.hello {
  margin-top: 40px;
  padding: 0 24px;
  @media screen and (min-width: 600px) {
    margin-top: 80px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0;
  }
  &__text {
    font-family: "copperplate", sans-serif;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.15em;
    @media screen and (min-width: 600px) {
      font-size: 40px;
      letter-spacing: 0.15em;
    }
  }
  &__button {
    color: #e36c6c;
    margin-top: 16px;
    letter-spacing: 3.3px;
    @media screen and (min-width: 600px) {
      margin-top: 40px;
      font-size: 18px;
    }
  }
}
</style>

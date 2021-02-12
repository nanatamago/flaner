<template>
  <div class="hello">
    <p class="hello__text">
      I’m Nana Takahashi,
      <br>a web designer
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
  padding: 0 24px;
  &__text {
    margin-top: 40px;
    font-family: "copperplate", sans-serif;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 4.22px;
  }
  &__button {
    color: #e36c6c;
    margin-top: 18px;
    letter-spacing: 3.3px;
  }
}
</style>

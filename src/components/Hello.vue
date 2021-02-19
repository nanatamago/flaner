<template>
  <div class="hello">
    <p class="hello__text">
      I’m Nana Takahashi,
      <br>a designer
      <br>developer
    </p>
    <router-link class="hello__link" :to="{ name:'about'}">about me</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hello"
});
</script>

<style lang="scss" scoped>
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
  &__link {
    display: inline-block;
    color: #ffffff;
    margin-top: 16px;
    padding-bottom: 4px;
    letter-spacing: 0.2em;
    text-decoration: none;
    transition: 0.3s;
    border-bottom: 1px solid transparent;
    @media screen and (min-width: 600px) {
      margin-top: 40px;
      font-size: 18px;
    }
    &:hover {
      border-bottom: 1px solid #ffffff;
    }
  }
}
</style>

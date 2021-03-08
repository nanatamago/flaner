<template>
  <div class="hello">
    <p class="hello__text">
      I’m Nana Takahashi,
      <br>an user interface designer
      <br>web developer
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
  padding: 40px 24px 0;
  @media screen and (min-width: 600px) {
    padding: 80px 0 0;
  }
  &__text {
    font-family: "copperplate", sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.1em;
    @media screen and (min-width: 600px) {
      font-size: 40px;
      letter-spacing: 0.1em;
    }
  }
  &__link {
    display: inline-block;
    padding-top: 16px;
    padding-bottom: 4px;
    color: #ffffff;
    font-size: 16px;
    letter-spacing: 0.2em;
    text-decoration: none;
    transition: 0.3s;
    border-bottom: 1px solid #ffffff;
    @media screen and (min-width: 600px) {
      padding-top: 40px;
      font-size: 18px;
    }
    &:hover,
    &:active {
      border-bottom: 1px solid transparent;
    }
  }
}
</style>

<template>
  <div class="footer">
    <p class="footer__copyright">©︎ 2021 nana takahashi</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer"
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiri&display=swap");
.footer {
  margin-top: 80px;
  padding-bottom: 32px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.1em;
  @media screen and (min-width: 600px) {
    font-size: 14px;
    letter-spacing: 0.18em;
  }
  @media screen and (min-width: 1024px) {
    padding-bottom: 80px;
  }
  &__copyright {
    display: inline-block;
  }
}
</style>

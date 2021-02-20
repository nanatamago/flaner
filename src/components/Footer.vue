<template>
  <footer class="footer">
    <p class="footer__copyright">© {{date}} nana takahashi</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Footer",
  setup: () => {
    let date = new Date().getFullYear();

    return { date };
  }
});
</script>

<style lang="scss" scoped>
.footer {
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.1em;
  @media screen and (min-width: 600px) {
    font-size: 14px;
    letter-spacing: 0.18em;
  }
  &__copyright {
    display: inline-block;
  }
}
</style>

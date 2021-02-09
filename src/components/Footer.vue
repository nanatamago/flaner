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
  margin-top: 160px;
  padding-bottom: 32px;
  text-align: center;
  letter-spacing: 2.33px;
}
</style>

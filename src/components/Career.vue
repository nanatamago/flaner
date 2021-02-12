<template>
  <div class="career">
    <h2 class="career__heading">career</h2>
    <div class="career__container">
      <ul class="career__list">
        <li class="career__item">
          <span class="career__term">2017 - 2018</span>
          <div class="career__detail">
            <span class="career__company">株式会社FICC（アルバイト）</span>
            <span class="career__occupation">webデザイン,開発</span>
          </div>
        </li>
        <li class="career__item">
          <span class="career__term">2017.7 - 2017.8</span>
          <div class="career__detail">
            <span class="career__company">ヤフー株式会社（インターンシップ）</span>
            <span class="career__occupation">トップページのUIUX改善提案</span>
          </div>
        </li>
        <li class="career__item">
          <span class="career__term">2019 - 現在</span>
          <div class="career__detail">
            <span class="career__company">ヤフー株式会社</span>
            <span class="career__occupation">webデザイン,開発</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Career"
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiri&display=swap");
.career {
  margin-top: 160px;
  &__heading {
    display: inline-block;
    font-family: "Amiri", serif;
    font-size: 24px;
    font-weight: 200;
    line-height: 1.3;
    letter-spacing: 6px;
    border-bottom: 1px solid #575757;
  }
  &__container {
    margin: 40px 0 0 24px;
  }
  &__list {
    list-style-type: none;
  }
  &__item {
    display: flex;
    margin-top: 24px;
    align-items: center;
    &:first-child {
      margin-top: 0;
    }
  }
  &__term {
    display: block;
    width: 128px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.96px;
  }
  &__detail {
    margin-left: 24px;
    letter-spacing: 1.51px;
    flex: 1;
  }
}
</style>

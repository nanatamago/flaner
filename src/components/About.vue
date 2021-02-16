<template>
  <div class="about">
    <h2 class="about__heading">about</h2>
    <div class="about__container">
      <p class="about__name">
        Nana Takahashi
        <span class="about__japanese">- 高橋奈々</span>
      </p>
      <div class="about__contents">
        <div class="about__icon">
          <img class="about__image" src="../assets/images/usa.png" slt="プロフィールアイコン">
        </div>
        <ul class="about__list">
          <li class="about__item">
            <h3 class="about__title">SKILLS</h3>
            <p class="about__text">
              HTML5 / CSS3 / JavaScript (Vue.js,React,jQuery)
              <br>Sketch / Figma
            </p>
          </li>
          <li class="about__item">
            <h3 class="about__title">FAVORITE</h3>
            <p class="about__text">水族館 / 猫 / 美味しいもの / 綺麗なもの / 読書</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About"
});
</script>

<style lang="scss" scoped>
.about {
  margin-top: 80px;
  &__heading {
    display: inline-block;
    font-family: "Amiri", serif;
    font-size: 18px;
    font-weight: 200;
    line-height: 1.3;
    letter-spacing: 4.5px;
    border-bottom: 1px solid #575757;
    @media screen and (min-width: 50em) {
      font-size: 24px;
      letter-spacing: 6px;
    }
  }
  &__container {
    margin: 40px 0 0 0;
    @media screen and (min-width: 50em) {
      margin: 40px 0 0 24px;
    }
  }
  &__name {
    line-height: 1.78;
    letter-spacing: 3.3px;
  }
  &__japanese {
    font-size: 16px;
    letter-spacing: 3.3px;
    @media screen and (min-width: 50em) {
      font-size: 18px;
    }
  }
  &__contents {
    @media screen and (min-width: 50em) {
      display: flex;
      margin-top: 24px;
    }
  }
  &__image {
    display: inline-block;
    width: 84px;
    height: 84px;
    margin-top: 24px;
    background: rgba(255, 255, 255, 0.3);
    @media screen and (min-width: 50em) {
      padding: 8px;
      width: 167px;
      height: 167px;
    }
  }
  &__list {
    margin-top: 24px;
    list-style-type: none;
    @media screen and (min-width: 50em) {
      margin-left: 40px;
      flex: 1;
    }
  }
  &__item {
    margin-top: 24px;
    &:first-child {
      margin-top: 0;
    }
  }
  &__title {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.8px;
    @media screen and (min-width: 50em) {
      font-size: 13px;
      letter-spacing: 3.4px;
    }
  }
  &__text {
    margin-top: 6px;
    font-size: 14px;
    line-height: 1.78;
    letter-spacing: 0.8px;
    word-break: break-all;
    @media screen and (min-width: 50em) {
      margin-top: 8px;
      font-size: 16px;
      letter-spacing: 2.76px;
    }
  }
}
</style>

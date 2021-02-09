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
            <p class="about__text">HTML5 / CSS3 / JavaScript (Vue.js,React,jQuery) / Sketch / Figma</p>
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
@import url("https://fonts.googleapis.com/css2?family=Amiri&display=swap");
.about {
  margin-top: 80px;
  padding: 0 24px;
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
    margin-top: 40px;
  }
  &__name {
    display: block;
    font-size: 20px;
    letter-spacing: 3.3px;
  }
  &__japanese {
    font-size: 16px;
    letter-spacing: 2.2px;
  }
  &__contents {
    display: flex;
    margin-top: 40px;
  }
  &__image {
    display: inline-block;
    padding: 8px;
    width: 167px;
    height: 167px;
    background: rgba(255, 255, 255, 0.3);
  }
  &__list {
    margin-left: 24px;
    list-style-type: none;
    flex: 1;
  }
  &__item {
    margin-top: 40px;
    &:first-child {
      margin-top: 0;
    }
  }
  &__title {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 3.4px;
  }
  &__text {
    margin-top: 16px;
    letter-spacing: 2.76px;
  }
}
</style>

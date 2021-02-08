<template>
  <div class="profile">
    <h2 class="profile__headline">PROFILE</h2>
    <div class="profile__container">
      <img class="profile__image" src="../assets/images/usa.png" slt="プロフィールアイコン">
      <div class="profile__contents">
        <p class="profile__name">
          高橋奈々
          <span class="profile__eng">- Nana Takahashi</span>
        </p>
        <h3 class="profile__item">経歴</h3>
        <ul class="profile__career profileCareer">
          <li class="profileCareer__list">
            <span class="profileCareer__term">2017.5 〜 2018.9</span>
            <span class="profileCareer__detail">株式会社FICC（アルバイト） webデザイン,開発</span>
          </li>
          <li class="profileCareer__list">
            <span class="profileCareer__term">2017.7 〜 2017.8</span>
            <span class="profileCareer__detail">ヤフー株式会社（インターンシップ） トップページのUIUX改善提案</span>
          </li>
          <li class="profileCareer__list">
            <span class="profileCareer__term">2019.4 〜 現在</span>
            <span class="profileCareer__detail">ヤフー株式会社 webデザイン,開発</span>
          </li>
        </ul>
        <h3 class="profile__item">好き</h3>
        <p class="profile__text">水族館 / 猫 / 美味しいもの / 綺麗なもの / 読書</p>
        <h3 class="profile__item">SNS</h3>
        <p class="profile__text">twitter / facebook / github</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Profile"
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Quattrocento&display=swap");
.profile {
  margin-top: 80px;
  padding: 0 24px;
  &__headline {
    color: #898989;
    font-family: "Quattrocento", serif;
    font-size: 32px;
    letter-spacing: 8.89px;
  }
  &__container {
    display: flex;
    margin-top: 72px;
  }
  &__image {
    width: 10vw;
    height: 10vw;
    object-fit: contain;
  }
  &__contents {
    margin-left: 40px;
  }
  &__name {
    display: block;
    font-size: 24px;
    letter-spacing: 2.93px;
  }
  &__eng {
    font-size: 18px;
    letter-spacing: 2.2px;
  }
  &__item {
    margin-top: 32px;
    font-weight: bold;
    letter-spacing: 3.1px;
  }
  &__text {
    margin-top: 8px;
    letter-spacing: 3.1px;
  }
}

.profileCareer {
  margin-bottom: 24px;
  list-style-type: none;
  &__list {
    display: flex;
    margin-top: 8px;
  }
  &__term {
    display: inline-block;
    width: 10vw;
    letter-spacing: 2.2px;
  }
  &__detail {
    margin-left: 24px;
    line-height: 1.33;
    letter-spacing: 1.7px;
    flex: 1;
  }
}
</style>

<template>
  <main class="about">
    <div class="about__container">
      <ul class="about__list">
        <li class="about__item">
          <h2 class="about__heading">name</h2>
          <div class="about__description">
            <p class="about__text">Nana Takahashi</p>
          </div>
        </li>
        <li class="about__item">
          <h2 class="about__heading">work experience</h2>
          <div class="about__description">
            <dl class="about__career">
              <dt class="about__company">Yahoo Japan Corporation</dt>
              <dd class="about__occupation">UI Designer,Frontend engineer</dd>
              <dd class="about__term">2019 - present</dd>
            </dl>
            <dl class="about__career">
              <dt class="about__company">Yahoo Japan Corporation（internship）</dt>
              <dd class="about__occupation">UI Designer,Frontend engineer</dd>
              <dd class="about__term">July, 2017 - August, 2017</dd>
            </dl>
            <dl class="about__career">
              <dt class="about__company">FICC inc（part time job）</dt>
              <dd class="about__occupation">Web Designer assistant</dd>
              <dd class="about__term">2017 - 2018</dd>
            </dl>
          </div>
        </li>
        <li class="about__item">
          <h2 class="about__heading">education</h2>
          <div class="about__description">
            <p class="about__text">
              Bachelor of Arts in Sociology,
              <br>DOSHISA UNIVERSITY, Japan（2019）
            </p>
          </div>
        </li>
        <li class="about__item">
          <h2 class="about__heading">contact me</h2>
          <div class="about__description">
            <ul class="about__contact">
              <li class="about__sns">
                <a
                  class="about__link"
                  href="https://www.facebook.com/nanatamago510/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook-square"></i>
                  <span class="about__name">facebook</span>
                </a>
              </li>
              <li class="about__sns">
                <a
                  class="about__link"
                  href="https://twitter.com/FlanerN/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-twitter-square"></i>
                  <span class="about__name">twitter</span>
                </a>
              </li>
              <li class="about__sns">
                <a
                  class="about__link"
                  href="https://github.com/nanatamago/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github-square"></i>
                  <span class="about__name">github</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About"
});
</script>

<style lang="scss" scoped>
.about {
  min-height: 100vh;
  margin-bottom: -42px;
  padding: 130px 0 112px;
  background: #474747;
  @media screen and (min-width: 1024px) {
    margin-bottom: -80px;
    padding: 160px 0 160px;
  }
  &__container {
    padding: 0 24px;
    @media screen and (min-width: 1024px) {
      width: 990px;
      margin: 0 auto;
      padding: 0;
    }
  }
  &__item {
    margin-top: 48px;
    &:first-child {
      margin-top: 0;
    }
    @media screen and (min-width: 600px) {
      margin-top: 64px;
    }
  }
  &__heading {
    color: #a5a5a5;
    font-family: Copperplate;
    font-size: 0.9em;
    font-weight: 500;
    letter-spacing: 0.27em;
  }
  &__description {
    margin-top: 0.3em;
  }
  &__text {
    font-size: 16px;
    @media screen and (min-width: 600px) {
      font-size: 18px;
    }
  }
  &__career {
    margin-top: 2.5em;
    &:first-of-type {
      margin-top: 0;
    }
  }
  &__company {
    font-size: 16px;
    font-weight: bold;
    word-break: break-all;
    @media screen and (min-width: 600px) {
      font-size: 18px;
    }
  }
  &__occupation {
    margin-top: 4px;
  }
  &__term {
  }
  &__contact {
    list-style-type: none;
    @media screen and (min-width: 600px) {
      display: flex;
    }
  }
  &__sns {
    display: flex;
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }
    @media screen and (min-width: 600px) {
      margin-top: 0;
      margin-left: 40px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  &__link {
    color: #ffffff;
    padding-bottom: 4px;
    letter-spacing: 0.2em;
    text-decoration: none;
    transition: 0.3s;
    border-bottom: 1px solid #ffffff;
    &:hover,
    &:active {
      border-bottom: 1px solid transparent;
    }
    i {
      font-size: 16px;
    }
  }
  &__name {
    display: inline-block;
    margin-left: 8px;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
// フェードインの終了＆フェードアウトの開始
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>

<template>
  <main class="about">
    <div class="about__container">
      <ul class="about__list">
        <li class="about__item">
          <h2 class="about__heading">name</h2>
          <div class="about__description">
            <span class="about__eng">Nana Takahashi</span>
            <span class="about__jp">高橋 奈々</span>
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
              <dd class="about__term">2017.7 - 2017.8</dd>
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
            Bachelor of Sociology,
            <br>DOSHISA UNIVERSITY, Japan（2019）
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
    <Footer/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "../components/Footer.vue";

export default defineComponent({
  name: "About",
  components: { Footer }
});
</script>

<style lang="scss" scoped>
.about {
  padding-top: 104px;
  background: #474747;
  @media screen and (min-width: 600px) {
    padding-top: 209px;
  }
  &__container {
    padding: 0 24px;
    @media screen and (min-width: 1024px) {
      width: 990px;
      margin: 0 auto;
    }
  }
  &__item {
    margin-top: 48px;
    &:first-child {
      margin-top: 0;
    }
  }
  &__heading {
    color: #a5a5a5;
    font-family: Copperplate;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.27em;
  }
  &__description {
    margin-top: 12px;
  }
  &__eng {
    &::after {
      position: relative;
      content: "-";
      padding: 0 8px;
    }
  }
  &__career {
    margin-top: 32px;
    &:first-of-type {
      margin-top: 0;
    }
  }
  &__company {
    font-weight: bold;
  }
  &__occupation {
    margin-top: 16px;
  }
  &__term {
    margin-top: 8px;
  }
  &__contact {
    list-style-type: none;
    @media screen and (min-width: 50em) {
      display: flex;
    }
  }
  &__sns {
    display: flex;
    @media screen and (min-width: 50em) {
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
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid #ffffff;
    }
  }
  &__name {
    display: inline-block;
    margin-left: 8px;
  }
}
</style>

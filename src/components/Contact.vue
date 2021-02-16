<template>
  <div class="contact">
    <h2 class="contact__heading">contact</h2>
    <div class="contact__container">
      <ul class="contact__list">
        <li class="contact__item">
          <a
            class="contact__link"
            href="https://www.facebook.com/nanatamago510/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-square"></i>
            <span class="contact__name">facebook</span>
          </a>
        </li>
        <li class="contact__item">
          <a
            class="contact__link"
            href="https://twitter.com/FlanerN/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter-square"></i>
            <span class="contact__name">twitter</span>
          </a>
        </li>
        <li class="contact__item">
          <a
            class="contact__link"
            href="https://github.com/nanatamago/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github-square"></i>
            <span class="contact__name">github</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact"
});
</script>

<style lang="scss" scoped>
.contact {
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
    margin: 40px 0 0 0;
  }
  &__list {
    list-style-type: none;
    @media screen and (min-width: 50em) {
      display: flex;
    }
  }
  &__item {
    display: flex;
    @media screen and (min-width: 50em) {
      margin-left: 40px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  &__link {
    color: #575757;
    letter-spacing: 4px;
    transition: 0.3s;
    &:hover {
      color: #ffffff;
    }
  }
  &__name {
    display: inline-block;
    margin-left: 8px;
  }
}
</style>

<template>
  <div class="works">
    <h2 class="works__heading">works</h2>
    <ul class="works__list">
      <li v-for="work in works" :key="work" class="works__item">
        <div class="works__thumbnail">
          <img class="works__image" :src="work.image" alt="flaner" loading="lazy">
        </div>
        <div class="works__contents">
          <div class="works__caption">
            <span class="works__category">{{ work.category }}</span>
            <h3 class="works__title">{{ work.title }}</h3>
            <span class="works__date">{{ work.date }}</span>
          </div>
          <div class="works__outline">{{ work.outline }}</div>
          <div class="works__skill worksSkill">
            <ul class="worksSkill__list">
              <li v-for="skill in work.skills" :key="skill" class="worksSkill__item">{{ skill }}</li>
            </ul>
          </div>
          <a
            v-if="work.link"
            class="works__link"
            :href="work.link"
            target="_blank"
            rel="noopener"
          >{{ work.title }}を見にいく</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Works",
  setup: () => {
    let works: any = ref();
    onMounted(() => {
      axios
        .get("src/assets/data/works.json")
        .then(response => (works.value = response.data));
    });
    return {
      works
    };
  }
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Amiri&display=swap");
.works {
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
  &__list {
    margin: 40px 0 0 24px;
  }
  &__item {
    display: flex;
    position: relative;
    margin-top: 160px;
    color: #ffffff;
    justify-content: flex-end;
    &:first-child {
      margin-top: 40px;
    }
  }
  &__thumbnail {
    position: absolute;
    top: 0;
    left: 0;
  }
  &__image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &__contents {
    width: 48%;
    padding-top: 150px;
    z-index: 10;
  }
  &__category {
    display: block;
    font-size: 16px;
    letter-spacing: 2.93px;
  }
  &__title {
    font-family: "Times New Roman", serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 6.8px;
    @media screen and (min-width: 50em) {
      font-size: 40px;
    }
  }
  &__date {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    letter-spacing: 2.57px;
  }
  &__outline {
    margin-top: 32px;
    line-height: 1.78;
    letter-spacing: 2.93px;
  }
  &__link {
    display: block;
    position: relative;
    width: 100%;
    margin-top: 32px;
    padding: 0 24px;
    color: #ffffff;
    line-height: 48px;
    letter-spacing: 3.3px;
    text-align: left;
    text-decoration: none;
    transition: 0.3s;
    border: solid 1px #ffffff;
    box-sizing: border-box;
    @media screen and (min-width: 50em) {
      width: 216px;
    }
    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 20px;
      right: 16px;
      width: 8px;
      height: 8px;
      transition: 0.3s;
      transform: rotate(-45deg);
      border-right: solid 1px #ffffff;
      border-bottom: solid 1px #ffffff;
    }
    &:hover {
      color: #d1c1b7;
      background: #ffffff;
      &::before {
        border-right: solid 1px #d1c1b7;
        border-bottom: solid 1px #d1c1b7;
      }
    }
  }
}

.worksSkill {
  &__list {
    margin-top: 16px;
    list-style-type: none;
  }
  &__item {
    margin-top: 6px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: 3.3px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>

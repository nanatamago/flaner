<template>
  <div class="works">
    <h2 class="works__headline">WORKS</h2>
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
            <ul v-for="skill in work.skills" :key="skill" class="worksSkill__list">
              <li class="worksSkill__item">{{ skill }}</li>
            </ul>
          </div>
          <a v-if="work.link" class="works__link" :href="work.link">{{ work.title }}を見にいく</a>
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
@import url("https://fonts.googleapis.com/css2?family=Quattrocento&display=swap");
.works {
  margin-top: 160px;
  padding: 0 24px;
  &__headline {
    color: #898989;
    font-family: "Quattrocento", serif;
    font-size: 32px;
    letter-spacing: 8.89px;
  }
  &__item {
    display: flex;
    position: relative;
    margin-top: 80px;
    color: #ffffff;
    justify-content: flex-end;
  }
  &__thumbnail {
    position: absolute;
    top: 0;
    left: 0;
  }
  &__image {
    display: block;
    width: 50vw;
    height: calc(50vw / 1.67);
    object-fit: cover;
  }
  &__contents {
    width: 35vw;
    z-index: 10;
    padding-top: 165px;
  }
  &__category {
    display: block;
    font-size: 16px;
    letter-spacing: 2.93px;
  }
  &__title {
    font-family: "Georgia", serif;
    font-size: 4em;
    font-weight: bold;
    letter-spacing: 8.5px;
  }
  &__date {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    letter-spacing: 2.57px;
  }
  &__outline {
    font-size: 18px;
    margin-top: 40px;
    line-height: 1.33;
    letter-spacing: 3.3px;
  }
  &__link {
    display: block;
    position: relative;
    width: 35vw;
    margin-top: 32px;
    color: #ffffff;
    font-size: 18px;
    line-height: 63px;
    letter-spacing: 3.3px;
    text-align: center;
    text-decoration: none;
    transition: 0.3s;
    border: solid 1px #ffffff;
    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 25px;
      right: 24px;
      width: 14px;
      height: 14px;
      transition: 0.3s;
      transform: rotate(-45deg);
      border-right: solid 1px #ffffff;
      border-bottom: solid 1px #ffffff;
    }
    &:hover {
      color: #575757;
      background: #ffffff;
      &::before {
        border-right: solid 1px #575757;
        border-bottom: solid 1px #575757;
      }
    }
  }
}

.worksSkill {
  &__list {
    margin-top: 40px;
    list-style-type: none;
  }
  &__item {
    margin-top: 8px;
    letter-spacing: 3.3px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>

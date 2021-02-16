<template>
  <div class="works">
    <h2 class="works__heading">works</h2>
    <ul class="works__list">
      <li v-for="work in works" :key="work" class="works__item">
        <img class="works__image" :src="work.image" alt="flaner" loading="lazy">
        <div class="works__contents">
          <h3 class="works__title">{{ work.title }}</h3>
          <span class="works__year">{{ work.year }}</span>
          <div v-if="work.colors" class="works__concept">
            <div v-for="colors in getColorList(work.colors)" :key="colors" class="works__colors">
              <span
                v-for="color in colors"
                :key="color"
                class="works__cube"
                :style="{background: color}"
              ></span>
            </div>
          </div>
          <span class="works__category">{{ work.category }}</span>
          <p class="works__role">
            <span class="works__skill" v-for="skill in work.skills" :key="skill">/ {{ skill }}</span>
          </p>
          <a
            v-if="work.link"
            :href="work.link"
            class="works__link"
            target="_blank"
            rel="noopener"
          >View website</a>
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
      return {
        works
      };
    });
    /**
     * 配列の値をシャッフル
     * @type {array}
     */
    const shuffleValue = (array: any) => {
      let shuffledValue = array.slice();
      for (let i = shuffledValue.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledValue[i], shuffledValue[j]] = [
          shuffledValue[j],
          shuffledValue[i]
        ];
      }
      return shuffledValue;
    };
    /**
     * 配列からランダムで値を選択
     * @return {array}
     */
    const pickRandomValue = (array: any, number: number) => {
      let pickedArray = [];
      for (let i = 0; i < number; i++) {
        let arrayIndex = Math.floor(Math.random() * array.length);
        pickedArray[i] = array[arrayIndex];
        array.splice(arrayIndex, 1);
      }
      return pickedArray;
    };
    /**
     * シャッフルされた値を２個入りの配列に編成
     * @type {array}
     */
    const arrangeByNumber = (array: any, number: number) => {
      const length = Math.ceil(array.length / number);
      return new Array(length)
        .fill()
        .map((_: any, i: any) => array.slice(i * number, (i + 1) * number));
    };
    /**
     * コンセプトカラーのリストを作成
     * @type {array}
     */
    const getColorList = (array: any) => {
      let colorList = arrangeByNumber(
        pickRandomValue(shuffleValue(array), 4),
        2
      );
      return colorList;
    };

    return {
      works,
      getColorList
    };
  }
});
</script>

<style lang="scss" scoped>
.works {
  margin-top: 80px;
  &__heading {
    padding: 0 24px;
    font-family: "copperplate", sans-serif;
    font-size: 18px;
    font-weight: 300;
    @media screen and (min-width: 600px) {
      font-size: 24px;
    }
    @media screen and (min-width: 1024px) {
      padding: 0px;
    }
  }
  &__list {
    margin-top: 32px;
    @media screen and (min-width: 600px) {
      margin-top: 40px;
    }
  }
  &__item {
    max-width: 375px;
    margin-top: 40px;
    color: #ffffff;

    &:first-child {
      margin-top: 0;
    }
    @media screen and (min-width: 600px) {
      max-width: 550px;
      margin-top: 80px;
    }
    @media screen and (min-width: 1024px) {
      display: flex;
      max-width: 990px;
    }
  }
  &__image {
    display: block;
    width: 100%;
    max-width: 550px;
    height: calc(375px / 1.67);
    object-fit: cover;
    @media screen and (min-width: 600px) {
      height: calc(550px / 1.67);
    }
  }
  &__contents {
    position: relative;
    width: 100%;
    z-index: 10;
    margin-top: -12px;
    padding: 0 24px;
    line-height: 1;
    @media screen and (min-width: 660px) {
      margin-top: -16px;
    }
    @media screen and (min-width: 1024px) {
      width: 30%;
      padding-top: calc(550px / 1.67 / 2);
      margin-left: -40px;
    }
  }
  &__title {
    font-family: "copperplate", sans-serif;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.14em;
    @media screen and (min-width: 660px) {
      font-size: 32px;
    }
  }
  &__year {
    display: block;
    margin-top: 4px;
    font-family: "copperplate", sans-serif;
    font-size: 12px;
    @media screen and (min-width: 660px) {
      margin-top: 6px;
      font-size: 14px;
    }
  }
  &__concept {
    position: absolute;
    right: 24px;
  }
  &__colors {
    display: flex;
  }
  &__cube {
    display: block;
    width: 18px;
    height: 18px;
  }
  &__category {
    display: block;
    margin-top: 16px;
    font-size: 14px;
    @media screen and (min-width: 660px) {
      margin-top: 24px;
      font-size: 16px;
    }
  }
  &__role {
    margin-top: 8px;
    font-size: 14px;

    @media screen and (min-width: 660px) {
      font-size: 16px;
    }
  }
  &__skill {
    margin-left: 6px;
    line-height: 1;
    @media screen and (min-width: 660px) {
      margin-left: 6px;
    }
    &:first-of-type {
      margin-left: 0;
    }
  }
  &__link {
    display: inline-block;
    position: relative;
    margin-top: 32px;
    padding-right: 22px;
    color: #e36c6c;
    font-size: 12px;
    text-decoration: none;

    letter-spacing: 0.22em;
    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 1px;
      right: 0;
      width: 18px;
      height: 10px;
      background: url("../assets/images/arrow.svg") no-repeat;
      background-size: contain;
    }
    @media screen and (min-width: 660px) {
      padding-right: 32px;
      font-size: 18px;
      letter-spacing: 0.2em;
      &::before {
        top: 3px;
        width: 22px;
        height: calc(22px / 1.29);
      }
    }
  }
}
</style>

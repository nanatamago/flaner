<template>
  <div :style="styles" class="worksList" ref="worksElement">
    <h2 class="worksList__heading">works</h2>
    <ul class="worksList__list">
      <li v-for="worksItem in worksList" :key="worksItem" class="worksList__item">
        <img class="worksList__image" :src="worksItem.image" alt="flaner" loading="lazy">
        <div class="worksList__contents">
          <h3 class="worksList__title">{{ worksItem.title }}</h3>
          <span class="worksList__year">{{ worksItem.year }}</span>
          <div v-if="worksItem.colors" class="worksList__concept">
            <div
              v-for="colors in getColorList(worksItem.colors)"
              :key="colors"
              class="worksList__colors"
            >
              <span
                v-for="color in colors"
                :key="color"
                class="worksList__cube"
                :style="{background : color}"
              ></span>
            </div>
          </div>
          <span class="worksList__category">{{ worksItem.category }}</span>
          <p class="worksList__roles">
            <span class="worksList__role" v-for="role in worksItem.roles" :key="role">/ {{ role }}</span>
          </p>
          <a
            v-if="worksItem.link"
            :href="worksItem.link"
            class="worksList__link"
            target="_blank"
            rel="noopener"
          >View website</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  onUpdated,
  computed
} from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default defineComponent({
  name: "WorksList",
  setup: () => {
    let worksList: any = ref();
    const worksElement = ref<HTMLDivElement | any>();
    const store = useStore();
    const state = reactive<{
      isActive: String;
      color: String;
    }>({
      isActive: "",
      color: ""
    });

    onMounted(() => {
      axios
        .get("src/assets/data/works.json")
        .then(response => (worksList.value = response.data));
      return {
        worksList
      };
    });

    // コンポーネントの内容が用意されてから実行
    onUpdated(() => {
      const offsetY: number = Math.floor(
        window.pageYOffset + worksElement.value.getBoundingClientRect().top
      );
      const height: number = worksElement.value.clientHeight;
      store.commit("setWorksRect", { offsetY, height });
    });

    /**
     * 値を２個入りの配列に編成
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
      let colorList = arrangeByNumber(array, 2);
      return colorList;
    };

    const styles = computed<Object>(() => ({
      "--color": store.state.backgroundColor,
      "--background": "#ffffff",
      "--border": `1px solid ${store.state.backgroundColor}`,
      "--text": state.color
    }));

    return {
      worksList,
      worksElement,
      getColorList,
      state,
      styles,
      arrangeByNumber
    };
  }
});
</script>

<style lang="scss" scoped>
.worksList {
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
      padding: 0;
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
    &--bg {
      background-color: var(--text);
    }
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
  &__roles {
    margin-top: 8px;
    font-size: 14px;

    @media screen and (min-width: 660px) {
      font-size: 16px;
    }
  }
  &__role {
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
    width: 240px;
    margin-top: 32px;
    padding: 0 40px 0 16px;
    color: #ffffff;
    font-size: 12px;
    text-decoration: none;
    line-height: 44px;
    letter-spacing: 0.22em;
    transition: 0.3s;
    border: 1px solid #ffffff;
    &::before {
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      right: 16px;
      width: 10px;
      height: 10px;
      margin-top: -4px;
      transform: rotate(-45deg);
      border-right: 1px solid #ffffff;
      border-bottom: 1px solid #ffffff;
    }
    &:hover {
      color: var(--color);
      background: var(--background);
      &::before {
        border-right: var(--border);
        border-bottom: var(--border);
      }
    }
    @media screen and (min-width: 660px) {
      padding-right: 32px;
      font-size: 14px;
      letter-spacing: 0.2em;
    }
    @media screen and (min-width: 1024px) {
      line-height: 56px;
    }
  }
}
</style>

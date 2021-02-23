<template>
  <div v-if="worksList" class="worksList" ref="worksElement">
    <h2 class="worksList__heading">works</h2>
    <ul class="worksList__list">
      <li v-for="(worksItem, index) in worksList" :key="worksItem" class="worksList__item">
        <a class="worksList__link" @click="getWorksItem(index)">
          <img class="worksList__image" :src="worksItem.image" alt="flaner">
        </a>
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
          <span class="worksList__category">#{{ worksItem.category }}</span>
          <p class="worksList__skills">
            skill :
            <span
              class="worksList__skill"
              v-for="skill in worksItem.skills"
              :key="skill"
            >{{ skill }}</span>
          </p>
          <!-- <a
            v-if="worksItem.link"
            :href="worksItem.link"
            class="worksList__link"
            target="_blank"
            rel="noopener"
          >View website</a>-->
        </div>
      </li>
    </ul>
    <transition>
      <Detail v-if="state.isVisible">
        <template v-slot:image>
          <img :src="worksList[state.currentWorksItem].image" alt="flaner" width="550" height="330">
        </template>
        <h2>{{ worksList[state.currentWorksItem].title }}</h2>
        <p>{{ worksList[state.currentWorksItem].description }}</p>
        <div class="worksList__colors">
          コンセプトカラー
          <span
            v-for="color in worksList[state.currentWorksItem].colors"
            :key="color"
            class="worksList__cube"
            :style="{background : color}"
          ></span>
        </div>
        <p class="worksList__skills">
          担当 :
          <span
            class="worksList__skill"
            v-for="role in worksList[state.currentWorksItem].roles"
            :key="role"
          >{{ role }}</span>
        </p>
        <template v-slot:footer>閉じる</template>
      </Detail>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  onUpdated,
  computed,
  ComputedRef,
  onUnmounted
} from "vue";
import axios from "axios";
import { useStore } from "vuex";

import Detail from "../views/Detail.vue";

export default defineComponent({
  name: "WorksList",
  components: { Detail },
  setup: () => {
    let worksList: any = ref();
    const worksElement = ref<HTMLDivElement | any>();
    const store = useStore();
    const state = reactive<{
      worksItems: any;
      isVisible: ComputedRef<Boolean>;
      currentWorksItem: ComputedRef<Number>;
      isiOS: ComputedRef<Boolean>;
    }>({
      worksItems: [],
      isVisible: computed(() => {
        return store.state.displayWorksItemModal;
      }),
      currentWorksItem: computed(() => {
        return store.state.currentWorksItem;
      }),
      isiOS: computed(() => {
        return store.state.userAgentiOS;
      })
    });

    /**
     * スクロールでリストをフェードイン
     */
    const fadeOnScroll = () => {
      let worksItemNodes = document.getElementsByClassName("worksList__item");
      state.worksItems = Array.from(worksItemNodes);
      for (let i = 0; i < state.worksItems.length; i++) {
        const height = state.worksItems[i].getBoundingClientRect().top;
        if (height < window.innerHeight - 300) {
          let child = state.worksItems[i].firstChild;
          child.classList.add("visible");
          let contents = child.nextSibling;
          contents.classList.add("visible");
        }
      }
    };
    /**
     * 配列の値をシャッフル
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
     * 値を２個入りの配列に編成
     */
    const arrangeByNumber = (array: any, number: number) => {
      const length = Math.ceil(array.length / number);
      return new Array(length)
        .fill(length)
        .map((_: any, i: any) => array.slice(i * number, (i + 1) * number));
    };
    /**
     * コンセプトカラーのリストを作成
     */
    const getColorList = (array: any) => {
      let colorList = arrangeByNumber(
        pickRandomValue(shuffleValue(array), 4),
        2
      );
      return colorList;
    };

    const styles = computed<Object>(() => ({
      "--color": store.state.backgroundColor,
      "--background": "#ffffff",
      "--border": `1px solid ${store.state.backgroundColor}`
    }));

    /**
     *
     */
    const getWorksItem = (index: Number) => {
      store.commit("setCurrentWorksItem", index);
      store.commit("setDisplayWorksItemModal", true);
      let body = document.body;
      let scrollPosition;
      if (state.isiOS) {
        scrollPosition = document.body.scrollTop;
        body.style.position = "fixed";
        body.style.top = `-${scrollPosition}px`;
      } else {
        body.style.overflow = "hidden";
      }
    };

    axios
      .get("src/assets/data/works.json")
      .then(response => (worksList.value = response.data));

    onUpdated(() => {
      const offsetY: Number = Math.floor(
        window.pageYOffset + worksElement.value.getBoundingClientRect().top
      );
      const height: Number = worksElement.value.clientHeight;
      store.commit("setWorksRect", { offsetY, height });
      window.addEventListener("scroll", fadeOnScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", fadeOnScroll);
    });

    return {
      worksList,
      worksElement,
      state,
      fadeOnScroll,
      getColorList,
      styles,
      getWorksItem
    };
  }
});
</script>

<style lang="scss" scoped>
.worksList {
  margin-top: 80px;
  @media screen and (min-width: 660px) {
    margin-top: 120px;
  }
  &__heading {
    padding: 0 24px;
    font-family: "copperplate", sans-serif;
    font-size: 18px;
    font-weight: 300;
    @media screen and (min-width: 660px) {
      font-size: 24px;
    }
    @media screen and (min-width: 1024px) {
      padding: 0px;
    }
  }
  &__list {
    margin-top: 32px;
    @media screen and (min-width: 660px) {
      margin-top: 40px;
    }
  }
  &__item {
    max-width: 375px;
    margin-top: 60px;
    color: #ffffff;
    &:first-child {
      margin-top: 0;
    }
    @media screen and (min-width: 660px) {
      max-width: 550px;
      margin-top: 120px;
    }
    @media screen and (min-width: 1024px) {
      display: flex;
      max-width: 990px;
    }
  }
  &__link {
    display: block;
    width: 100%;
    max-width: 550px;
    height: calc(375px / 1.67);
    visibility: hidden;
    cursor: pointer;
    &.visible {
      visibility: visible;
      animation: imageFade 2s;
    }
    @media screen and (min-width: 660px) {
      height: calc(550px / 1.67);
    }
    @keyframes imageFade {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }
  &__image {
    display: block;
    width: 100%;
    max-width: 550px;
    height: calc(375px / 1.67);
    object-fit: cover;
    filter: grayscale(0%);
    transition: 0.3s;
    &:hover,
    &:active {
      filter: grayscale(100%);
    }
    @media screen and (min-width: 660px) {
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
    visibility: hidden;
    &.visible {
      visibility: visible;
      animation: contentFade 1s;
    }
    @keyframes contentFade {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
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
    bottom: 0;
  }
  &__colors {
    display: flex;
  }
  &__cube {
    display: block;
    width: 16px;
    height: 16px;
    @media screen and (min-width: 660px) {
      width: 18px;
      height: 18px;
    }
  }
  &__category {
    display: inline-block;
    margin-top: 16px;
    font-size: 14px;
    @media screen and (min-width: 660px) {
      margin-top: 24px;
      font-size: 16px;
    }
  }
  &__skills {
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
      &::before {
        position: absolute;
        content: "";
        padding-right: 0;
      }
    }
    &::before {
      position: relative;
      content: "/";
      padding-right: 6px;
    }
  }
}

.v-enter-active,
.v-move {
  transition: opacity 0.5s, transform 0.5s;
}
.v-leave-active {
  position: absolute;
  width: 100%;
  transition: opacity 0.5s, transform 0.5s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.detail {
  &__image {
    max-width: 375px;
    margin-top: 60px;
    @media screen and (min-width: 660px) {
      max-width: 550px;
    }
    @media screen and (min-width: 1024px) {
      max-width: 990px;
    }
    img {
      display: block;
      width: 100%;
      max-width: 550px;
      height: calc(375px / 1.67);
      object-fit: cover;
      @media screen and (min-width: 660px) {
        height: calc(550px / 1.67);
      }
    }
  }
}
</style>

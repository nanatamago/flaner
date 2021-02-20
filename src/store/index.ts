import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface GlobalState {
  backgroundColor: String;
  offsetY: Number;
  height: Number;
  logoOffsetY: Number;
  logoHeight: Number;
  currentRoutePath: String;
  displayHeaderLogo: Boolean;
}

export const StateKey: InjectionKey<Store<GlobalState>> = Symbol();

const store = createStore({
  state: {
    backgroundColor: "#d4d0bb",
    offsetY: 0,
    height: 0,
    logoOffsetY: 0,
    logoHeight: 0,
    currentRoutePath: "",
    displayHeaderLogo: false
  },
  mutations: {
    setBackgroundColor(state, backgroundColor) {
      state.backgroundColor = backgroundColor;
    },
    setWorksRect(state, { offsetY, height }) {
      state.offsetY = offsetY;
      state.height = height;
    },
    setLogoRect(state, { logoOffsetY, logoHeight }) {
      state.logoOffsetY = logoOffsetY;
      state.logoHeight = logoHeight;
    },
    setCurrentRoutePath(state, routePath) {
      state.currentRoutePath = routePath;
    },
    setDisplayHeaderLogo(state, displayHeaderLogo) {
      state.displayHeaderLogo = displayHeaderLogo;
    }
  }
});

export function useStore() {
  return baseUseStore(StateKey);
}

export default store;

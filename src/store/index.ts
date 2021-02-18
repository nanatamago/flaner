import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface GlobalState {
  offsetY: Number;
  height: Number;
}

export const StateKey: InjectionKey<Store<GlobalState>> = Symbol();

const store = createStore({
  state: {
    offsetY: 0,
    height: 0
  },
  mutations: {
    setWorksRect(state, { offsetY, height }) {
      state.offsetY = offsetY;
      state.height = height;
    }
  }
});

export function useStore() {
  return baseUseStore(StateKey);
}

export default store;

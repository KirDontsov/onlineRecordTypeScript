import { createModel } from "@rematch/core";

interface MyState {
  filials: string;
  chosenFilial: string;
  isReadyMap: boolean;
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  marker: {
    latitude: number;
    longitude: number;
  };
}

export const map = createModel<MyState>({
  state: {
    filials: "",
    chosenFilial: "",
    isReady: false,
    region: {
      latitude: 44.5622,
      longitude: 38.0848,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    marker: {
      latitude: 44.5622,
      longitude: 38.0848
    }
  },
  reducers: {
    getFilials: (state: MyState, payload: string) => ({
      ...state,
      filials: payload
    }),
    setFilial: (state: MyState, payload: string) => ({
      ...state,
      chosenFilial: payload
    }),
    setIsReady: (state: MyState, payload: boolean) => ({
      ...state,
      isReady: payload
    })
  }
});

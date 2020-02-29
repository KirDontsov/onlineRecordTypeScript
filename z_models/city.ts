import { createModel } from "@rematch/core";

interface MyState {
  textInput: string;
  cities: string;
  chosenCity: string;
  isReadyCity: boolean;
}

export const city = createModel<MyState>({
  state: {
    textInput: "",
    cities: "",
    chosenCity: "",
    isReadyCity: false
  },
  reducers: {
    setTextInput: (state: MyState, payload: string) => ({
      ...state,
      textInput: payload
    }),
    getCities: (state: MyState, payload: string) => ({
      ...state,
      cities: payload
    }),
    setCity: (state: MyState, payload: string) => ({
      ...state,
      chosenCity: payload
    }),
    setIsReady: (state: MyState, payload: boolean) => ({
      ...state,
      isReadyCity: payload
    })
  }
});

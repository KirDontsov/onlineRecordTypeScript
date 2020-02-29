import { createModel } from "@rematch/core";

interface MyState {
  step: number;
  item: string;
  specialists: string;
  chosenSpecialist: string;
  service: string;
  date: string;
  time: string;
  isReadyQuiz: boolean;
}

export const quiz = createModel<MyState>({
  state: {
    step: 0,
    item: "",
    specialists: "",
    chosenSpecialist: "",
    service: "",
    date: "",
    time: "",
    isReady: false
  },
  reducers: {
    setStep: (state: MyState, payload: number) => ({
      ...state,
      step: payload
    }),
    setItem: (state: MyState, payload: string) => ({
      ...state,
      item: payload
    }),
    setSpecialists: (state: MyState, payload: string) => ({
      ...state,
      specialists: payload
    }),
    getChosenSpecialist: (state: MyState, payload: string) => ({
      ...state,
      chosenSpecialist: payload
    }),
    setService: (state: MyState, payload: string) => ({
      ...state,
      service: payload
    }),
    setDate: (state: MyState, payload: string) => ({
      ...state,
      date: payload
    }),
    setTime: (state: MyState, payload: string) => ({
      ...state,
      time: payload
    }),
    setIsReady: (state: MyState, payload: boolean) => ({
      ...state,
      isReadyQuiz: payload
    })
  }
});

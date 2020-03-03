export interface QuizState {
  state: IState;
  reducers: object;
  effects?: () => void;
}

interface IState {
  step: number;
  item: string;
  specialists: string;
  chosenSpecialist: string;
  service: string;
  date: string;
  time: string;
  isReadyQuiz: boolean;
}

export const quiz = {
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
    setStep: (state: QuizState, payload: number) => ({
      ...state,
      step: payload
    }),
    setItem: (state: QuizState, payload: string) => ({
      ...state,
      item: payload
    }),
    setSpecialists: (state: QuizState, payload: string) => ({
      ...state,
      specialists: payload
    }),
    getChosenSpecialist: (state: QuizState, payload: string) => ({
      ...state,
      chosenSpecialist: payload
    }),
    setService: (state: QuizState, payload: string) => ({
      ...state,
      service: payload
    }),
    setDate: (state: QuizState, payload: string) => ({
      ...state,
      date: payload
    }),
    setTime: (state: QuizState, payload: string) => ({
      ...state,
      time: payload
    }),
    setIsReady: (state: QuizState, payload: boolean) => ({
      ...state,
      isReadyQuiz: payload
    })
  }
};

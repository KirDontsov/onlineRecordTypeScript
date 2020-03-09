import { Dispatch } from "../store";
import axios from "axios";

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
	isReadySpecialists: boolean;
	isReadyServices: boolean;
	isReadyCallendar: boolean;
	isReadyTime: boolean;
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
		isReadySpecialists: false,
		isReadyServices: false,
		isReadyCallendar: false,
		isReadyTime: false,
		isReadyQuiz: false
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
		getSpecialists: (state: QuizState, payload: []) => ({
			...state,
			specialists: payload
		}),
		setChosenSpecialist: (state: QuizState, payload: string) => ({
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
		setIsReadySpecialists: (state: QuizState, payload: boolean) => ({
			...state,
			isReadySpecialists: payload
		})
	},
	effects: (dispatch: Dispatch) => ({
		async fetchSpecialists() {
			const res = await axios.get("http://book-service.tw1.su/city.json");
			dispatch.quiz.getSpecialists(res.data);
			dispatch.quiz.setIsReadySpecialists(true);
		}
	})
};

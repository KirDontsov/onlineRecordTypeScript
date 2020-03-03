import { Dispatch } from "../store";
import axios from "axios";

export interface MapState {
  state: IState;
  reducers: object;
  effects?: () => void;
}

interface IState {
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

export const map = {
  state: {
    filials: "",
    chosenFilial: "",
    isReadyMap: false,
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
    getFilials: (state: MapState, payload: string) => ({
      ...state,
      filials: payload
    }),
    setFilial: (state: MapState, payload: string) => ({
      ...state,
      chosenFilial: payload
    }),
    setIsReadyMap: (state: MapState, payload: boolean) => ({
      ...state,
      isReadyMap: payload
    })
  },
  effects: (dispatch: Dispatch) => ({
    async fetchCities() {
      const res = await axios.get("http://book-service.tw1.su/city.json");
      dispatch.map.getFilials(res.data);
      dispatch.map.setIsReadyMap(true);
    }
  })
};

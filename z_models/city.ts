import { Dispatch } from "../store";
import axios from "axios";

interface CityState {
  cities: Array<CitiesType>;
}
interface CitiesType {
  id?: string | number;
  city?: string;
  region?: string;
}

export const city = {
  state: {
    cities: new Array(),
    isReadyCities: false,
    chosenCity: ""
  },
  reducers: {
    getCities: (state: CityState, payload: any[]) => ({
      ...state,
      cities: payload
    }),
    setReadyCities: (state: CityState, payload: boolean) => ({
      ...state,
      isReadyCities: payload
    }),
    chooseCity: (state: CityState, payload: string) => ({
      ...state,
      chosenCity: payload
    })
  },
  effects: (dispatch: Dispatch) => ({
    async fetchCities() {
      const res = await axios.get("http://book-service.tw1.su/city.json");
      dispatch.city.getCities(res.data);
      dispatch.city.setReadyCities(true);
    }
  })
};

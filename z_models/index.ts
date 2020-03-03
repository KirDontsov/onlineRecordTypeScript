import { city } from "./city";
import { map } from "./map";
import { quiz } from "./quiz";

export interface RootModel {
  city: typeof city;
  map: typeof map;
  quiz: typeof quiz;
}

export const models: RootModel = { city, map, quiz };

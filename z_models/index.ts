import { city } from "./city";
import { map } from "./map";
import { quiz } from "./quiz";
import { theme } from "./theme";

export interface RootModel {
  city: typeof city;
  map: typeof map;
  quiz: typeof quiz;
  theme: typeof theme;
}

export const models: RootModel = { city, map, quiz, theme };

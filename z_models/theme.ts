interface IThemeState {
  darkTheme: boolean;
}

export const theme = {
  state: {
    darkTheme: false
  },
  reducers: {
    setDarkTheme: (state: IThemeState, payload: boolean) => ({
      ...state,
      darkTheme: payload
    })
  }
};

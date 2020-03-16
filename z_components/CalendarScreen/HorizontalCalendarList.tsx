import React, { Component } from "react";
import { CalendarList } from "react-native-calendars";
import { Alert, StyleSheet } from "react-native";
import Loader from "../ui/Loader";
import { LocaleConfig } from "react-native-calendars";
import { windowHeight, blackColor, activeColor, whiteColor } from "../ui/Vars";
import { connect } from "react-redux";
import { iRootState, Dispatch } from "../../store";

interface ICalendarProps
  extends Partial<ReturnType<typeof mapState>>,
    Partial<ReturnType<typeof mapDispatch>> {
  navigation?: any;
}

export interface ICalendarState {
  loading: boolean;
}

LocaleConfig.locales["ru"] = {
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ],
  monthNamesShort: [
    "Янв.",
    "Фев.",
    "Мар.",
    "Апр.",
    "Май",
    "Июнь",
    "Июль.",
    "Авг.",
    "Сен.",
    "Окт.",
    "Ноя.",
    "Дек."
  ],
  dayNames: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  ],
  dayNamesShort: ["Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."]
};
LocaleConfig.defaultLocale = "ru";

const themeDark = {
  backgroundColor: blackColor,
  calendarBackground: blackColor,
  textSectionTitleColor: whiteColor,
  selectedDayBackgroundColor: "#00adf5",
  selectedDayTextColor: whiteColor,
  todayTextColor: activeColor,
  dayTextColor: whiteColor,
  textDisabledColor: "#2d4150",
  dotColor: "#00adf5",
  selectedDotColor: "#ffffff",
  arrowColor: "orange",
  disabledArrowColor: "#d9e1e8",
  monthTextColor: whiteColor,
  indicatorColor: activeColor,
  // textDayFontFamily: "monospace",
  // textMonthFontFamily: "monospace",
  // textDayHeaderFontFamily: "monospace",
  textDayFontWeight: "300",
  textMonthFontWeight: "bold",
  textDayHeaderFontWeight: "300",
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
};

const themeLight = {
  backgroundColor: "#ffffff",
  calendarBackground: "#ffffff",
  textSectionTitleColor: "#b6c1cd",
  selectedDayBackgroundColor: "#00adf5",
  selectedDayTextColor: "#ffffff",
  todayTextColor: activeColor,
  dayTextColor: "#2d4150",
  textDisabledColor: "#d9e1e8",
  dotColor: "#00adf5",
  selectedDotColor: "#ffffff",
  arrowColor: "orange",
  disabledArrowColor: "#d9e1e8",
  monthTextColor: activeColor,
  indicatorColor: activeColor,
  // textDayFontFamily: "monospace",
  // textMonthFontFamily: "monospace",
  // textDayHeaderFontFamily: "monospace",
  textDayFontWeight: "300",
  textMonthFontWeight: "bold",
  textDayHeaderFontWeight: "300",
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
};

class HorizontalCalendarList extends Component<ICalendarProps, ICalendarState> {
  state = {
    loading: true
  };

  async componentDidMount() {
    this.setState({ loading: false });
  }

  onDayPress = (day: any) => {
    this.props.setDate(day.dateString);
    this.props.navigation.navigate("Record");
    console.log(day.dateString);
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <CalendarList
        style={
          this.props.darkTheme ? styles.calendarDark : styles.calendarLight
        }
        theme={this.props.darkTheme ? { ...themeDark } : { ...themeLight }}
        current={new Date()}
        minDate={new Date()}
        pastScrollRange={1}
        futureScrollRange={1}
        horizontal
        pagingEnabled
        hideExtraDays={false}
        onDayPress={this.onDayPress}
        markedDates={{
          "2020-03-13": {
            dots: null,
            disabled: true
          },
          "2020-03-14": { dots: null, disabled: true }
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  calendarLight: {
    paddingTop: 70,
    height: windowHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 300
  },
  calendarDark: {
    paddingTop: 70,
    height: windowHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 300
  }
});

const mapState = (state: iRootState) => ({
  step: state.quiz.step,
  date: state.quiz.date,
  // specialists: state.quiz.specialists,
  darkTheme: state.theme.darkTheme
});

const mapDispatch = (dispatch: Dispatch) => ({
  setDate: dispatch.quiz.setDate
});

export default connect(
  mapState as any,
  mapDispatch as any
)(HorizontalCalendarList);

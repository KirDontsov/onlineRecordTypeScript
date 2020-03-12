import React, { Component } from "react";
import { CalendarList } from "react-native-calendars";
import { Alert, StyleSheet } from "react-native";
import Loader from "../ui/Loader";
import { LocaleConfig } from "react-native-calendars";
import { windowHeight } from "../ui/Vars";

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

export default class HorizontalCalendarList extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <CalendarList
        style={styles.calendar}
        current={"2020-03-12"}
        minDate={"2020-03-12"}
        pastScrollRange={1}
        futureScrollRange={1}
        horizontal
        pagingEnabled
        hideExtraDays={false}
        onDayPress={() => {
          Alert.alert("Нажатие на день", "Сюда можно передать функцию", [
            { text: "ОК" }
          ]);
        }}
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
  calendar: {
    paddingTop: 70,
    height: windowHeight,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: 200
  }
});

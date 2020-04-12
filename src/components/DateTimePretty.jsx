import React, { Component } from "react";
import DateTime from "./DateTime";

const displayDate = (number, titles) => {
  const cases = [2, 0, 2, 5, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

const minutes = ["минута", "минуты", "минут"];
const hours = ["час", "часа", "часов"];
const days = ["день", "дня", "дней"];

const MIN = 1000 * 60;
const HOUR = MIN * 60;
const DAY = HOUR * 24;

const dateHOC = (WrappedComponent) => {
  return class extends Component {
    getRelativeTime = () => {
      const currentDate = new Date();
      const componentDate = new Date(this.props.date);
      const timeDiff = currentDate - componentDate;

      const minsDiff = Math.floor(timeDiff / MIN);
      const hoursDiff = Math.floor(timeDiff / HOUR);
      const daysDiff = Math.floor(timeDiff / DAY);

      if (hoursDiff < 1) {
        return `${minsDiff} ${displayDate(minsDiff, minutes)} назад`;
      } else if (daysDiff < 1) {
        return `${hoursDiff} ${displayDate(hoursDiff, hours)} назад`;
      }
      return `${daysDiff} ${displayDate(daysDiff, days)} назад`;
    };

    render() {
      const { date } = this.props;
      return <WrappedComponent date={this.getRelativeTime(date)} />;
    }
  };
};

const DateTimePretty = dateHOC(DateTime);

export default DateTimePretty;

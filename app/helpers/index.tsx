import { forecastList, forecastType } from "../types";
import moment from "moment";
import _ from "lodash";

export const getCurrentDate = () => {
  const currentDate = Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return currentDate;
};

export const getTimestampTime = (timestamp: number): string => {
  const time = Intl.DateTimeFormat("sv-SE", {
    timeStyle: "short",
  }).format(timestamp * 1000);

  return time;
};

export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return "NE";

  if (deg > 76 && deg <= 105) return "E";
  if (deg > 105 && deg <= 165) return "SE";

  if (deg > 166 && deg <= 195) return "S";
  if (deg > 195 && deg <= 255) return "SW";

  if (deg > 255 && deg <= 285) return "W";
  if (deg > 285 && deg <= 345) return "NW";

  return "N";
};

export const getPop = (value: number): string => {
  if (value <= 0.33) return 'Low probability'
  if (value > 0.33 && value <= 0.66) return 'Moderate probability'

  return 'High probability'
}

export const getHumidityValue = (level: number): string => {
  if (level <= 55) return 'Fairly dry and comfortable'
  if (level > 55 && level <= 65) return 'A bit sticky, expect a muggy evening'

  return 'Lots of moisture in the air'
}

//Using lodash + moment for grouping weather data by date.
export const getWeekForcast = (data: forecastType) => {
  return _.groupBy(data.list, (result) => moment.unix(result.dt).format("YYYY-MM-DD"));
};

export const getWeekDay = (day: string) => {
  return moment(day).format("ddd")
}

export const getDailyMaxTemp = (data: forecastList[]) => {
  const temps = data.map((values) => {
    return values.main.temp;
  })
  return Math.max(...temps).toFixed();
}

export const getDailyMinTemp = (data: forecastList[]) => {
  const temps = data.map((values) => {
    return values.main.temp;
  })
  return Math.min(...temps).toFixed();
}
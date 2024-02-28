import { forecastType } from "../types";

type Props = {
  data: forecastType;
};

import {
  getWeekForcast,
  getWeekDay,
  getDailyMaxTemp,
  getDailyMinTemp,
} from './../helpers'


function Week({ data }: Props) {
  const today = data.list[0];
  const week = getWeekForcast(data);
  return (
    <section className="text-gray-800 w-full">
    <h1 className="mb-4 text-3xl text-white font-medium">Week</h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full">
      {Object.entries(week).slice(1, 7).map(([key, time], index) => (
        <div
          key={index}
          className="bg-white/60 p-3 text-center rounded-lg flex flex-col items-center"
        >
          <p className="text-xl">{getWeekDay(key)}</p>
          <img
            alt={`weather-icon-${time[0].weather[0].description}`}
            src={`http://openweathermap.org/img/wn/${time[0].weather[0].icon}@2x.png`}
          />
          <div>{getDailyMaxTemp(time)}° <span className="opacity-50 ml-1">{getDailyMinTemp(time)}°</span></div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Week;

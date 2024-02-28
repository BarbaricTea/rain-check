import { BsSunrise, BsSunset } from "react-icons/bs";
import { MdAir } from "react-icons/md";
import { RiCompass2Line, RiWaterPercentLine } from "react-icons/ri";
import { WiCloud, WiDust, WiThermometerExterior } from "react-icons/wi";
import { forecastType } from "../types";
import {
  getWindDirection,
  getTimestampTime,
  getHumidityValue,
  getPop,
} from "./../helpers";
import DetailsCard from "./detailsCard";

type Props = {
  data: forecastType;
};
const Details = ({ data }: Props) => {
  const today = data.list[0];
  return (
    <section>
      <h1 className="mb-4 text-3xl text-white font-medium">
        Today's Highlights
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <DetailsCard
          icon="wind"
          title="Wind"
          info={`${Math.round(today.wind.speed)} km/h`}
          description={`${getWindDirection(Math.round(today.wind.deg))}, gusts 
                      ${today.wind.gust.toFixed(1)} km/h`}
        />
        <DetailsCard
          icon="humidity"
          title="Humidity"
          info={`${today.main.humidity}%`}
          description={getHumidityValue(today.main.humidity)}
        />
        <DetailsCard
          icon="sunrise"
          title="Sunrise"
          info={`${getTimestampTime(data.sunrise)}`}
        />
        <DetailsCard
          icon="sunset"
          title="Sunset"
          info={`${getTimestampTime(data.sunset)}`}
        />
        <DetailsCard
          icon="feels"
          title="Feels like"
          info={`${today.main.feels_like}°`}
          description={`Feels ${
            Math.round(today.main.feels_like) < Math.round(today.main.temp)
              ? "colder"
              : "warmer"
          }`}
        />
        <DetailsCard
          icon="cloud"
          title="Clouds"
          info={`${today.clouds.all}%`}
          description={`With visibility of ${today.visibility} km`}
        />
        <DetailsCard
          icon="pressure"
          title="Pressure"
          info={`${today.main.pressure} hPa`}
          description={` ${
            Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
          } than standard`}
        />
        <DetailsCard
          icon="pop"
          title="Risk of rain"
          info={`${Math.round(today.pop * 100)}%`}
          description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
        />
      </div>
    </section>
  );
};

export default Details;

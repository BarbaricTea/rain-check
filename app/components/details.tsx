import { forecastType } from "../types";
import {
  getWindDirection,
  getTimestampTime,
  getHumidityValue,
} from "./../helpers";
import DetailsCard from "./detailsCard";
import Image from "next/image";

type Props = {
  data: forecastType;
};
const Details = ({ data }: Props) => {
  const today = data.list[0];
  return (
    <section>
      <h1 className="mb-4 text-xl text-gray-800 font-medium">
        Today's Highlights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DetailsCard
          title="Wind"
          children={
            <div className="flex flex-col justify-between h-full">
              <h3 className="my-4 text-6xl">
                {Math.round(today.wind.speed)} <span className="text-lg">km/h</span>
              </h3>
              <h2 className="flex text-sm items-center">
                <Image
                  className="mr-2"
                  width={30}
                  height={30}
                  alt={`weather-icon`}
                  src={require("/public/assets/details/wind.png")}
                />
                {getWindDirection(Math.round(today.wind.deg))}, gusts
                {today.wind.gust.toFixed(1)} km/h
              </h2>
            </div>
          }
        />
        <DetailsCard
          title="Humidity"
          children={
            <div>
              <h3 className="my-4 text-5xl">
                {today.main.humidity}
                <span className="text-lg">%</span>
              </h3>
              <h2 className="flex text-sm items-center">
                <Image
                  className="mr-2"
                  width={30}
                  height={30}
                  alt={`weather-icon`}
                  src={require("/public/assets/details/humidity.png")}
                />
                {getHumidityValue(today.main.humidity)}
              </h2>
            </div>
          }
        />
        <DetailsCard
          title="Sunrise & Sunset"
          children={
            <div className="flex flex-col mt-6">
              <span className="flex flex-row gap-2 text-xl items-center">
                <Image
                  className="mr-2"
                  width={70}
                  height={70}
                  alt={`weather-icon-${today.weather[0].description}`}
                  src={require("/public/assets/details/sunrise.png")}
                />
                {getTimestampTime(data.sunrise)}
              </span>
              <span className="flex flex-row gap-2 text-xl items-center">
                <Image
                  className="mr-2"
                  width={70}
                  height={70}
                  alt={`weather-icon-${today.weather[0].description}`}
                  src={require("/public/assets/details/sunset.png")}
                />
                {getTimestampTime(data.sunset)}
              </span>
            </div>
          }
        />
        <DetailsCard
          title="Feels like"
          children={
            <div>
              <h3 className="my-4 text-5xl">
                {today.main.feels_like.toFixed()}
                <span className="text-lg">°</span>
              </h3>
              <h2 className="flex text-sm items-center">
                <Image
                  className="mr-2"
                  width={30}
                  height={30}
                  alt={`weather-icon`}
                  src={require("/public/assets/details/feels.png")}
                />
                Feels{" "}
                {Math.round(today.main.feels_like) < Math.round(today.main.temp)
                  ? "colder"
                  : "warmer"}
              </h2>
            </div>
          }
        />
        <DetailsCard
          title="Clouds"
          children={
            <div className="h-full">
              <h3 className="my-4 text-5xl">
                {today.clouds.all}
                <span className="text-lg">%</span>
              </h3>
              <h2 className="flex text-sm items-center">
                <Image
                  className="mr-2"
                  width={30}
                  height={30}
                  alt={`weather-icon`}
                  src={require("/public/assets/details/clouds.png")}
                />
                With visibility of {today.visibility} km
              </h2>
            </div>
          }
        />
        <DetailsCard
          title="Pressure"
          children={
            <div>
              <h3 className="my-4 text-5xl">
              {today.main.pressure} 
                <span className="text-lg">hPa</span>
              </h3>
              <h2 className="flex text-sm items-center">
                {Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"}{" "}
                than standard
              </h2>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Details;

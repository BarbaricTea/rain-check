import { BsSunrise, BsSunset } from "react-icons/bs";
import { MdAir } from "react-icons/md";
import { RiCompass2Line, RiWaterPercentLine } from "react-icons/ri";
import { WiCloud, WiDust, WiThermometerExterior } from "react-icons/wi";
import { forecastType } from "../types";

type Props = {
  data: forecastType
}
const Details = ({ data }: Props) => {
  const today = data.list[0]
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white">Weather Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          >
            <div className="text-2xl">
              <h3>Wind Speed</h3>
              <h3>{today.wind.speed} km/h</h3>
            </div>
            <div>
                <MdAir fontSize={40}/>
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          >
            <div className="text-2xl">
              <h3>Wind direction</h3>
              <h3>{today.wind.deg}</h3>
            </div>
            <div>
                <RiCompass2Line fontSize={40}/>
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          >
            <div className="text-2xl">
              <h3>Humidity</h3>
              <h3>{today.main.humidity}%</h3>
            </div>
            <div>
                <RiWaterPercentLine fontSize={40}/>
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          >
            <div className="text-2xl">
              <h3>Sunrise</h3>
              <h3>{data.sunrise}</h3>
            </div>
            <div>
                <BsSunrise fontSize={40}/>
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          >
            <div className="text-2xl">
              <h3>Sunset</h3>
              <h3>{data.sunset}</h3>
            </div>
            <div>
                <BsSunset fontSize={40}/>
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          >
            <div className="text-2xl">
              <h3>Feels like</h3>
              <h3>{today.main.feels_like}°C</h3>
            </div>
            <div>
                <WiThermometerExterior fontSize={50}/>
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          >
            <div className="text-2xl">
              <h3>Cloud</h3>
              <h3>{today.clouds.all}</h3>
            </div>
            <div>
                <WiCloud fontSize={50}/>
            </div>
          </div>
          <div
            className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"
          >
            <div className="text-2xl">
              <h3>Visability</h3>
              <h3>{today.visibility} km</h3>
            </div>
            <div>
                <WiDust fontSize={50}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

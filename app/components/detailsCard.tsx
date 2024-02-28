import Cloud from "./icons/cloud";
import Feels from "./icons/feels";
import Humidity from "./icons/humidity";
import Pressure from "./icons/pressure";
import Sunrise from "./icons/sunrise";
import Sunset from "./icons/sunset";
import Wind from "./icons/wind";

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'cloud' | 'pressure' | 'sunrise' | 'sunset' | 'pop'
  title: string
  info: string
  description?: string
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  cloud: Cloud,
  pressure: Pressure,
  sunset: Sunset,
  sunrise: Sunrise,
  pop: Wind,
}

const DetailsCard = ({ icon, title, info, description }: Props) => {
  const Icon = icons[icon];
  return (
    <article className="text-zinc-700 bg-white/60 rounded-xl p-4 mb-5 flex flex-col justify-between">
      <div className="flex items-center text-xl font-semibold">
        <Icon /> 
        <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="my-4 text-2xl">{info}</h3>

      <div className="text-s font-medium">{description}</div>
    </article>
  )
}
export default DetailsCard
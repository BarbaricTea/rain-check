import { forecastType } from '../types'

type Props = {
    data: forecastType
  }

function Week({ data }: Props) {
  return (
    <></>
    // <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
    //     {data.list.map((day, index) => (
    //         <div key={index} className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center">
    //             <p>{new Date(day.date).toLocaleString("en-US", {weekday: "short"})}</p>
    //             <img src={day.day.condition.icon} alt={day.day.condition.text}/>
    //             <div>H: {day.day.maxtemp_c.toFixed()}°C</div>
    //             <div>L: {day.day.mintemp_c.toFixed()}°C</div>
    //         </div>
    //     ))}
    // </div>
  )
}

export default Week
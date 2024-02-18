import { getCurrentDate } from '../helpers/currentDate'
import { IoLocationSharp } from 'react-icons/io5'

import { forecastType } from '../types'

type Props = {
  data: forecastType
}

const Current = ({data} : Props) => {
const today = data.list[0]
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
        <div className="flex items-center">
            <div>
            <h1 className="text-3xl text-white">Today</h1>
            <p className="text-white">{getCurrentDate()}</p>
            </div>
            {/* {data.current.condition.icon && (
                <div>
                    <img className="w-[50px] object-cover" src={data.current.condition.icon} alt={data.current.condition.text} />
                </div>
            )} */}
        </div>
        <div>
        <p className="text-5xl text-white">{today.main.temp.toFixed()}<span>°C</span></p>
        <span className="text-white">{today.weather[0].description}</span>
        </div>
        <div>
            <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
                <IoLocationSharp />
                <span>{data.name}, {data.country}</span>
            </div>
        </div>
    </div>
  )
}

export default Current
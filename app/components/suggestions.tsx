import { optionType } from './../types/index'

type componentProps = {
  options: optionType[]
  onSelect: (option: optionType) => void
}

const Suggestions = ({ options, onSelect }: componentProps) => (
  <ul className="absolute text-gray-900 top-8 bg-white/80 w-full rounded-b-md">
    { options?.map((option: optionType, index: number) => (
      <li key={option.name + '-' + index}>
        <button
          className="text-left text-l w-full hover:bg-gray-600 hover:text-white px-2 py-1 cursor-pointer"
          onClick={() => onSelect(option)}
        >
          {option.name}, {option.country}
        </button>
      </li>
    ))}
  </ul>
)

export default Suggestions
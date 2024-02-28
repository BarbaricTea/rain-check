import { AiOutlineSearch } from "react-icons/ai";
import React, { ChangeEvent } from "react";
import { optionType } from "./../types/index";
import Suggestions from "./suggestions";

type Props = {
  term: string;
  options: optionType[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
};

const Input = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props) => {

  const handleSearch =(e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if(options){
          onOptionSelect(options[0])
        }
      }
    }
  return (
    <div className="relative flex items-center w-[20rem] md:w-[30rem] order-1 md:-order-none mt-10 md:mt-0">
      <input
        type="text"
        value={term}
        className="w-full bg-transparent border-b-2 outline-none"
        onChange={onInputChange}
        onKeyDown={handleSearch}
      />
      <Suggestions options={options} onSelect={onOptionSelect} />
      <div onClick={onSubmit} className="ml-[-25px] cursor-pointer">
        <AiOutlineSearch fontSize={25}/>
      </div>
    </div>
  );
};

export default Input;

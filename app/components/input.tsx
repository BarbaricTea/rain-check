import { AiOutlineSearch } from "react-icons/ai";
import React, { ChangeEvent } from "react";

import { optionType } from "./../types/index";
import Suggestions from "./suggestions";

type Props = {
  term: string;
  options: [];
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
  return (
    <div className="relative flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        type="text"
        value={term}
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
        onChange={onInputChange}
      />
      <Suggestions options={options} onSelect={onOptionSelect} />
      <div onClick={onSubmit} className="ml-[-25px] text-white cursor-pointer">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default Input;

import React, { useEffect, useState } from "react";
import { DropdownOption, DropdownOptions } from "../ChipDropdown";
import SelectBoxOption from "../SelectBoxOption";

/**
 * @component
 * Renders search field and dropdowns
 */
const SelectBox: React.FC<Props> = (props) => {
  const { options, selectedOptions, removeLastOption } = props;

  const [searchedText, setSearchedText] = useState<string>("");
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOptions>([]);

  useEffect(() => {
    const dropdownOptions = options
      .filter((option) => !selectedOptions.includes(option))
      .filter((option) =>
        searchedText.length === 0
          ? true
          : option.name.includes(searchedText) ||
            option.email.includes(searchedText)
      );

    setDropdownOptions(dropdownOptions);
  }, [options, selectedOptions, searchedText]);

  let pressedBackSpace: boolean = false;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === "Enter") {
    }

    if (key !== "Backspace") pressedBackSpace = false;

    if (key === "Backspace" && !searchedText) {
      if (pressedBackSpace) {
        console.log("remove top");
        removeLastOption();
        pressedBackSpace = false;
      }
      pressedBackSpace = true;
    }
  };

  const selectOption = (option: DropdownOption) => {
    props.selectOption(option);
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchedText(e.target.value.trim())}
      />

      <div>
        {dropdownOptions.map((option, index) => {
          const key = `select-box-option-${option.email}-${index}`;
          return (
            <button key={key} onClick={() => selectOption(option)}>
              <SelectBoxOption option={option} />;
            </button>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Types
 */

type Props = {
  options: DropdownOptions;
  selectedOptions: DropdownOptions;
  selectOption: (option: DropdownOption) => void;
  removeLastOption: () => void;
};

export default SelectBox;

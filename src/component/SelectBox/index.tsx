import React, { useCallback, useEffect, useRef, useState } from "react";
import { DropdownOption, DropdownOptions } from "../ChipDropdown";
import SelectBoxOption from "../SelectBoxOption";
import './selectBox.css';

/**
 * Types
 */
type Props = {
  options: DropdownOptions;
  selectedOptions: DropdownOptions;
  selectOption: (option: DropdownOption) => void;
  removeLastOption: () => void;
};

enum Keys {
  esc = "Escape",
  enter = "Enter",
  backspace = "Backspace",
  down = "ArrowDown",
  up = "ArrowUp"
}

/**
 * @component
 * Renders search field and dropdowns
 */
const SelectBox: React.FC<Props> = (props) => {
  const { options, selectedOptions, removeLastOption, selectOption } = props;
  let pressedBackSpace: boolean = false;
  const [searchedText, setSearchedText] = useState<string>("");
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOptions>([]);

  const [selectBoxStatus, setSelectBoxStaus] = useState<"show" | "hide">("hide");
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownOptionRef = useRef<HTMLButtonElement>(null);

  /**
   * @description filter dropdown option on options, selected options update
   */
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
    setActiveOptionIndex(0);
  }, [options, selectedOptions, searchedText]);

  useEffect(() => {
    dropdownOptionRef.current?.focus();
  }, [activeOptionIndex])

  const handleKeyPress = useCallback((event: any) => {
    if(event.metaKey && event.keyCode === 75) {
      showSelectBox();
    } else if (event.ctrlKey && event.keyCode === 75) {
      showSelectBox();
    } else if(event.key === Keys.esc) {
      hideSelectBox();
    } else if(event.key === Keys.down) {
      if(selectBoxStatus === "show" && dropdownOptions.length > 0) {
        setActiveOptionIndex(activeOptionIndex => (activeOptionIndex + 1) % dropdownOptions.length)
      }
    } else if(event.key === Keys.up) {
      if(selectBoxStatus === "show" && dropdownOptions.length > 0) {
        setActiveOptionIndex(activeOptionIndex => (activeOptionIndex - 1 + dropdownOptions.length) % dropdownOptions.length)
      } 
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);



  /**
   * @function handles `Enter`, `Escape` and `Backspace` key press
   * @argument keydown event
   * @description selects first option from select box on `Enter`
   * removes last selected option when pressed two `Backspaces`
  */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if(key === Keys.esc) {
      return;
    }
    showSelectBox();

    if (key === Keys.enter) {
      if(dropdownOptions.length > 0) {
        setSearchedText('');
        selectOption(dropdownOptions[0]);
      }
    }

    /**
     * handle `backspace`
     */
    if (key !== Keys.backspace) pressedBackSpace = false;
    if (key === Keys.backspace && !searchedText) {
      if (pressedBackSpace) {
        removeLastOption();
        pressedBackSpace = false;
      } else {
        pressedBackSpace = true;
      }
    }
  };

  const selectOptionWrapper = (option: DropdownOption) => {
    setSearchedText("");
    selectOption(option);
  }

  /**
   * input field focus handlers
   */
  const showSelectBox = () => {
    if(!!inputRef && !!inputRef.current) {
      inputRef.current?.focus();
    }
    setSelectBoxStaus("show");
  }
  const hideSelectBox = () => {
    setSelectBoxStaus("hide");
  }

  return (
    <div className="select-box-container">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchedText(e.target.value.trim())}
        onFocus={showSelectBox}
        className="input-field"
        placeholder="Search here"
        ref={inputRef}
        value={searchedText}
      />

      <div className="options-container" style={{
        display: selectBoxStatus === "show" ? "flex" : "none"
      }} >
        {selectBoxStatus === "show" && dropdownOptions.map((option, index) => {
          const key = `select-box-option-${option.email}-${index}`;
          const buttonRef = activeOptionIndex === index ? dropdownOptionRef : null;
          return (
            <button ref={buttonRef} key={key} onClick={() => selectOptionWrapper(option)}>
              <SelectBoxOption option={option} highlightText={searchedText} />
            </button>
          );
        })}

        {selectBoxStatus === "show" && dropdownOptions.length === 0 && 
          <span className="no-options-text"> No Options Left </span>
        }
      </div>
    </div>
  );
};

export default SelectBox;

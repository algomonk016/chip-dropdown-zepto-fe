import React, { useState } from 'react';
import SelectedChips from '../SelectedChips';
import SelectBox from '../SelectBox';
import './chipDropdown.css';

/**
 * @component
 * Renders selected chips and selectbox
 */
const ChipDropdown: React.FC<Props> = (props) => {
  const { options } = props;
  const [selectedOptions, setSelectedOptions] = useState<DropdownOptions>([]);

  const selectOption = (option: DropdownOption) => {
    setSelectedOptions(selectedOption => [...selectedOption, option]);
  }

  const removeLastOption = () => {
    if(selectedOptions.length === 0) return;

    const tempOptions = [...selectedOptions];
    tempOptions.pop();
    setSelectedOptions(tempOptions);
  }

  const removeChip = (email: string) => {
    setSelectedOptions(selectedOption => selectedOption.filter((option) => option.email !== email));
  }

  return (
    <div className='chip-dropdown'>
      <SelectedChips 
        removeChip={removeChip}
        chips={selectedOptions} 
      />
      <SelectBox 
        options={options} 
        selectedOptions={selectedOptions} 
        selectOption={selectOption}
        removeLastOption={removeLastOption}
      />
    </div>
  )
}

/**
 * Types
 */
export type DropdownOption = {
  name: string;
  email: string;
}

export type DropdownOptions = Array<DropdownOption>;

type Props = {
  options: DropdownOptions
}

export default ChipDropdown
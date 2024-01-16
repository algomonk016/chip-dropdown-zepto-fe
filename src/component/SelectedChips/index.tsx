import React from 'react'
import Chip from '../Chip'
import { DropdownOptions } from '../ChipDropdown'

/**
 * @component
 * Renders selected chips
 */
const SelectedChips: React.FC<Props> = (props) => {
  const { chips, removeChip } = props;
  return (
    <div> 
      {
        chips.map((chip, index) => {
          const {name, email} = chip;
          const key=`chip-${email}-${index}`;
          return (
            <button key={key} onClick={() => removeChip(email)}>
              <Chip name={name} />
            </button>
          )
        })
      }
    </div>
  )
}

/**
 * Types
 */
type Props = {
  chips: DropdownOptions;
  removeChip: (email: string) => void;
}

export default SelectedChips
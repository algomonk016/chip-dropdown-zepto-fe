import React from 'react';
import { DropdownOption } from '../ChipDropdown';
import { generateIdenticon } from '../../util';

import './selectboxOption.css';

type Props = {
  option: DropdownOption
}

const SelectBoxOption: React.FC<Props> = (props) => {

  const { name, email } = props.option;
  const identicon = generateIdenticon(name);

  return (
    <div>
      <img src={identicon} alt={`${name}-option`} className='select-box-option-image' />
      <span>{name}</span>
      <span>{email}</span>
    </div>
  )
}

export default SelectBoxOption
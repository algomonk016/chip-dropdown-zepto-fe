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
    <div className='select-box-option'>
      <img src={identicon} alt={`${name}-option`} className='select-box-option-image' />
      <span>
        <span className='select-option-name'>{name}</span>
        <span className='select-option-email'>{email}</span>
      </span>
    </div>
  )
}

export default SelectBoxOption
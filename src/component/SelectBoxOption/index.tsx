import React from 'react';
import { DropdownOption } from '../ChipDropdown';
import { generateIdenticon } from '../../util';

import './selectboxOption.css';

type Props = {
  option: DropdownOption,
  highlightText?: string;
}

const SelectBoxOption: React.FC<Props> = (props) => {
  const { option, highlightText } = props;
  const { name, email } = option;
  const identicon = generateIdenticon(name);

  const highlightSubstring = (text: string, substring: string) => {
    if (!substring) {
      return text;
    }

    const regex = new RegExp(`(${substring})`, 'gi');
    return text.replace(regex, (match) => `<span class="highlighted">${match}</span>`);
  };

  const highlightedName = highlightSubstring(name, highlightText ?? "");
  const highlightedEmail = highlightSubstring(email, highlightText ?? "");

  return (
    <div className='select-box-option'>
      <img src={identicon} alt={`${name}-option`} className='select-box-option-image' />
      <span>
        <span dangerouslySetInnerHTML={{ __html: highlightedName }} className='select-option-name'></span>
        <span dangerouslySetInnerHTML={{ __html: highlightedEmail }} className='select-option-email'></span>
      </span>
    </div>
  );
}

export default SelectBoxOption;

import React from 'react'
import close from '../../assets/icons/close.png';
import './chip.css';
import { generateIdenticon } from '../../util';

type Props = {
  name: string
};
const Chip: React.FC<Props> = (props) => {

  const { name } = props;

  const identicon = generateIdenticon(name);

  return (
    <span className='chip'>
      <img src={identicon} alt={name} className='chip-image' />
      <span className='chip-text'> {name} </span>
      <img className='chip-remove-icon' src={close} alt="close icon" />
    </span>
  )
}

export default Chip
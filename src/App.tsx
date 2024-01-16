import React from 'react';
import './App.css';
import ChipDropdown, { DropdownOptions } from './component/ChipDropdown';

const App: React.FC = () => {
  return (
    <div className='container'>
      <section>
        <h3>
          Chip Dropdown
        </h3>
        <ChipDropdown options={dropdownOptions} />
      </section>

      <section>
        <ul>
          Keyboard functions
          <li>
            <span>Cmd/Ctrl + K</span> to focus on input field and show dropdown 
          </li>

          <li>
            <span>Esc</span> to hide dropdown
          </li>

          <li>
            <span>Enter</span> to select first option from dropdown
          </li>

          <li>
            <span>Consecutive Backspaces</span> to delete last selected option
          </li>
        </ul>
      </section>
    </div>
  );
}

const dropdownOptions: DropdownOptions = [
  {"name": "Aarav Kumar", "email": "aarav.kumar@example.com"},
  {"name": "Aditi Sharma", "email": "aditi.sharma@example.com"},
  {"name": "Arjun Patel", "email": "arjun.patel@example.com"},
  {"name": "Avni Gupta", "email": "avni.gupta@example.com"},
  {"name": "Dev Khanna", "email": "dev.khanna@example.com"},
  {"name": "Ishita Verma", "email": "ishita.verma@example.com"},
  {"name": "Kabir Singh", "email": "kabir.singh@example.com"},
  {"name": "Meera Joshi", "email": "meera.joshi@example.com"},
  {"name": "Neha Reddy", "email": "neha.reddy@example.com"},
  {"name": "Pranav Sharma", "email": "pranav.sharma@example.com"},
  {"name": "Riya Kapoor", "email": "riya.kapoor@example.com"},
  {"name": "Rohan Malhotra", "email": "rohan.malhotra@example.com"},
  {"name": "Sanaya Singh", "email": "sanaya.singh@example.com"},
  {"name": "Sarthak Verma", "email": "sarthak.verma@example.com"},
  {"name": "Shreya Sonkar", "email": "shreya.sonkar@example.com"},
  {"name": "Vivaan Kumar", "email": "vivaan.kumar@example.com"},
  {"name": "Zara Khurana", "email": "zara.khurana@example.com"},
  {"name": "Advait Das", "email": "advait.das@example.com"},
  {"name": "Shivesh Tiwari", "email": "shivesh.tiwari@example.com"},
  {"name": "Yuvraj Singh", "email": "yuvraj.singh@example.com"}
]


export default App;

import React from 'react';
import './styles.css';

function DropDownItem(): JSX.Element {
  return (
    <div className='filter dropdown dropdown--hoverable'>
      <button className='filter__button'>DropTest</button>
      <ul className='filter__menu dropdown__menu'>
        <li>
          <a className='dropdown__link' href='#url'>
            Home
          </a>
        </li>
        <li>
          <a className='dropdown__link' href='#url'>
            Profile
          </a>
        </li>
        <li>
          <a className='dropdown__link' href='#url'>
            Settings
          </a>
        </li>
        <li>
          <a className='dropdown__link' href='#url'>
            Help
          </a>
        </li>
        <li>
          <a className='dropdown__link' href='#url'>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropDownItem;

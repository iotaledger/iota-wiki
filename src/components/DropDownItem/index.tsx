import React from 'react';

function DropDownItem(): JSX.Element {
  return (
    <div className='dropdown dropdown--hoverable'>
      <button>DropTest</button>
      <ul className='dropdown__menu'>
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

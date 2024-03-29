import React from 'react';
import './Intro.css'
const Header = () => {
    return (
        <div className='head'>
            <nav>
      <div class="nav__content">
        <div class="logo"><a href="#">Marvel Mart</a></div>
        <label for="check" class="checkbox">
          <i class="ri-menu-line"></i>
        </label>
        <input type="checkbox" name="check" id="check" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>

        </div>
    );
};

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <div className="logout-links">
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }

  return (
    <nav>

      <ul>
        <li>
          <i className="fas fa-chart-line" />
          <NavLink exact to="/" className='header'>Medium - Analytics</NavLink>
        </li>
        <li>
          <i className="fas fa-pen-nib" />
          <NavLink exact to="/writeArticle">Write Article</NavLink>
        </li>
        <li className="searchbar">
          <i className="fas fa-search" />
        </li>
      </ul>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;

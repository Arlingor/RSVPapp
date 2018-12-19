import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

// Stateless component for managing the Header of the App

const Header = props =>
  <header>
    <h1>RSVP</h1>
    <GuestInputForm
      newGuestSubmitHandler={props.newGuestSubmitHandler}
      pendingGuest={props.pendingGuest}
      handleNameInput={props.handleNameInput}
    />
  </header>;

// Using propTypes to reduce the errors while passing all props
Header.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
};

export default Header;

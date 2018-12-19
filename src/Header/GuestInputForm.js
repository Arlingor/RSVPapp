import React from "react";
import PropTypes from "prop-types";

//This stateless component is responsinble for the form, on every onSubmit call newGuestSubmitHandler is changing the state of the app
const GuestInputForm = props =>
  <form onSubmit={props.newGuestSubmitHandler}>
    <input
      type="text"
      onChange={props.handleNameInput}
      value={props.pendingGuest}
      placeholder="Invite Someone"
    />
    <button type="submit" name="submit" value="submit">Submit</button>
  </form>;

// Using propTypes to reduce the errors while passing all props
GuestInputForm.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
};

export default GuestInputForm;

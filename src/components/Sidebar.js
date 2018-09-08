import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

class SideBar extends React.Component {
  static propTypes = {
    users: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired
      })
    ).isRequired
  };

  checkUserAlreadyExist = userName => {
    this.props.users.map( user => { 
      console.log(user.name === userName);
      return user.name === userName }
    )
  };

  render() {
    return (
      <div id="sidebar">
        <ul>
          {this.props.users.map(user => 
              (<li key={user.id}>{user.name}</li>)
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  {}
)(SideBar);

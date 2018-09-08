import React from 'react';
import { shape, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import Types from '../redux/types';
import { addMessages, addUser} from '../actions';

class AddMessages extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <input  id="new-message" placeholder="Please type your message"  onKeyPress = {(e) => { 
            console.log(e.target.value);
            if(e.key === 'Enter'){
            this.props.handleAddMessage(e.target.value,'Sangeetha');
            e.target.value = '';
        } 
    }
}/>
    );
  }
}

//The reducers take care of creating a new state when an action is dispatched. 

const mapDispatchToProps = dispatch => ({
  handleAddMessage: (message,author) => {
    dispatch(addMessages(message,author));
    dispatch(addUser(author));
  },
});

export default connect(()=>({}), mapDispatchToProps)(AddMessages);
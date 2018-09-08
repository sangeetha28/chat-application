import React from "react";
import propTypes , {string} from "prop-types";
import { connect } from "react-redux";

/* How this Messages comes?*/

class MessageList extends React.Component { 
  static propTypes = {
    messages: propTypes.arrayOf(
      propTypes.shape({
        // shape of each object
        id: propTypes.number.isRequired,
        message: propTypes.string.isRequired,
        author: propTypes.string.isRequired
      })
    ).isRequired
  }

  render() 
  {
   return(<section id="messages-list">
    <ul>
    {this.props.messages.map(message => (
       <li key={message.id}>
       <p>
       <i>{message.author}</i>: {message.message}</p>
     
  </li>   
    ))}
    </ul>
   </section> );
  }

};

const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(mapStateToProps,{})(MessageList);
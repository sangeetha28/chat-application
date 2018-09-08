const messages = (state = [], action) => {
    console.log('INside Reducer!')
    switch(action.type){
     case 'ADD_MESSAGE':
     case 'MESSAGE_RECEIVED':
          console.log('inside switch!') 
          console.log('ACTION',action.message,action.author,action.id)
          return state.concat(
              [
                  {
                     message: action.message,
                     author: action.author,
                     id: action.id
                  }
              ]
          )
      default: 
      return state 
    }
}

export default messages

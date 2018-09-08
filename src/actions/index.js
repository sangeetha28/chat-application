import * as types from '../constants/ActionTypes'
let nextMessageId = 0
const nextUserId = 0

// these functions are called action genrators, which returns an action Object
export const addMessages = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
})

export const addUser = name => (
    {
        type: types.ADD_USER,
        id: nextUserId,
        name
    }
)

export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    author
  })

  export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
  })
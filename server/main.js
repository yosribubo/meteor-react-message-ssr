import { Meteor } from 'meteor/meteor'

// // Auth imports
// import { addUser } from './auth/addUser'

// // MessageCollection import
// import { messageCollection } from '/imports/api/messageCollection'

// Meteor.startup(() => {
//   addUser()
// })

Meteor.methods({
  'getData'() {
    return [
      {_id: 1},
      {_id: 2},
      {_id: 3}
    ]
  }
})
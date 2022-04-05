import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
  'createNewUser': (param) => {
    console.log(param);
    
    const SEED_USERNAME = `${param.userName}`
    const SEED_EMAIL = `${param.userEmail}`
    const SEED_PASSWORD = `${param.userPwd}`
    if (Meteor.isServer) {
      if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
          username: SEED_USERNAME,
          email: SEED_EMAIL,
          password: SEED_PASSWORD,
        })

        console.log("New user created")

        let res = 'New user created' 
        return res
      }
      console.log('User already logged in')

      let res = 'User already logged in'
      return res
    }
  },
});
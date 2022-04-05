import React, { useState } from 'react'
import { Meteor } from 'meteor/meteor'
// import { Accounts } from 'meteor/accounts-base'


const SignUpPage = () => {

  // Form fields states
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPwd, setUserPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')

  // New user creation
  const handleSignUp = e => {
      console.log('handle sing up..');
      e.preventDefault()

      console.log(userName,userEmail,userPwd);

      if (userName === '' || userEmail === '' || userPwd === '' || confirmPwd === '') return console.log('Please type all required data')

      if (userPwd !== confirmPwd) return console.log("The passwords don't match")

      Meteor.call('createNewUser', {userName:userName, userEmail:userEmail, userPwd:userPwd}, (err, res) => {
        if (err) {
          console.log('Sign up error:', err)

          if (err.reason = 'Email already exists.') {
            console.log('Email already exists')
            return false
          }

          if (err.reason = 'User already logged') {
            console.log('User already registered')
            return false
          }

        }

        if (res === 'User already logged') {
          console.log('User already registered')
          return false
        }

        if (res === 'New user created') console.log('New user successfully created')

        return window.location.href = '/'
      })
  }

  const onclick = () => {
    alert('clicked me');
  }

  return (
      <div className="login-form mx-auto mt-5">
        <div className="container">
            <h2 className='login-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-group'>
                    <label htmlFor="username">User Name:</label>
                    <input type="text" className='form-control' 
                        id="userName" 
                        name="userName"
                        placeholder='Enter User Name'
                        value={ userName }
                        required
                        onChange={ e => setUserName(e.target.value) }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="useremail">Email:</label>
                    <input type="email" className='form-control' 
                        id="userEmail" 
                        name="userEmail"
                        placeholder='Enter User Email'
                        value={ userEmail }
                        required
                        onChange={ e => setUserEmail(e.target.value) }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="userpwd">Password:</label>
                    <input type="password" className='form-control' 
                        id="userPwd"
                        name="userPwd" 
                        placeholder="Enter User Password"
                        value={ userPwd }
                        required
                        onChange={ e => setUserPwd(e.target.value) }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="confirmpwd">Confirm Password:</label>
                    <input type="password" className='form-control' 
                        id="confirmPwd"
                        name="confirmPwd" 
                        placeholder="Enter Confirm Password"
                        value={ confirmPwd }
                        required
                        onChange={ e => setConfirmPwd(e.target.value) }
                    />
                </div>
                <button type="submit" className='btn btn-primary mx-auto'>Sign Up</button>
                <div className='form-group'>
                    <a href="/">I have already sing up</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUpPage
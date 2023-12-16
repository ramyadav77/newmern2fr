import React, { useState } from 'react'

const Register = () => {
   const[user,setUser]=useState(
    {
      username:"",
      email:"",
      phone:"",
      password:"",
    }
   )
   //handle input
   const handleInput=(e)=>{
    console.log(e);
    let name=e.target.name;
    let value=e.target.value;
     
    setUser({
      ...user,
      [name]:value,
     })
   }
   //handle form
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(user)
   }

   

  return (
    <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src="https://img.freepik.com/free-vector/multitasking-concept-illustration_52683-31717.jpg?size=626&ext=jpg" alt="image"
              width="500"
              height="500" />
            </div>
            <div className="registration-form">
              <h1 className='main-heading mb-3'>registration form</h1>
              <br />
              <form  onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input type="text"
                  name='username'
                  placeholder='enter your name '
                  id='username'
                  required
                  autoComplete='off' 
                  value={user.username}
                  onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input type="email"
                  name='email'
                  placeholder='enter your eamil '
                  id='email'
                  required
                  autoComplete='off'
                  value={user.email}
                  onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input type="number"
                  name='phone'
                  placeholder='enter your phone '
                  id='phone'
                  required
                  autoComplete='off'
                  value={user.phone}
                  onChange={handleInput} />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input type="password"
                  name='password'
                  placeholder='enter your password '
                  id='password'
                  required
                  autoComplete='off' 
                  value={user.password}
                  onChange={handleInput}/>
                </div>
                <button type='submit'>register now</button>
              </form>
              
              
            </div>
          </div>
        </div>
      </main>
    </section>
    
    </>
  )
}

export default Register
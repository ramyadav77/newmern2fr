import React, { useState } from 'react'

const login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //handle input
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  //handle form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="https://img.freepik.com/premium-vector/isometric-flat-3d-illustration-concept-man-typing-program-language-web-application_18660-4882.jpg?size=626&ext=jpg&uid=R92204988&ga=GA1.1.1886296496.1702694240&semt=ais"
                  alt="image"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your eamil "
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password "
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <button type="submit">register now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default login
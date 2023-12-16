import React from 'react'

const Home = () => {
  return (
    <>
     <main>
      <section className='section-hero'>
      <div className='container grid grid-two-cols'>
        <div className="hero-content">
          <p>
           I am ram yadav
          </p>
          <h1>full stack web developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quasi dicta est in, neque temporibus saepe voluptatem eligendi perspiciatis exercitationem, facilis incidunt sequi beatae fugit. Nihil molestias architecto voluptatibus veritatis.
          </p>
          <div className="btn btn-group">
            <a href="/contact">
              <button className='btn secondary-btn'>
                connect now
              </button>
            </a>
            <a href="/service">
              <button className='btn secondary-btn'>
                learn more
              </button>
            </a>
          </div>
        </div>
        {/* hero images */}
        <div className="hero-image">
          <img src="https://img.freepik.com/free-photo/young-hacker-stealing-data-from-computer-night-dark-background_1142-40616.jpg?t=st=1702723811~exp=1702727411~hmac=21630bb449bac89bdf4ec9a97d976b462a2f1226c8783a01d583cdeff6464933&w=360" alt="home"
          width="500"
          height="500"/>
        </div>
      </div>
      </section>
     </main>


    </>
  )
}

export default Home
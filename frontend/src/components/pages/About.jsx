import React from 'react';

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>Some information about this web-app.</p>
      <section>
        <h2>React</h2>
        <div className='picture-text'>
          <img src='logo.svg' alt='React Logo' width='100px' />
          <div>
            <p>
              The frontend for this web application was built from scratch using
              React.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>React Router</h2>
        <div className='picture-text'>
          <img src='react-router.svg' alt='React Logo' width='50px' />
          <div>
            Client side routing was achieved using the React Router package.
          </div>
        </div>
      </section>
      <section>
        <h2>Webpack</h2>
        <div className='picture-text'>
          <img src='webpack.svg' alt='React Logo' width='50px' />
          <div>React code for this project was bundled using Webpack.</div>
        </div>
      </section>
      <section>
        <h2>Babel</h2>
        <div className='picture-text'>
          <img src='babel.svg' alt='React Logo' width='100px' />
          <div>
            Javascript compiling was performed on code for this project using
            Babel.
          </div>
        </div>
      </section>
      <section>
        <h2>Express</h2>
        <div className='picture-text'>
          <img src='express.png' alt='React Logo' width='100px' />
          <div>
            This project is served using Express.js as the backend framework.
          </div>
        </div>
      </section>
      <section>
        <h2>Nodemon</h2>
        <div className='picture-text'>
          <img src='nodemon.png' alt='Nodemon Logo' width='50px' />
          <div>
            This project is served using Express.js as the backend framework.
          </div>
        </div>
      </section>
    </main>
  );
}

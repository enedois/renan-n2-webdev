import React from 'react'
import logohome from '../assets/images/header/hero-image.jpg'

const Home = () => {
  return (
    <section id="hero-area" class="header-area header-eight">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12 col-12">
          <div class="header-content">
            <h1>Welcome to<br/> Double N</h1>
            <p>
              A web development company located in Gold Coast, Australia, specializing in website development using cutting-edge technologies such as React, Django, and Python.

            </p>          
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <div class="header-image">
            <img src={logohome} alt=" Logo of Double n web development" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Home
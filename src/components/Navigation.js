import React from 'react'
import logo from '../assets/images/n2logo3.png'

const Navigation = () => {
  return (
    <section class="navbar-area navbar-nine">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            
            <a class="navbar-brand" href="#">
              <img src={logo} alt="Logo" height="50" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
              aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse sub-menu-bar" id="navbarNine">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="page-scroll" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="/about">About Us</a>
                </li>

                <li class="nav-item">
                  <a class="page-scroll" href="/portfolio">Portfolio</a>
                </li>

                <li class="nav-item">
                  <a class="page-scroll" href="/services">Services</a>
                </li>

                <li class="nav-item">
                  <a class="page-scroll" href="/testimonials">Testimonials</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="/contact">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="/blog">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="/social">Social</a>
                </li>
              </ul>
            </div>

             {/* <div class="navbar-btn d-none d-lg-inline-block">
              <a class="menu-bar" href="#side-menu-left"><i class="lni lni-menu"></i></a>
            </div>  */}
          </nav>
      
        </div>
      </div>
    
    </div>
   
  </section>
  )
}

export default Navigation
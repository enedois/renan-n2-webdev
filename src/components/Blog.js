import React from 'react'
import blog1 from '../assets/images/blog/1.jpg'
import blog2 from '../assets/images/blog/2.jpg'
import blog3 from '../assets/images/blog/3.jpg'
import authorimg from '../assets/images/blog/b6.jpg'

const Blog = () => {
  return (
    // <!-- Start Latest News Area -->
    <div id="blog" class="latest-news-area section">
      {/* <!--======  Start Section Title Five ======--> */}
      <div class="section-title-five">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="content">
                {/* <!-- <h6>latest news</h6> --> */}
                <h2 class="fw-bold">Latest News & Blog</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      {/* <!--======  End Section Title Five ======--> */}
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            {/* <!-- Single News --> */}
            <div class="single-news">
              <div class="image">
                <a href="javascript:void(0)"><img class="thumb" src={blog1} alt="Blog" /></a>
                <div class="meta-details">
                  <img class="thumb" src={authorimg} alt="Author" />
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div class="content-body">
                <h4 class="title">
                  <a href="javascript:void(0)"> Make your team a Design driven company </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>
            {/* <!-- End Single News --> */}
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            {/* <!-- Single News --> */}
            <div class="single-news">
              <div class="image">
                <a href="javascript:void(0)"><img class="thumb" src={blog2} alt="Blog" /></a>
                <div class="meta-details">
                  <img class="thumb" src={authorimg}  alt="Author" />
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div class="content-body">
                <h4 class="title">
                  <a href="javascript:void(0)">
                    The newest web framework that changed the world
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>
            {/* <!-- End Single News --> */}
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            {/* <!-- Single News --> */}
            <div class="single-news">
              <div class="image">
                <a href="javascript:void(0)"><img class="thumb" src={blog3} alt="Blog" /></a>
                <div class="meta-details">
                  <img class="thumb" src={authorimg}  alt="Author" />
                  <span>BY TIM NORTON</span>
                </div>
              </div>
              <div class="content-body">
                <h4 class="title">
                  <a href="javascript:void(0)">
                    5 ways to improve user retention for your startup
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>
            {/* <!-- End Single News --> */}
          </div>
        </div>
      </div>
    </div>
    // <!-- End Latest News Area -->
  )
}

export default Blog
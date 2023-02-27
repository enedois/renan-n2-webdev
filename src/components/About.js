import React from 'react'
import aboutimage from '../assets/images/about/about-img1.jpg'

const About = () => {
    return (
        <section class="about-area about-five" id="about">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-12">
                        <div class="about-image-five">
                            <img src={aboutimage} alt="about" />
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="about-five-content">
                            <h6 class="small-title text-lg">About us</h6>
                            <h2 class="main-title fw-bold">Our team comes with the experience and knowledge</h2>
                            <div class="about-five-tab">
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button class="nav-link active" id="nav-who-tab" data-bs-toggle="tab" data-bs-target="#nav-who"
                                            type="button" role="tab" aria-controls="nav-who" aria-selected="true">Who We Are</button>
                                        <button class="nav-link" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision"
                                            type="button" role="tab" aria-controls="nav-vision" aria-selected="false">our Vision</button>
                                        <button class="nav-link" id="nav-history-tab" data-bs-toggle="tab" data-bs-target="#nav-history"
                                            type="button" role="tab" aria-controls="nav-history" aria-selected="false">our History</button>
                                    </div>
                                </nav>
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-who" role="tabpanel" aria-labelledby="nav-who-tab">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                            when
                                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters, look like readable English.</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                            form,
                                            by injected humour.</p>
                                    </div>
                                    <div class="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                            when
                                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters, look like readable English.</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                            form,
                                            by injected humour.</p>
                                    </div>
                                    <div class="tab-pane fade" id="nav-history" role="tabpanel" aria-labelledby="nav-history-tab">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page
                                            when
                                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters, look like readable English.</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have in some
                                            form,
                                            by injected humour.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default About
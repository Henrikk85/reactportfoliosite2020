import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I’m an aspiring web developer who also has an interest in digital arts in general. I love to experiment with different mediums and explore what is possible to achieve as a creative just by using computers and technology.</p>
                    <p>Whether its front-end web development, electronic music or photography the quality and results all depend on your technical know-how and the possibilities for development are endless and so have I embraced continuous learning as a lifestyle.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-lg-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <p>I have experience building websites and simple web applications using JavaScript (React),HTML,CSS,PhP,C# & .Net</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-wordpress" />
                </span>
                <div className="desc">
                    <h3>Wordpress Development, Optimization & Maintenance</h3>
                    <p>I started my freelance & micropreneuer career building sites and also online stores with WordPress by implementing commercial themes.</p>
                </div>
                </div>
            </div>
            <div className="col-lg-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-camera" />
                </span>
                <div className="desc">
                    <h3>Photography</h3>
                    <p>In 2015 I bought my first decent camera and also got into retouching</p>
                </div>
                </div>
            </div>
            <div className="row row-pt-md">            
                   <div className="col-lg-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-image" />
                </span>
                <div className="desc">
                    <h3>Photoshop</h3>
                    <p>Mostly I do editing regarding my personal projects, but the skills I have aquired have also been beneficial regarding web-design.</p>
                </div>
                </div>
                   </div>
                   <div className="col-lg-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-music2" />
                </span>
                <div className="desc">
                    <h3>Electronic Music</h3>
                    <p>I am a Cubase & Ableton user.</p>
                </div>
                </div>
                   </div>
                   <div className="col-lg-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-eye" />
                </span>
                <div className="desc">
                    <h3>Digital Strategy</h3>
                    <p>Whether it is social media or personal development, it’s always wise to have a strategy.</p>
                </div>
                </div>
                </div>
            </div>
            
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
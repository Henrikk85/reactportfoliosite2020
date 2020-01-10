import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Vali-IT <span>2018 (www.vali-it.ee)</span></h2>
                        <p>Vali-IT is an adult retraining program that prepares junior software developers to enter the IT industry. I was selected to be in the program by various tests and an interview and the main focus during the courses was learning the basics of C# and utilizing it on the .Net platform.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web-Design & Digital Graphics at EEK <span>2014-2017 (www.euas.eu)</span></h2>
                        <p>I started pursuing my studies regarding web-design & digital graphics as I knew that these skills were quite expensive to hire and well sought after regarding digital marketing. My goal was also to find and create contacts with people who were more tech-savvy than myself and maybe form a team. Little did I know that the courses regarding web-development sparkled an interest in me and that I found myself also a new hobby that I could pursue also professionally.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>International Business Administration at EBS <span>2007-2012 (www.ebs.ee)</span></h2>
                        <p>After I obtained my bachelor's degree in business (specialising in marketing) I had the sense that I need to improve my IT skills in order to realize my economics ideas that at the time were all related to E-Commerce.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
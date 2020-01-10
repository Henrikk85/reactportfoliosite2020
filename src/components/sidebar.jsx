import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/hk.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Henrik Krieger</a></h1>

              {/*<span className="email"><i className="icon-mail"></i> henrikrkriiger@gmail.com</span>*/}

              <h2>An Aspiring Web-Developer & Digital Creative</h2>
           
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
               <li><a href="https://www.facebook.com/henrik.krieger.5" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
               <li><a href="https://twitter.com/Henrikk31" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
               <li><a href="https://www.instagram.com/kriegerhenrik/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
               <li><a href="https://www.linkedin.com/in/henrik-kriiger/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
               <li><a href="https://github.com/Henrikk85" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
               <li><a href="https://soundcloud.com/loveformovement" target="_blank" rel="noopener noreferrer"><i className="icon-soundcloud2"></i></a></li>
               <li><a href="https://vimeo.com/loveformovement" target="_blank" rel="noopener noreferrer"><i className="icon-vimeo"></i></a></li>
               <li><a href="https://500px.com/henrikkrieger" target="_blank" rel="noopener noreferrer"><i className="icon-500px"></i></a></li>        
              </ul>
            </nav>
            {/*<div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
              <p><small>
                Something coming soon !!
              </small></p>
            </div>*/}
          </aside>
        </div>
      </div>
    )
  }
}
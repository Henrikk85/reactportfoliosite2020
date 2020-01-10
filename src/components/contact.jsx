import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
          <section className="colorlib-contact contact" data-section="contact">
          <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInRight">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Get in touch</span>
                    <h2 className="colorlib-heading">Contact Me</h2>
                            </div>
                           <form action="/contact/contact.php" method="POST" id="contact-form">
                           <div className="messages" />
                           <div className="controls">
                              <div className="form-group">
                                 <input type="text" id="form_name" className="form-control" name="name" required="required" placeholder="Enter your name." />
                              </div>
                              <div className="form-group">
                                 <input type="email" id="form_email" className="form-control" name="email" required="required" placeholder="Enter your email." />
                              </div>
                              <div className="form-group">
                                 <textarea name="message" id="form_message" rows={4} className="form-control" required="required" placeholder="Add your message." defaultValue={""} />
                              </div>                  
                                <input type="submit" className="btn btn-outline-light btn-sm" defaultValue="Send Message" value="Send Message" />
                           </div> {/* End Controls */}
                           </form> {/* End Form */}
                </div>
                </div>
                
            </div>
            </div>
        </div>
          
        </section>
      </div>
    )
  }
}
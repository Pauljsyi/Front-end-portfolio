import React from 'react'

const Contact = () => {

  return (
    <div className="contact" id="contactAnchor">
      <div className="container">
        <header>
          <h2 className="lets-talk">Contact</h2>
        </header>
          <form className="form">
            <input id="name" type="text" placeholder="Name" name="name" />
            <input id="email" type="text" placeholder="Email" name="email" />
            <div className="messageField">
              <textarea id="message" type="text" placeholder="Message" name="message" />
            </div>
            <input id="formSubmit" type="submit"/>
          </form>
      </div>
    </div>

  )
}

export default Contact

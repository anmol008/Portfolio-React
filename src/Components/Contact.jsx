import React from 'react'
import './Contact.css'
export const Contact = () => {
  return (
    <div className='ContactDiv'>
      <div className="contact">
        CONTACT NUMBER : 7999726830
      </div>
      <div className="contact">
        ADDRESS : D-11, Elixir garden, gandhi nagar road, bhopal [462101]
      </div>
      <div className="contact">
      EMAIL : <a href={'/contact'} onClick={()=>window.open( 'https://mail.google.com/mail/?view=cm&fs=1&to=anmol.bhargava97@gmail.com')}> anmol.bhargava97@gmail.com</a>
      </div>
      <div className="contact">
      LINKEDIN : <a href={'/contact'} onClick={()=>window.open( 'https://www.linkedin.com/in/anmolbhargava008/')}> https://www.linkedin.com/in/anmolbhargava008/</a>
      </div>
      <div className="contact"></div>
    </div>
  )
}

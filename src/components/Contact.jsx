import React from 'react'
import './css/Contact.css'
import './css/container.css'

const Contact = () => {
    return (
        <div className="contact" id='contact'>
            <div className="leftCard">
                <h2>Address</h2>
                <p>Rajdepur<br/> Ghazipur(233001)<br/> Uttar Pradesh<br/> India</p>

                <br/>

                <h2>Phone</h2>
                <p>+91 6307054684</p>

                <br/>

                <h2>Email</h2>
                <p>pawankumar.gzp2002@gmail.com</p>
            </div>
            <div className="rightCard">
                <h1>Write Me</h1>
                <form action="mailto:pawankumar.gzp2002@gmail.com" method="POST">
                    <input type="text" name="name" placeholder='Your Name' required/>
                    <input type="email" name="email" placeholder='Your Email'required/>
                    <textarea name="message" placeholder="Write your Message" cols="30" rows="6" style={{resize:'none'}} required/>
                    <button type='submit' className='cbtn'>Submit</button>
                </form>
            </div> 
        </div>
    )
}

export default Contact

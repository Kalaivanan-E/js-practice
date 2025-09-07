import React from 'react'
import '../App.css'

 const Contact = () => {
  return (
    <div className='contactbg'>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className='contactus'>
              <h2 style={{ fontSize: '35px',marginTop: '20px' }}>Contact Us</h2>
              <p className='contactpara'> We greatly value engaging with our community, and we encourage you to get in touch with us for any inquiries, comments, or feedback you might have. Your input is important to us, and we look forward to hearing from you!</p>
              {/* <p className='contactpara'> We greatly value engaging with our community, and we encourage you to get in touch with us for any inquiries, comments, or feedback you might have. Your input is important to us, and we look forward to hearing from you!</p> */}
            </div>
          </div>
        </div>
      </div>



      <div className="container" style={{ marginLeft: '200px'}}>
        <div className="row">
          <div className="col-12">
            <form>
              <div className='form-group'>
                <label>Full Name*</label> <br />
                <input type="text" className='form-control' />
              </div>
              <div className='form-group'>
                <label>Email address*</label> <br />
                <input type="email" className='form-control' />
              </div>
              <div className='form-group'>
                <label>Subject*</label> <br />
                <input type="text" className='form-control' />
              </div>
              <div className='form-group'>
                <label>Message</label> <br />
                <textarea className='form-control' rows={5}></textarea>
              </div> 
              <input type="submit" className='btn btn-dark' />
            </form>        
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Contact;

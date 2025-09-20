
import React, { useRef, useState } from 'react'

const Login = () => {
    let [terms, setTerms] = useState({ status: false })
    let btnRef = useRef()
    let tcHandler = (event)=>{
        console.log(event.target.checked)
        setTerms(event.target.checked)
        btnRef.current.disabled = ! event.target.checked;
    }


  return (
    <div className='container'>
        <pre>{JSON.stringify(terms)}</pre>
        <div className="row">
            <div className="col-6">
                <form className='border mt-5' style={{padding:'20px',borderRadius:'5px'}}>
                    <div className="form-group">
                        <label > Email:</label>
                        <input type="email" className='form-control' />
                    </div>
                    <div className="form-group">
                        <label > PassWord:</label>
                        <input type="password" className='form-control'/>
                    </div>
                    <div className="form-group">
                        <input onInput={tcHandler} type="checkbox"/>
                    </div>
                    <input ref={btnRef} type="submit" value='Login' disabled className='btn btn-warning'  />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
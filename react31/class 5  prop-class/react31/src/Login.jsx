import React, { useRef } from 'react'

const Login = () => {
    let btnRef = useRef()
    let acceptTc = (event)=>{
        let flag = event.target.checked;
        console.log(flag)
        btnRef.current.disabled = ! flag
    }


  return (
    <div>
        <form>
            Email: <input type="email" /> <br />
            Password: <input type="password" /><br />
            <input type="checkbox" onInput={acceptTc} /> Please accept T&C <br />
            <input type="submit" value='login' disabled  ref={btnRef} />
        </form>
    </div>
  )
}

export default Login;       
import React from 'react'
import '../App.css'

 const Home = () => {
  return (
    <div>
    <section className='homebg'>
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h4 className='Home'>Hello, my name is |</h4>
                    <h2 className='name'> Kalaivanan E</h2>
                    <h2 className='name'>I design and build</h2>
                    <h2 className='name'>Meaningful experiences.</h2>
                </div>
                <div className="col-4">
                    <img className='img' src="https://wallpapercave.com/wp/wp1877444.jpg" alt="techimg" />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <p className='para'>I am a digital polymath - a constantly evolving digital creator dirven by a passion for lifelong learning and the desire to leave a lasting impact</p>
                </div>
            </div>
            <div>
                <button className='button1'>Contact Me</button>
                <button className='button2'>LinkedIn </button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home;

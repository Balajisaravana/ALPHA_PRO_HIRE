import React from "react"
// import APH_ICON from '../../../assets/APH_ICON.svg'
import Alaph_icon from '../../../assets/Alpha_icon.png'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ALPHA PRO HIRE            
              {/* <img width={500} height={250} src={Alaph_icon} alt="" /> */}
            </h1>
            <span>Your Success Starts with the Right People.</span>

          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head

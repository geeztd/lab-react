import React from 'react'
import PropTypes from "prop-types";


const SingUpEmail = ({setMailValid}) => {
    const emailIsValue = (e) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if(emailRegex.test(e.target.value)) setMailValid(true)
        else setMailValid(false)
    }
  return (
    <input type='email' placeholder='mail' onChange={emailIsValue}></input>
  )
}

SingUpEmail.propTypes = {
  setMailValid: PropTypes.func.isRequired
}

export default SingUpEmail

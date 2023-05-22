import React,{useState} from 'react'
import PropTypes from "prop-types";
import ProgressBar from './Bar'


const Password = ({setPasswordValid}) => {
    const [password, setPassword] = useState(``)
    const [progres, setProgres] = useState(0)
    const IsEqulePass = (e)=>{
        
        if(e.target.value === password) setPasswordValid(true)
        else setPasswordValid(false)
    }
    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.match(/[a-z]/)) {
          strength++;
        }
        if (password.match(/[A-Z]/)) {
          strength++;
        }
        if (password.match(/[0-9]/)) {
          strength++;
        }
        if (password.match(/[^a-zA-Z0-9]/)) {
          strength++;
        }
        return strength
      };
  return (
    <>
        <input type="password" id='pass' placeholder='Введите пароль' onChange={(e)=>{
            setPassword(e.target.value)
            setProgres(calculatePasswordStrength(e.target.value))}}/>

        <input type="password" id='conf' placeholder='Повторите пароль' onChange={IsEqulePass}/>
        <ProgressBar value={progres}/>

    </>
  )
}

Password.propTypes = {
  setPasswordValid: PropTypes.func.isRequired
}

export default Password
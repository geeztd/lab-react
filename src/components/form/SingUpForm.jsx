import React,{useState} from 'react'
import PhoneImput from "../phoneInput/PhoneInput"
import SingUpEmail from './SingUpEmail'
import Password from './Password'

import styles from "./Form.module.scss"

const SingUpForm = () => {
    const [isMailValid, setMailValid] = useState(false) 
    const [isPasswordValid, setPasswordValid] = useState(false)
    
  return (
    <div>
    <form>
        <div className={styles.part}>
            <input type="text" placeholder='Имя'/>
            <input type="text" placeholder='Фамилия'/>
            <input type="text" placeholder='Отчество'/>
        </div>
        <div className={`${styles.part} ${!isMailValid?styles.error:styles.v}`}>
          <SingUpEmail setMailValid={setMailValid}/>
        </div>
        <div className={`${styles.part} ${!isPasswordValid?styles.error:styles.v}`}>
      <Password setPasswordValid={setPasswordValid}/>
        </div>
        <div className={styles.gender}>
          <div>
            <label>
              М
              <input type="radio" name="gender" id="men" />
            </label>
          </div>
          <div>
            <label htmlFor="women">
              Ж
              <input type="radio" name="gender" id="women" />
            </label>
          </div>
        </div>
        <div className={styles.phone}>
        <PhoneImput />
        </div>
        <div className={styles.but}>
        <button type='reset' disabled={!isMailValid || !isPasswordValid}>Sing Up</button>
        </div>
    </form>
    </div>
  )
}

export default SingUpForm
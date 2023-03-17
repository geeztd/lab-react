import React from 'react'
import { phoneRadioData } from './phoneRadioData'

const Radio = (props) => {
  return (
    <div>
      {phoneRadioData[props.iter].map((item,i)=>
      <label key={i}> {item}
      <input type='radio' name='rad'></input>
      </label>
      )}
    </div>
  )
}

export default Radio
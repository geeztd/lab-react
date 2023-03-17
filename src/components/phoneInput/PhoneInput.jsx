import React,{useState} from 'react'
import { phoneData } from './phoneData'
import Radio from './phoneRadio/Radio';
import styles from './phoneInput.module.scss'

const PhoneInput = () => {
  const [index,setIndex] = useState(0);
  let select = document.getElementById(`sel`)
  let formattedInputValue = ``
   const setFirstVal=(value)=>{
    let input = document.getElementById(`input`)
      switch(value){
        case `0`: formattedInputValue=`+375`; break
        case `1`: formattedInputValue=`+7`; break
        case `2`: formattedInputValue=`+48`; break
        case `3`: formattedInputValue=`+379`; break
        case `4`: formattedInputValue=`+370`; break
        case `5`: formattedInputValue=`+371`; break
        default: break
      }
      input.value = formattedInputValue
    }

  const phoneInput = (e) => {
    let input = e.target,
    inputNumbersValue = input.value.replace(/\D/g,``) 
       
    if(inputNumbersValue.length===0){
      formattedInputValue=``
      return
    }

    if(`7`===inputNumbersValue[0]) {
    formattedInputValue = `+7`
    if(inputNumbersValue.length > 1) formattedInputValue += ` (`+inputNumbersValue.substring(1,4)
    if(inputNumbersValue.length>=5) formattedInputValue += `) ` + inputNumbersValue.substring(4,7)
    if(inputNumbersValue.length>=8) formattedInputValue += `-` + inputNumbersValue.substring(7,9)
    if(inputNumbersValue.length>=10) formattedInputValue += `-` + inputNumbersValue.substring(9,11)
    setIndex(1); select.value =1
  } else if(`3`===inputNumbersValue[0] && `7`===inputNumbersValue[1] && `5`===inputNumbersValue[2]){
    formattedInputValue = `+375`
    if(inputNumbersValue.length > 3) formattedInputValue += ` (`+inputNumbersValue.substring(3,5)
    if(inputNumbersValue.length>=6) formattedInputValue += `) ` + inputNumbersValue.substring(5,8)
    if(inputNumbersValue.length>=9) formattedInputValue += `-` + inputNumbersValue.substring(8,10)
    if(inputNumbersValue.length>=11) formattedInputValue += `-` + inputNumbersValue.substring(10,12)
    setIndex(0); select.value =0
  } else if(`3`===inputNumbersValue[0] && `8`===inputNumbersValue[1] && `0`===inputNumbersValue[2]){
    formattedInputValue = `+380`
    if(inputNumbersValue.length > 3) formattedInputValue += ` (`+inputNumbersValue.substring(3,5)
    if(inputNumbersValue.length>=6) formattedInputValue += `) ` + inputNumbersValue.substring(5,8)
    if(inputNumbersValue.length>=9) formattedInputValue += `-` + inputNumbersValue.substring(8,10)
    if(inputNumbersValue.length>=11) formattedInputValue += `-` + inputNumbersValue.substring(10,12)
    setIndex(2); select.value = 2
  } else if(`4`===inputNumbersValue[0] && `8`===inputNumbersValue[1]){
    formattedInputValue = `+48`
    if(inputNumbersValue.length > 2) formattedInputValue += ` ` + inputNumbersValue.substring(2,5)
    if(inputNumbersValue.length>=6) formattedInputValue += `-` + inputNumbersValue.substring(5,8)
    if(inputNumbersValue.length>=9) formattedInputValue += `-` + inputNumbersValue.substring(8,11)
    setIndex(3); select.value = 3
  } else if(`3`===inputNumbersValue[0] && `7`===inputNumbersValue[1] && `0`===inputNumbersValue[2]){
    formattedInputValue = `+370`
    if(inputNumbersValue.length > 3) formattedInputValue += ` (`+inputNumbersValue.substring(3,5)
    if(inputNumbersValue.length>=6) formattedInputValue += `) ` + inputNumbersValue.substring(5,8)
    if(inputNumbersValue.length>=9) formattedInputValue += `-` + inputNumbersValue.substring(8,10)
    if(inputNumbersValue.length>=11) formattedInputValue += `-` + inputNumbersValue.substring(10,12)
    setIndex(4); select.value = 4
  } else if(`3`===inputNumbersValue[0] && `7`===inputNumbersValue[1] && `1`===inputNumbersValue[2]){
    formattedInputValue = `+371`
    if(inputNumbersValue.length > 3) formattedInputValue += ` `+inputNumbersValue.substring(3,7)
    if(inputNumbersValue.length>=8) formattedInputValue += `-` + inputNumbersValue.substring(7,11)
    setIndex(5); select.value = 5
  } else {
    formattedInputValue = `+` + inputNumbersValue.substring(0,16)
  }
    input.value = formattedInputValue
    
  }
  

  return (
    <div className={styles.phone_input}>
      <div>
      <img className={styles.img1} src={phoneData[index].link} alt='cantry' />
      <input className={styles.input} type='tel' id='input' translate='tel' placeholder='Телефон' onChange={phoneInput}/>
      </div>
      <select name='phoneselect' id='sel' onChange={(e)=>{setIndex(e.target.value); setFirstVal(e.target.value,e)}}>
        {phoneData.map((item)=><option value={item.id} key={item.id}>
        {item.name}
        </option>)}        
      </select>
      <Radio iter={index}/>
    </div>
  )
}

export default PhoneInput
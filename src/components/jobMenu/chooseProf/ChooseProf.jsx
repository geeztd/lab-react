import {useState} from 'react'
import Menu from '../menu/Menu'
import styles from './choose.module.scss'

const JobMenu = () => {

  let [value,setvalue]=useState(0)

  const change = (e)=>{
    setvalue(value=e.target.value)
  }

  return (
    <div className={styles.form}>
    <form >
        <select className={styles.select} name="chooseprof" id='choose' onChange={change}>
            <option value='0'>Химик</option>
            <option value='1'>Програмист</option>
            <option value='2'>Экономист</option>
            <option value='3'>Биолог</option>
            <option value='4'>Дизайнер</option>
        </select>
    </form>
    <Menu className={styles.menu} value={value}/>
    </div>
  )
}

export default JobMenu


import React,{useState} from 'react'
import StudentInfoHandler from './StudentInfoHandler'

import styles from "./studentInfo.module.scss"

const StudentInfo = () => {
    const [array, setArray] = useState([])
  return (
    <div className={styles.student_info}>
        <form name='stud' className={styles.form}>
            <input type="text" placeholder='ФИО' />
            <label > Дата рождения
            <input type="date"/>
            </label>
            <input type="text" placeholder='Год поступления'/>
            <input type="text" placeholder='Факультет'/>
            <input type="text" placeholder='группа'/>
            <input type="text" placeholder='специальность'/>
            <input type="email" placeholder='почта'/>
            <input type="tel" placeholder='телефон'/>
            <button onClick={(e)=>{
                e.preventDefault();
                setArray([Array.from(document.forms.stud.elements).map(item=>item.value)]);
                }}>Отправить</button>
        </form>
        <StudentInfoHandler info={array}/>
    </div>
  )
}

export default StudentInfo
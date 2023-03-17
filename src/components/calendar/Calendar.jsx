import React from 'react'
import { createMounth } from './logic'
import styles from './calendar.module.scss'

const Calendar = () => {
  const days = createMounth()
  return (
    <form className={styles.calendar}>
        {days.map((item,i)=>(<div key={i}>
          {item[2]}
        </div>))}
    </form>
  )
}

export default Calendar
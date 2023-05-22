import React,{useState} from 'react'
import { getCalendarDays,daysNames } from './logic'
import styles from './calendar.module.scss'

const Calendar = ({selectedDates,setSelectedDates,setNoteOpen,setSelectedDate}) => {
  const [data,setData] = useState(getCalendarDays())
  let month = data[16][4]
  let year = data[16][2]
  let monthName = data[16][3]

  const handleDateClick = (e) => {
    let date = new Date(year,month, +e.target.innerHTML).toDateString()
    if(selectedDates.find(n => n.d === date)){
      setSelectedDate(date)
      setNoteOpen(true)
    } else{
      setSelectedDates([...selectedDates,{d:date,notes:[]}])
      setNoteOpen(false)
    }
     
  };  

  const handlePrevClick = () => {
    const newDate = new Date(year, month - 1);
    setData(getCalendarDays(newDate));
  };
  
  const handleNextClick = () => {
    const newDate = new Date(year, month + 1);
    setData(getCalendarDays(newDate));
  };

 
  
  return (
    <div className={styles.calendar}>
      <div className={styles.head}>
        <div className={styles.date_and_but}>
        <div className={styles.date}>
          <h3>{year}</h3>
          <h3>{monthName}</h3>
        </div>
        <div className={styles.buttons}>
          <button onClick={handlePrevClick}>{`<`}</button>
          <button onClick={handleNextClick}>{`>`}</button>
        </div>
        </div>
        <div className={styles.days_names}>
          {daysNames.map((item,i)=><div key={i}>{item}</div>)}
        </div>
      </div>
      <div className={styles.body}>
      {data.map((item,i)=>(<div className={`
          ${item[0].setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0) && styles.now}
          ${selectedDates.find(n => n.d === item[0].toDateString()) && styles.selected}
          
          ${month !== item[4] && styles.other}`} key={i} onClick={handleDateClick}>{item[1]}</div>))}
    </div>
    </div>
  )
}

export default Calendar
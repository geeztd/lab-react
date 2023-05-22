import React,{useState} from 'react'
import Calendar from '../calendar/Calendar'
import Notes from '../notes/Notes'

const Scheduler = () => {

  const [selectedDates, setSelectedDates] = useState([])
  const [isNoteOpen, setNoteOpen] = useState(false)
  const [selectedDate,setSelectedDate] = useState(new Date())
 
  return (
    <div>
      <Calendar 
       selectedDates={selectedDates}
       setSelectedDates={setSelectedDates}
       setNoteOpen={setNoteOpen}
       setSelectedDate= {setSelectedDate}
      />
      {isNoteOpen?<Notes 
      selectedDate={selectedDate}
      selectedDates={selectedDates}
      setSelectedDates={setSelectedDates}
      setNoteOpen={setNoteOpen}
      />:null}
      </div>
  )
}

export default Scheduler
const createDate = (date)=>{
    const d = date ?? new Date()
    const dayNumber = d.getDate()
    const year = d.getFullYear()
    const month = d.toLocaleDateString(`default`,{month:`long`})
    const monthIndex = d.getMonth()
    const dayNumberInWeek = d.getDay() -1
    return [d,dayNumber,year,month,monthIndex,dayNumberInWeek];
}

const createMounth = (date)=>{
    
    const d = date?createDate(date):createDate()
    const getDay = (dayNumber) => createDate(new Date(d[2],d[4],dayNumber))
    const getDaysNumderOfMounth = ()=> new Date(d[2],d[4]+1,0).getDate()

    const days = []

    for(let i = 0;i <= getDaysNumderOfMounth() - 1;i++){
        days[i]= getDay(i+1)
    }
    return days;
}

export const getCalendarDays = (date) => {
    const d = date?createDate(date):createDate()
    const month = createMounth(new Date(d[2],d[4]))
    const monthNumberOfDays = month.length
    const prevMonthDays = createMounth(new Date(d[2],d[4]-1))
    const nextMonthDays = createMounth(new Date(d[2],d[4]+1))
    const firstDay = month[0]
    const numbersDaysOfPrevMonth = firstDay[5] 
    const numbersDaysOfNextMonth = 7 - (monthNumberOfDays + firstDay[5])%7
    const numberOfCalendarDays = numbersDaysOfNextMonth + numbersDaysOfPrevMonth + monthNumberOfDays
    let previndex = prevMonthDays.length-numbersDaysOfPrevMonth
    let index = 0, nextindex = 0
    const calendarDays = []
    for(let i=0;i< numberOfCalendarDays;i++ ){
        if(i<numbersDaysOfPrevMonth){
            calendarDays[i] = prevMonthDays[previndex]
            previndex++
            continue
        }
        if(i<monthNumberOfDays + numbersDaysOfPrevMonth){
            calendarDays[i] = month[index]
            index++
            continue
        }
        if(i<numberOfCalendarDays){
            calendarDays[i] = nextMonthDays[nextindex]
            nextindex++
        }
        
    }
    return calendarDays
}

export const daysNames = [
    `Пт`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Вс`
]

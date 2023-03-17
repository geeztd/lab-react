const createDate = (date)=>{
    const d = date || new Date()
    const dayNumber = d.getDate()
    const dayName = d.toLocaleDateString(`default`,{weekday:`short`})
    const year = d.getFullYear()
    const month = d.toLocaleDateString(`default`,{month:`long`})
    const monthNumber = d.getMonth()+1
    const monthIndex = d.getMonth()
    const week = getWeekNumber(d)
    return [d,dayName,dayNumber,year,month,monthNumber,week,monthIndex];
}

const getWeekNumber = (date)=>{
    const firstDayOfYear = new Date(date.getFullYear(),0,1)
    const pastDaysYear = (date.getTime()- firstDayOfYear.getTime())/86400000
    
    return Math.ceil((pastDaysYear + firstDayOfYear.getDay()+1)/7)
}
export const createMounth = ()=>{
    
    const d = createDate()
    const getDay = (dayNumber) => createDate(new Date(d[3],d[7],dayNumber))
    const getDaysNumderOfMounth = ()=> new Date(d[3],d[7]+1,0).getDate()

    const days = []

    for(let i = 0;i <= getDaysNumderOfMounth() - 1;i++){
        days[i]= getDay(i+1)
    }

    return days
}

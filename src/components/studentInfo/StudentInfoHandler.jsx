import React from 'react'

const StudentInfoHandler = (props) => {
    const info = props?.info[0]
    const getAge = ()=>{
        const year = new Date(info[1].slice(0,4),info[1].slice(5,7) - 1,info[1].slice(8,10))
        const age = Math.trunc(((year - new Date())/(24*3600*365.25*1000)))
        return -age
    }
    const getKyrs = ()=>{
        const kyrs = new Date().getFullYear() - info[2]
        if(kyrs >=4){
            return `Выпустился`
        } 
        else {
            return `${info[3]} ${kyrs}-${ info[4]}`
        }
    }
    const getOper = () => {
        if(info[7][0] === `+`){
            const key = info[7][4] + info[7][5]
            const firstNum = info[7][6]
            console.log(key, firstNum)
            if(key === `29` && (firstNum===`1` || firstNum===`3` || firstNum === `6` || firstNum === `9`)) return `A1 (velcom)`
            else if(key === `44`) return `A1 (velcom)`
            else if(key === `29` && (firstNum === `2` || firstNum ===  `5` || firstNum === `7` || firstNum ===`8`)) return `MTC`
            else if(key === `33`) return `MTC`
            else if(key === `25`) return `life:)`
            else return `Белтелеком`

        } else {
            const key = info[7][2] + info[7][3]
            const firstNum = info[7][4]
            if(key === `29` && (firstNum===`1` || firstNum===`3` || firstNum === `6` || firstNum === `9`)) return `A1 (velcom)`
            else if(key === `44`) return `A1 (velcom)`
            else if(key === `29` && (firstNum === `2` || firstNum ===  `5` || firstNum === `7` || firstNum ===`8`)) return `MTC`
            else if(key === `33`) return `MTC`
            else if(key === `25`) return `life:)`
            else return `Белтелеком`
        }
        
    }
  return (
    <table className=''>
        <tr>
            <td>ФИО</td>
            <td>{info[0]}</td>
        </tr>
        <tr>
            <td>текущий возраст студента</td>
            <td>{getAge()}</td>
        </tr>
        <tr>
            <td>факультет, курс, группа</td>
            <td>{getKyrs()}</td>
        </tr>
        <tr>
            <td>специальность</td>
            <td>{info[5]}</td>
        </tr>
        <tr>
            <td>электронная почта</td>
            <td>{info[6]}</td>
        </tr>
        <tr>
            <td>оператор услуг электронной почты</td>
            <td>{info[6].split(`@`).pop()}</td>
        </tr>
        <tr>
            <td>номер телефона</td>
            <td>{info[7]}</td>
        </tr>
        <tr>
            <td>оператор услуг мобильной связи</td>
            <td>{getOper()}</td>
        </tr>
    </table>
  )
}

export default StudentInfoHandler
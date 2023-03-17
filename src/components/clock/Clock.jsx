//import React, { useState } from 'react'
import styles from './clock.module.scss'
import React, { Component } from 'react'



export class Clock extends Component {
   constructor(props){
    super(props)
    this.state = {date : this.props.timezone?new Date(
      Date.now() + new Date().getTimezoneOffset() * 60000 + parseFloat(this.props.timezone) * 36e5):new Date(),
      format : this.props.format==='12'?true:false
    }
   }
   componentDidMount() {
    this.timerID = setInterval(
      () => this.setState(this.state.date = this.props.timezone?new Date(
        Date.now() + new Date().getTimezoneOffset() * 6e4 + parseFloat(this.props.timezone) * 36e5):new Date()),
      1000
    );
  }
  render() {
    return (
      <div className={styles.clock}>{this.state.date.toLocaleTimeString('ru',{hour12:this.state.format})}</div>
    )
  }
}

export default Clock

// const Clock = (props) => {

//   let format =false;
//   props.format==='12'?format=true:format=false

//   const [date,setDate] = useState(new Date())

//   setInterval(()=>{
//     setDate(props.timezone?new Date(
//       Date.now() + new Date().getTimezoneOffset() * 60000 + parseFloat(props.timezone) * 36e5):new Date())},
//       1000)
 
//   return (
//     <div className={styles.clock}>{date.toLocaleTimeString('ru',{hour12:format})}</div>
//   )
// }

// export default Clock
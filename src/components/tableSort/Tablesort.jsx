import React,{useState} from 'react'
import { tableData } from './tableData'
import styles from './tableSort.module.scss'

const Tablesort = () => {
    const [value,setValue] = useState(0)
    const [flag,setFlag] = useState(true)

    const compare = (a,b) =>{
        switch(value){
            case 0: 
                if(flag) return (+a.price)-(+b.price)
                else return (+b.price)-(+a.price)
            case 1: 
            if(flag) {
                if(a.name < b.name) return -1
                if(a.name > b.name) return 1
                return 0 
            } 
            else {
                if(a.name < b.name) return 1
                if(a.name > b.name) return -1
                return 0} 
            case 2: 
                if(flag) return (+a.stok)-(+b.stok)
                else return (+b.stok)-(+a.stok)
            default:break
        }
        
        
    }

    

  return (
    <table>
        <thead>
            <tr>
            <td>№</td>
            <td className={styles.head} onClick={()=>{setValue(1); setFlag(!flag)}}>Name</td>
            <td className={styles.head}  onClick={()=>{setValue(0); setFlag(!flag)}}> Prise</td>
            <td className={styles.head}  onClick={()=>{setValue(2); setFlag(!flag)}}>In stok</td>
        </tr>
        </thead>
        <tbody>
        {tableData.sort(compare).map((item,i)=><tr key={i}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.stok}</td>
        </tr>)}
        </tbody>
    </table>
  )
}

export default Tablesort
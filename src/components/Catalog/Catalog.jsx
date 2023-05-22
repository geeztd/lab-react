import React,{useState, useEffect} from 'react'
import data from "./catalogData.json"
import styles from "./Catalog.module.scss"

const Catalog = ({request}) => {
    const [value,setValue] = useState(0)
    const [sortData,setSortData] = useState(data)

    
    useEffect(() => {
        
        const compare = (a,b) =>{
            if (a.new && !b.new) return -1
            else if (!a.new && b.new) return 1
            
            switch(value){
                case `1`:
                    if(a.name < b.name) return -1
                    if(a.name > b.name) return 1
                    return 0 
                    case `0`: 
                    if(a.name < b.name) return 1
                    if(a.name > b.name) return -1
                    return 0
                    case `2`: return b.cost-a.cost
                    case `3`: return a.cost-b.cost
                    case `4`: return a.seil-b.seil
                    case `5`: return b.seil-a.seil
                    case `6`: return b.kol-a.kol
                    case `7`: return a.kol-b.kol
                    
                default:break
            }
        }
        const sorted = data.sort(compare)
        setSortData(sorted)     
      }, [value])

  return (
    <div>
        <div>
            <p>catalog</p>
            <select name="select" onChange={(e)=>{setValue(e.target.value)}}>
                <option value={0}>Сортировка А-Я</option>
                <option value={1}>Сортировка Я-А</option>
                <option value={2}>Сортировка по возрастанию стоимости</option>
                <option value={3}>Сортировка по убыванию стоимости</option>
                <option value={4}>Сортировка по возрастанию скидки</option>
                <option value={5}>Сортировка по убыванию скидки</option>
                <option value={6}>Сортировка по возрастанию количевтва</option>
                <option value={7}>Сортировка по убыванию количества</option>

            </select>
        </div>
        <div className={styles.catalog}>
            {sortData.filter(item=>item.name.includes(request)).map((item)=><div key={item.name} className={styles.item}>
                {item.new?<h1>Новинка</h1>:null}
                <div className={styles.img}>
                <img src={item.img} alt={item.name} />
                </div>
                <h2 className={styles.name}>Название: {item.name}</h2>
                <p className={styles.text}>Описание: {item.text}</p>
                <h5>Колечество {item.kol}</h5>
                {item.seil!==0?<div className={styles.costAndSeil}>
                    <h5 className={styles.seil}>{`${item.cost-item.cost*item.seil}(${item.seil*100}%)`}</h5>
                    <h5 className={styles.cost}>{item.cost}</h5>
                    </div>: <h5 className={styles.cost}>{item.cost}</h5>
                }
            </div>)}
        </div>
    </div>
  )
}

export default Catalog
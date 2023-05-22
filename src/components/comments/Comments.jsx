import React,{useState} from 'react'
import styles from "./comments.module.scss"

const Comments = () => {
    const [comments, setComments] = useState([])
    const [isEdit, setEdit] = useState(-1)
    const [isInfo, setInfo] = useState(-1)
    const [imgNum, setImgNum] = useState(1)
    const onCreate = () =>{
        const item =  Array.from(document.forms.comments.elements).map(item=>item.value)
        const comment = {
            name:item[0],
            mail:item[1],
            text:item[2],
            word:item[3],
            img:item[4],
            dateEdit: new Date().toDateString()
        }
        setComments([...comments, comment])
        setImgNum(1)
    }
    const onSave = (e) => {
        const Num = e.target.value
        const val = document.forms.edit.elements[0].value
        setComments(comments.map((item,i) => (Number(Num) === i ? {
            name:item.name,
            mail: item.mail,
            text:val,
            word: item.word,
            img:item.img,
            dateEdit: new Date().toDateString()
        } : item)))
        setEdit(-1)
    }
    const onDelete = (e) => {
        const com = comments[e.target.value]
        const val = prompt(`введите слово для удаления`)
        if(com.word === val) setComments(comments.filter(item => item !== com))
        else alert(`неправильное слово`)
    }
  return (
    <div className={styles.cont}>
        <div className={styles.coms}>
            {comments.map((item,i) => (isInfo === i? 
            <div className={styles.com} key={item.word}>
                <p>имя : {item.name}</p>
                <p>почта : {item.mail}</p>
                <p>дата изменения : {item.dateEdit}</p>
                <button onClick={(e)=>{setInfo(-1)}}>закрыть</button>
            </div> : isEdit === i?
                (<form name='edit' key={item.word} className={styles.com}>
                    <input type="text" placeholder='текст' defaultValue={item.text} />
                    <button type='reset' value={i} onClick={onSave}>Сохранить</button>
                </form>):
                (<div key={item.word} className={styles.com}>
                    <div>
                        <img src={`image/img${item.img}.webp`} alt="" />
                    <h3>{item.name}</h3>
                    </div>
                    <p>{item.text}</p>
                    <button value={i} onClick={(e)=>{setEdit(i)}}>Изменить</button>
                    <button value={i} onClick={onDelete}>Удалить</button>
                    <button value={i} onClick={(e)=>{setInfo(i)}}>Информация</button>
                </div>)))}
        </div>      
        <form name='comments' className={styles.form}>
            <input type="text" placeholder='Имя'/>
            <input type="email" placeholder='Почта' />
            <input type='text' placeholder='Текст сообщения'/>
            <input type='text' placeholder='Секретное слово для удаления'/>
            <select onChange={(e)=>{setImgNum(e.target.value)}}>
                <option value={1}>изображение1</option>
                <option value={2}>изображение2</option>
                <option value={3}>изображение3</option>
                <option value={4}>изображение4</option>
                <option value={5}>изображение5</option>
            </select>
            <img src={`image/img${imgNum}.webp`} alt="img" />
            <button type='reset' onClick={onCreate}>создать коментарий</button>
        </form>
        
        
    </div>
  )
}

export default Comments
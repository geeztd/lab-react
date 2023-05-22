import React from 'react'
import { useState } from 'react'
import styles from "./notes.module.scss"

      
const Notes = ({selectedDate,selectedDates,setSelectedDates,setNoteOpen}) => {
    const [isEdit, setEdit] = useState(-1)
    const date = selectedDates.find(n => n.d === selectedDate)

     const onSubmit = (e) => {
        let form = [Array.from(document.forms.notes.elements).map(item=>item.value)]
        let note = {
            head: `${form[0][0]}`,
            main: `${form[0][1]}`,
        }
        const dateWhithNotes = {
            d:selectedDate,
            notes:[...date.notes , note]
        }

        setSelectedDates(selectedDates.map(n => (n.d === selectedDate ? dateWhithNotes : n)))

    }

    const deleteAll = (e)=>{
        setSelectedDates(selectedDates.map(n => (n.d === selectedDate ? {d:selectedDate,notes:[]} : n)))
        
    }

    const onDelete = (e) =>{
        const val = e.target.value
        setSelectedDates(selectedDates.map(n => (n.d === selectedDate ?
            {d:n.d,notes : n.notes.filter((note,i) => i !== Number(val))} : n)))
    }

    const onEdit = (e) =>{
        const val = e.target.value
        setEdit(Number(val))
    }

    const onSave = (e) =>{
        const val = e.target.value
        let form = [Array.from(document.forms.edit.elements).map(item=>item.value)]
        let newNote = {
            head: `${form[0][0]}`,
            main: `${form[0][1]}`,
        }
        setSelectedDates(selectedDates.map(n => (n.d === selectedDate ?
            {d:n.d,notes : n.notes.map((note,i) => (i === Number(val)?newNote:note))} : n)))
        setEdit(-1)
    }

    const onClose = (e)=>{
        setNoteOpen(false)
    setSelectedDates(selectedDates.filter(n => Boolean(n.notes.length)));

    }
  
  return (
    <div className={styles.wraper}>
        <form name='notes' className={styles.notes}>
            <input type="text" placeholder='Заголовок'/>
            <textarea/>
            <button type="reset" onClick={onSubmit}>Добавить заметку</button>
            <button type='reset' onClick={deleteAll}>Удалить все</button>
            <button type='reset' onClick={onClose}>Закрыть</button>
        </form>
                <div className={styles.note}>
                {selectedDates.find(n => n.d === selectedDate).notes.map((item,i) => (<div key={item.head} className={styles.item}>
                    <h2>{item.head}</h2>
                    <p>{item.main}</p>
                    <button value={i} onClick={onDelete}>Удалить</button>
                    <button value={i} onClick={onEdit}>Редактировать</button>
                    {isEdit === i?<form className={styles.edit_menu} name='edit'>
                        <input defaultValue={item.head}  type="text" placeholder='Заголовок'/>
                        <textarea defaultValue={item.main}/>
                        <button value={i} type='reset' onClick={onSave}>Сохранить</button>
                    </form>:null}
                </div>))}
            </div>
    </div>
  )
}

export default Notes
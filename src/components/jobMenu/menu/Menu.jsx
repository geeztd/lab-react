import React from 'react'
import { jobMenu } from './data'
import styles from '../chooseProf/choose.module.scss'
const Menu = (props) => {
  let value = parseFloat(props.value)
  return (
      <ul className={styles.menu}>
        {jobMenu[value].links.map((item) => (
          <li>
            <a href={item.link}  key={item.linkName}>{item.linkName}</a>
          </li>
          ))}
      </ul>
  )
}

export default Menu
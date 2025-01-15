import React from 'react'
import styles from "@/components/Rightsidebar/styles.module.css"
import Widget from './Widget'
const rightsidebar = () => {
  return (
    <aside className={styles.rightsidebar} >
        <Widget />
    </aside>
    
  )
}

export default rightsidebar
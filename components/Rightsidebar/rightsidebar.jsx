import React from 'react'
import styles from "@/components/Rightsidebar/styles.module.css"
import Widget from './Widget'
import WidgetTags from './WidgetTags'
const rightsidebar = () => {
  return (
    <aside className={styles.rightsidebar} >
        <Widget />
        <WidgetTags />
    </aside>
    
  )
}

export default rightsidebar
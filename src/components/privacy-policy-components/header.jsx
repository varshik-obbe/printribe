import React from 'react'
import styles from '../../styles/policy.module.css'

function header(props){
    return(
        <div className={styles.ppheader}>
            {props.title}
        </div>
    )
}

export default header;
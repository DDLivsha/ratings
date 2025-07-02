import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Advantages.module.css'
import { HhData as HhDataProps, TopLevelCategory, TopPageAdvantage } from '@/interfaces/top-page'
import CheckIcon from '@/assets/images/check.svg'

interface Props {
   advantages: TopPageAdvantage[]
}

const Advantages: FC<Props> = ({ advantages }) => {

   return (
      <>
         {advantages.map(a => (
            <div key={a._id} className={styles.advantage}>
               <CheckIcon />
               <div className={styles.title}>{a.title}</div>
               <div className={styles.vline}/>
               <p>{a.description}</p>
            </div>
         ))}
      </>
   )
}

export default Advantages
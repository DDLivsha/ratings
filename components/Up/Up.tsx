'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Up.module.css'
import { useScrollY } from '@/hooks/useScrollY'
import { motion, useAnimation } from 'framer-motion'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'


const Up: FC = () => {

   const y = useScrollY()
   const controls = useAnimation()

   React.useEffect(() => {
      controls.start({
         opacity: y / document.body.scrollHeight,
         pointerEvents: y ? 'auto' : 'none'
      })
   }, [y, controls])

   const handleClick = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }

   return (
      <motion.div
         animate={controls}
         initial={{ opacity: 0, pointerEvents: 'none' }}
         className={styles.up}
      >
         <ButtonIcon icon='up' appearance='primary' onClick={handleClick} />
      </motion.div>
   )
}

export default Up
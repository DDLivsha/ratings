import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Sidebar.module.css'
import cn from 'classnames'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Sidebar: FC<Props> = ({ ...props }) => {
   return (
      <div {...props}>
         Sidebar
      </div>
   )
}

export default Sidebar
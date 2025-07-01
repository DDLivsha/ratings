import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Sidebar.module.css'
import cn from 'classnames'
import Menu from '../Menu/Menu'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

const Sidebar: FC<Props> = ({ ...props }) => {
   return (
      <div {...props}>
         <Menu />
      </div>
   )
}

export default Sidebar
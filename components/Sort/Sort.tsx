'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './Sort.module.css'
import cn from 'classnames'
import SortIcon from '@/assets/images/sort.svg'

export enum SortEnum {
   Rating,
   Price
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   sort: SortEnum
   setSort: (sort: SortEnum) => void
}

const Sort: FC<Props> = ({ className, sort, setSort, ...props }) => {
   return (
      <div className={cn(styles.sort, className)} {...props}>
         <span
            tabIndex={0}
            role={'button'}
            onKeyDown={(e) => e.key === 'Enter' && setSort(SortEnum.Rating)}
            onClick={() => setSort(SortEnum.Rating)}
            className={cn({
               [styles.active]: sort === SortEnum.Rating
            })}
         >
            <SortIcon className={styles.sortIcon} />
            By rating
         </span>
         <span
            tabIndex={0}
            role={'button'}
            onKeyDown={(e) =>  e.key === 'Enter' &&  setSort(SortEnum.Price)}
            onClick={() => setSort(SortEnum.Price)}
            className={cn({
               [styles.active]: sort === SortEnum.Price
            })}
         >
            <SortIcon className={styles.sortIcon} />
            By price
         </span>
      </div>
   )
}

export default Sort
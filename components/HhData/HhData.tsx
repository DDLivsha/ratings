'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './HhData.module.css'
import { HhData as HhDataProps, TopLevelCategory } from '@/interfaces/top-page'
import Card from '../Card/Card'
import RateIcon from '@/assets/images/rating-star.svg'
import { usePathname } from 'next/navigation'
import { firstLevelMenu } from '@/helpers/helpers'

interface Props extends HhDataProps { }

const HhData: FC<Props> = ({ count, juniorSalary, middleSalary, seniorSalary }) => {

   const pathname = usePathname();
   const firstCategoryItem = firstLevelMenu.find((item) => item.route == pathname.split('/')[1])
   if (firstCategoryItem?.id !== TopLevelCategory.Courses) return null

   return (
      <div className={styles.hh}>
         <Card className={styles.count}>
            <div className={styles.title}>All vacancies</div>
            <div className={styles.countValue}>{count}</div>
         </Card>

         <Card className={styles.salary}>
            <div>
               <div className={styles.title}>Junior</div>
               <div className={styles.salaryValue}>{juniorSalary}</div>
               <div className={styles.rate}>
                  <RateIcon className={styles.filled} />
                  <RateIcon />
                  <RateIcon />
               </div>
            </div>
            <div>
               <div className={styles.title}>Middle</div>
               <div className={styles.salaryValue}>{middleSalary}</div>
               <div className={styles.rate}>
                  <RateIcon className={styles.filled} />
                  <RateIcon className={styles.filled} />
                  <RateIcon />
               </div>
            </div>
            <div>
               <div className={styles.title}>Senior</div>
               <div className={styles.salaryValue}>{seniorSalary}</div>
               <div className={styles.rate}>
                  <RateIcon className={styles.filled} />
                  <RateIcon className={styles.filled} />
                  <RateIcon className={styles.filled} />
               </div>
            </div>
         </Card>
      </div>
   )
}

export default HhData
'use client'
import React, { DetailedHTMLProps, FC, forwardRef, HTMLAttributes } from 'react'
import styles from './Reviews.module.css'
import { ProductModel, ReviewModel } from '@/interfaces/product'
import Card from '../Card/Card'
import cn from 'classnames'
import { useReviewOpen } from '@/helpers/zustand'
import UserIcon from '@/assets/images/user.svg'
import { format } from 'date-fns'
import Rating from '../Rating/Rating'
import Divider from '../Divider/Divider'
import ReviewForm from '../ReviewForm/ReviewForm'
import { motion } from 'framer-motion'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   product: ProductModel
   reviews: ReviewModel[]
}
const Reviews: FC<Props> = forwardRef(({ product, reviews }, ref) => {

   const { productId } = useReviewOpen()

   const variants = {
      visible: {
         opacity: 1,
         height: "auto",
         overflow: "visible"
      },
      hidden: {
         opacity: 0,
         height: 0,
         overflow: "hidden"
      }
   }

   return (
      <motion.div
         variants={variants}
         initial={productId === product._id ? 'visible' : 'hidden'}
         animate={productId === product._id ? 'visible' : 'hidden'}
      >
         <Card ref={ref} color='blue' className={cn(styles.reviews)}>
            {reviews.map((item) =>
               <div key={item._id}>
                  <div className={styles.review}>
                     <UserIcon className={styles.user} />
                     <div className={styles.title}>
                        <span className={styles.name}>{item.name}:</span>
                        <span>{item.title}</span>
                     </div>
                     <div className={styles.date}>{format(new Date(item.createdAt), 'dd MMMM yyyy')}</div>
                     <div className={styles.rating}>
                        <Rating rating={item.rating} />
                     </div>
                     <div className={styles.description}>
                        {item.description}
                     </div>
                  </div>
                  <Divider />
               </div>
            )}
            <ReviewForm productId={product._id} />
         </Card>
      </motion.div>
   )
})

export default Reviews
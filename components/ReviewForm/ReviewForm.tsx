'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './ReviewForm.module.css'
import cn from 'classnames'
import Input from '../Input/Input'
import Rating from '../Rating/Rating'
import Textarea from '../Textarea/Textarea'
import { Button } from '../Button/Button'
import CloseIcon from '@/assets/images/close-green.svg'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   productId: string
}
const ReviewForm: FC<Props> = ({ productId, className, ...props }) => {

   return (
      <>
         <div {...props} className={cn(styles.reviewForm, className)}>
            <Input
               className={styles.title}
               placeholder='Name'

            />
            <Input
               className={styles.title}
               placeholder='Review title'
            />
            <div className={styles.rating}>
               <span>Rating:</span>
               <Rating rating={4} />
            </div>
            <Textarea
               className={styles.description}
               placeholder='Description'
            />
            <div className={styles.submit}>
               <Button appearance='primary'>Send</Button>
               <span>* Before publishing, the review will be pre-moderated and verificated</span>
            </div>
         </div>
         <div className={styles.success}>
            <div className={styles.successTitle}>Your review was successfully sent!</div>
            <div className={styles.successDesc}>Thanks, your review will be published after moderation.</div>
            <CloseIcon className={styles.close} />
         </div>
      </>
   )
}

export default ReviewForm
'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import styles from './ReviewForm.module.css'
import cn from 'classnames'
import Input from '../Input/Input'
import Rating from '../Rating/Rating'
import Textarea from '../Textarea/Textarea'
import { Button } from '../Button/Button'
import CloseIcon from '@/assets/images/close-green.svg'
import { useForm, Controller } from 'react-hook-form'
import { IReviewForm } from '@/interfaces/review-form'
import { createReview } from '@/api/create-review'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   productId: string
}

const ReviewForm: FC<Props> = ({ productId, className, ...props }) => {

   const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>()
   const [isSuccess, setIsSuccess] = React.useState<boolean>(false)
   const [isError, setIsError] = React.useState<string>('')

   const onSubmit = async (formData: IReviewForm) => {
      try {
         const res = await createReview({ ...formData, productId })

         if (res.ok) {
            setIsSuccess(true)
            setIsError('')
            reset()
         } else {
            const error = await res.json()
            setIsError(error.message)
         }
      }
      catch (e) {
         console.error(e)
         setIsError('Something went wrong')
      }
   }
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div {...props} className={cn(styles.reviewForm, className)}>
            <Input
               {...register('name', { required: { value: true, message: 'Name is required' } })}
               className={styles.title}
               placeholder='Name'
               error={errors.name}
            />
            <Input
               {...register('title', { required: { value: true, message: 'Title is required' } })}
               className={styles.title}
               placeholder='Review title'
               error={errors.title}
            />
            <div className={styles.rating}>
               <span>Rating:</span>
               <Controller
                  control={control}
                  name='rating'
                  rules={{ required: { value: true, message: 'Rating is required' } }}
                  render={({ field }) => (
                     <Rating
                        isEditable
                        rating={field.value}
                        setRating={field.onChange}
                        error={errors.rating}
                     />)}
               />
            </div>
            <Textarea
               {...register('description', { required: { value: true, message: 'Description is required' } })}
               className={styles.description}
               placeholder='Description'
               error={errors.description}
            />
            <div className={styles.submit}>
               <Button appearance='primary'>Send</Button>
               <span>* Before publishing, the review will be pre-moderated and verificated</span>
            </div>
         </div>
         {isSuccess && <div className={styles.success}>
            <div className={styles.successTitle}>Your review was successfully sent!</div>
            <div className={styles.successDesc}>Thanks, your review will be published after moderation.</div>
            <CloseIcon
               className={styles.close}
               onClick={() => setIsSuccess(false)}
            />
         </div>}
         {isError && <div className={styles.error}>
            <div className={styles.successTitle}>{isError}</div>
            <CloseIcon
               className={styles.close}
               onClick={() => setIsError('')}
            />
         </div>}
      </form>
   )
}

export default ReviewForm
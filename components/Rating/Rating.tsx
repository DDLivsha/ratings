'use client'
import React, { DetailedHTMLProps, FC, forwardRef, HTMLAttributes, JSX, useRef } from 'react'
import styles from './Rating.module.css'
import cn from 'classnames'
import StarIcon from '@/assets/images/star.svg'
import { FieldError } from 'react-hook-form'
import { Span } from 'next/dist/trace'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   isEditable?: boolean
   rating: number
   setRating?: (rating: number) => void
   error?: FieldError
}
const Rating: FC<Props> = forwardRef(({ className, isEditable = false, rating, setRating, error, ...props }, ref: React.ForwardedRef<HTMLDivElement>) => {

   const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>))

   const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([])

   const changeDisplay = (i: number) => {
      if (!isEditable) return
      constructRating(i)
   }

   const handleClick = (i: number) => {
      if (!isEditable || !setRating) return
      setRating(i)
   }

   const handleKey = (e: React.KeyboardEvent) => {
      if (!isEditable || !setRating) return

      e.preventDefault()
      if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
         setRating(rating < 5 ? rating + 1 : 5)
         ratingArrayRef.current[rating]?.focus()
      }
      if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
         setRating(rating > 1 ? rating - 1 : 1)
         ratingArrayRef.current[rating - 2]?.focus()
      }
   }

   const computeFocus = (r: number, i: number) => {
      if (!rating && i == 0) {
         return 0
      }
      if (!isEditable) {
         return -1
      }
      if (r == i + 1) {
         return 0
      }
      return -1
   }

   const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
         return (
            <span
               className={cn(styles.star, {
                  [styles.filled]: i < currentRating,
                  [styles.editable]: isEditable,
               })}
               key={i}
               onMouseEnter={() => isEditable && changeDisplay(i + 1)}
               onMouseLeave={() => isEditable && changeDisplay(rating)}
               onClick={() => isEditable && handleClick(i + 1)}
               tabIndex={computeFocus(rating, i)}
               onKeyDown={handleKey}
               ref={(el) => { ratingArrayRef.current?.push(el) }}
            >
               <StarIcon
               />
            </span>
         )
      })
      setRatingArray(updatedArray)
   }

   React.useEffect(() => {
      constructRating(rating)
   }, [rating])

   return (
      <div className={cn(styles.ratingWrapper, className, { [styles.error]: error })} {...props} ref={ref}>
         {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
         {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
   )
})

export default Rating
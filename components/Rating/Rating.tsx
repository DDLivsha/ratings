'use client'
import React, { DetailedHTMLProps, FC, HTMLAttributes, JSX } from 'react'
import styles from './Rating.module.css'
import cn from 'classnames'
import StarIcon from '@/assets/images/star.svg'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   isEditable?: boolean
   rating: number
   setRating?: (rating: number) => void
}
const Rating: FC<Props> = ({ className, isEditable = false, rating, setRating, ...props }) => {

   const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>))

   const changeDisplay = (i: number) => {
      if (!isEditable) return
      constructRating(i)
   }

   const handleClick = (i: number) => {
      if (!isEditable || !setRating) return
      setRating(i)
   }

   const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
         return (
            <span
               className={cn(styles.star, {
                  [styles.filled]: i < currentRating,
                  [styles.editable]: isEditable
               })}
               key={i}
               onMouseEnter={() => isEditable && changeDisplay(i + 1)}
               onMouseLeave={() => isEditable && changeDisplay(rating)}
               onClick={() => isEditable && handleClick(i + 1)}
            >
               <StarIcon
                  tabIndex={isEditable ? 0 : -1}
                  onKeyDown={(e: React.KeyboardEvent<SVGAElement>) => isEditable && e.code === 'Enter' && handleClick(i + 1)}
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
      <div {...props}>
         {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
      </div>
   )
}

export default Rating
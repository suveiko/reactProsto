import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating,
}

export const EmptyStars = () => <Rating value={0} onClick={() => {}}/>
export const RatingOne = () => <Rating value={1} onClick={() => {}}/>
export const RatingTwo = () => <Rating value={2} onClick={() => {}}/>
export const RatingThree = () => <Rating value={3} onClick={() => {}}/>
export const RatingFour = () => <Rating value={4} onClick={() => {}}/>
export const RatingFive = () => <Rating value={5} onClick={() => {}}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value={rating} onClick={setRating}/>
}


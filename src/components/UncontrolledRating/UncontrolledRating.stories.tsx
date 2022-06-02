import React from 'react';
import {UncontrolledRating} from "./UncontrolledRating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}

export const RatingDefault = () => <UncontrolledRating defaultValue={0}/>
export const RatingFirst = () => <UncontrolledRating defaultValue={1}/>
export const RatingSecond = () => <UncontrolledRating defaultValue={2}/>
export const RatingThird = () => <UncontrolledRating defaultValue={3}/>
export const RatingFourth = () => <UncontrolledRating defaultValue={4}/>
export const RatingFifth = () => <UncontrolledRating defaultValue={5}/>


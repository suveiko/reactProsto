import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating({value, onClick}: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={value > 0} onClick={() => onClick(1)}/>
            <Star selected={value > 1} onClick={() => onClick(2)}/>
            <Star selected={value > 2} onClick={() => onClick(3)}/>
            <Star selected={value > 3} onClick={() => onClick(4)}/>
            <Star selected={value > 4} onClick={() => onClick(5)}/>
        </div>
    )
}

type StarType = {
    selected: boolean
    onClick: () => void
}

function Star({selected, onClick}: StarType) {
    console.log('Star rendering')
    return (
        <span onClick={() => onClick()}>
          {selected ? <b> star</b> : ' star'}
        </span>
    )
}
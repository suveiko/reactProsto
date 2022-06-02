import React, {useState} from "react";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    defaultValue?: ValueType
}

export function UncontrolledRating({defaultValue}: RatingType) {
    let [value, setValue] = useState<ValueType>(defaultValue ? defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} callBack={() => setValue(1)}/>
            <Star selected={value > 1} callBack={() => setValue(2)}/>
            <Star selected={value > 2} callBack={() => setValue(3)}/>
            <Star selected={value > 3} callBack={() => setValue(4)}/>
            <Star selected={value > 4} callBack={() => setValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callBack: () => void
}

const Star = ({selected, callBack}: StarPropsType) => <span onClick={callBack}>{selected ?
    <b>star </b> : ' star'}</span>


import React, {useState} from "react";

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    defaultValue?: ValueType
}

export function UncontrolledRatingSecret({defaultValue}: RatingType) {
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

export const UncontrolledRating = React.memo(UncontrolledRatingSecret)

type StarPropsType = {
    selected: boolean
    callBack: () => void
}

const StarSecret = ({selected, callBack}: StarPropsType) => <span onClick={callBack}>{selected ? <b
        style={{
            color: '#000',
            cursor: 'pointer'
        }}
    >&#9733;
    </b>
    : <span style={{
        color: '#ccc',
        cursor: 'pointer'
    }}>
                  &#9733;
              </span>
}</span>

const Star = React.memo(StarSecret)


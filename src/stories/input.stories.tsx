import {useState} from "react";


export default {
    title: 'UncontrolledInput',
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')

    return <>
        <input
            onChange={(e) => setValue(e.currentTarget.value)}
        />
        {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')

    return <>
        <input/>
        <button onClick={() => setValue('you')}>save</button>
        actual value -- {value}
    </>
}

export const ControlledInput = () => <input value={'Google'}/>
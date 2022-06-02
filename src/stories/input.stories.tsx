import {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
    return <><input onChange={onChange}/>{value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onSave = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={onSave}>save</button>
        actual value -- {value}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setParentValue(e.currentTarget.value)

    return <>
        <input
            value={parentValue}
            onChange={onChangeHandler}
        />
        ~~ {parentValue}
    </>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setParentValue(e.currentTarget.checked)

    return <input
        type='checkbox'
        checked={parentValue}
        onChange={onChangeHandler}
    />

}

export const ControlledSelect = () => {

}

export const ControlledInputWithFixedValue = () => <input value={'Google'}/>
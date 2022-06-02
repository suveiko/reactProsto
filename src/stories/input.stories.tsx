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
    const [parentValue, setParentValue] = useState('2')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option value={'0'}>Minsk</option>
        <option value={'1'}>Tbilisi</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>none</option>
    </select>

}

export const ControlledInputWithFixedValue = () => <input value={'Google'}/>
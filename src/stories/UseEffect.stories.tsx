import {useEffect, useState} from "react";


export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every time render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render like (ComponentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and when counter changing')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}
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

export const SetTimeOutExample = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)

    console.log('SetTimeOutExample')

    useEffect(() => {

        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

    }, [])


    return <>
        Hello, counter: {counter} - fake: {fake}
    </>
}


export const Timer = () => {
    const [date, setDate] = useState<Date>()

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000)
    }, [])


    const timer = date?.toLocaleTimeString()

    const styles = {
        display: "flex",
        justifyContent: 'center',
        fontSize: '50px',
        border:'1px solid',
        borderRadius: '20px'
    }

    return <div style={styles}>{timer}</div>
}

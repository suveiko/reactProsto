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

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)

    console.log('SetTimeOutExample')

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

        return () => clearInterval(intervalId)
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
        border: '1px solid',
        borderRadius: '20px'
    }

    return <div style={styles}>{timer}</div>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0)


    console.log('Component rendered with ' + counter)

    useEffect(() => {
        console.log('Effect occurred: ' + counter)

        return () => {
            console.log('RESET EFFECT: ' + counter)
        }
    }, [counter])


    const increase = () => setCounter(counter + 1)

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')


    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])


    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {
    const [text, setText] = useState('')


    console.log('Component rendered with ' + text)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            console.log('timeout expired')
            setText('3 seconds passed')
        }, 3000)
        return () => clearTimeout(timeoutId)
    }, [text])


    return <>
        Typed text: {text}
    </>
}
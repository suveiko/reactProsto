import {Dispatch, SetStateAction, useEffect, useState} from "react";
import s from './Clock.module.css'

export const Clock = () => {

    const [date, setDate] = useState(new Date())
    const [change, setChange] = useState(true)

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)

    }, [])

    return (
        <>
            <button
                onClick={() => setChange(!change)}
                style={{
                    cursor: 'pointer',
                }}
            >
                Change clock
            </button>
            {
                change
                    ? <DigitalClock date={date}/>
                    : <AnalogClock date={date} setDate={setDate}/>
            }
        </>
    );
};


const DigitalClock = ({date}: { date: Date }) => {
    const getTwoDigitsString = (num: number) => num < 10 ? `0${num}` : num

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '40px'
        }}>
            <span>{getTwoDigitsString(date.getHours())}</span>
            :
            <span>{getTwoDigitsString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitsString(date.getSeconds())}</span>
        </div>
    )
}


type AnalogClockType = {
    date: Date
    setDate: Dispatch<SetStateAction<Date>>
}
const AnalogClock = ({date, setDate}: AnalogClockType) => {

    const classNameForClock = [
        {number: 12, className: s.twelve},
        {number: 1, className: s.one},
        {number: 2, className: s.two},
        {number: 3, className: s.three},
        {number: 4, className: s.four},
        {number: 5, className: s.five},
        {number: 6, className: s.six},
        {number: 7, className: s.seven},
        {number: 8, className: s.eight},
        {number: 9, className: s.nine},
        {number: 10, className: s.ten},
        {number: 11, className: s.eleven},
    ]

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)

    }, [setDate])

    return (
        <div className={s.clock}>
            <div
                className={s.hour_hand}
                style={{transform: `rotateZ(${date.getHours() * 30}deg)`}}
            />
            <div
                className={s.min_hand}
                style={{transform: `rotateZ(${date.getMinutes() * 6}deg)`}}
            />
            <div
                className={s.sec_hand}
                style={{transform: `rotateZ(${date.getSeconds() * 6}deg)`}}
            />
            {
                classNameForClock.map(({className, number}) =>
                    <span className={className}>{number}</span>
                )}
        </div>
    );
}

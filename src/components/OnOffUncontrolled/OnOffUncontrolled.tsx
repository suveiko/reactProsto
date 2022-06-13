import React, {useState} from "react";

type OnOffUncontrolled = {
    callBack: (on: boolean) => void
    defaultOn?: boolean
}

export const OnOffUncontrolledSecret = (p: OnOffUncontrolled) => {
    let [on, setOn] = useState(p.defaultOn ? p.defaultOn : false) //hook with init value

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '10px',
        display: 'inline-block',
        padding: '2px',
        cursor: 'pointer',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '10px',
        padding: '2px',
        cursor: 'pointer',
        display: 'inline-block',
        backgroundColor: !on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '6px',
        borderRadius: '8px',
        border: '1px solid black',
        marginLeft: '10px',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClickHandlerOn = () => {
        setOn(true)
        p.callBack(true)
    }
    const onClickHandlerOff = () => {
        setOn(false)
        p.callBack(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickHandlerOn}>ON</div>
            <div style={offStyle} onClick={onClickHandlerOff}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export const OnOffUncontrolled = React.memo(OnOffUncontrolledSecret)



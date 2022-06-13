import React from "react";

type OnOff = {
    value: boolean
    setOn: (value: boolean) => void
}

export const OnOffSecret = ({value, setOn}: OnOff ) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '10px',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: value ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '10px',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: !value ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '10px',
        height: '6px',
        borderRadius: '8px',
        border: '1px solid black',
        marginLeft: '10px',
        padding: '2px',
        display: 'inline-block',
        backgroundColor: value ? 'green' : 'red'
    }

    const onClickHandlerOn = () => {
        setOn(true)
    }
    const onClickHandlerOff = () => {
        setOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickHandlerOn}>ON</div>
            <div style={offStyle} onClick={onClickHandlerOff}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export const OnOff  = React.memo(OnOffSecret)



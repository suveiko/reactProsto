import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
}

const callBack = action('on or off clicked')

export const OnOffTrue = () => <OnOff value={true} setOn={callBack}/>
export const OnOffFalse = () => <OnOff value={false} setOn={callBack}/>

export const ChangingOnOff = () => {
    const [on, setOn] = useState(false)
    return <OnOff value={on} setOn={setOn}/>
}


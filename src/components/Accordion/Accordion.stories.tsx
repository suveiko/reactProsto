import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callBack = action('Accordion mode changed clicked')

export const CollapsedMode = () =>
    <Accordion
        titleValue={'Menu'}
        collapsed={true}
        callBack={callBack}
        items={[]}
    />
export const UncollapsedMode = () =>
    <Accordion
        titleValue={'Menu'}
        collapsed={false}
        callBack={callBack}
        items={['Sasha', 'Anton', 'Dimych', 'Valera']}
    />


export const AccordionChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion
        titleValue={'Menu'}
        collapsed={value}
        callBack={setValue}
        items={['Sasha', 'Anton', 'Dimych', 'Valera']}
    />
}



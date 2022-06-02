import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callBack = action('Accordion mode changed clicked')
const onClickCallBack = action('Some item was clicked')

export const CollapsedMode = () =>
    <Accordion
        titleValue={'Menu'}
        collapsed={true}
        callBack={callBack}
        items={[]}
        onClick={onClickCallBack}
    />
export const UncollapsedMode = () =>
    <Accordion
        titleValue={'Menu'}
        collapsed={false}
        callBack={callBack}
        items={
            [
                {title: 'Sasha', value: 1},
                {title: 'Anton', value: 2},
                {title: 'Dimych', value: 3},
                {title: 'Valera', value: 4}
            ]
        }
        onClick={onClickCallBack}
    />


export const AccordionChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion
        titleValue={'Menu'}
        collapsed={value}
        callBack={setValue}
        items={
            [
                {title: 'Sasha', value: 1},
                {title: 'Anton', value: 2},
                {title: 'Dimych', value: 3},
                {title: 'Valera', value: 4}
            ]
        }
        onClick={onClickCallBack}
    />
}



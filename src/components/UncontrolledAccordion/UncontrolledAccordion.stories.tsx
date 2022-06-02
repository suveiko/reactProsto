import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callBack = action('Accordion mode changed clicked')

export const UncontrolledAccordionChanging = () => <UncontrolledAccordion titleValue={'Menu'}/>



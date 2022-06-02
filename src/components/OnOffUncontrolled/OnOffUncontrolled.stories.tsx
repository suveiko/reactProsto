import React from 'react';
import {action} from "@storybook/addon-actions";
import {OnOffUncontrolled} from "./OnOffUncontrolled";

export default {
    title: 'OnOffUncontrolled',
    component: OnOffUncontrolled,
}

const callBack = action('on or off clicked')

export const OnMode = () => <OnOffUncontrolled defaultOn={true}  callBack={callBack}/>
export const OffMode = () => <OnOffUncontrolled defaultOn={false}  callBack={callBack}/>

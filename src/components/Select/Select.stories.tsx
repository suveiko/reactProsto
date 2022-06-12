import React from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
}

const callBack = action('Accordion mode changed clicked')
const onClickCallBack = action('Some item was clicked')

export const SelectedMode = () =>
    <>
        <Select
            value={'2'}
            items={
                [
                    {title: 'Sasha', value: '1'},
                    {title: 'Anton', value: '2'},
                    {title: 'Dimych', value: '3'},
                    {title: 'Valera', value: '4'}
                ]
            }
            onChange={onClickCallBack}
        />
    </>
export const SelectedModeWithoutValue = () =>
    <>
        <Select
            items={
                [
                    {title: 'Sasha', value: '1'},
                    {title: 'Anton', value: '2'},
                    {title: 'Dimych', value: '3'},
                    {title: 'Valera', value: '4'}
                ]
            }
            onChange={onClickCallBack}
        />
    </>

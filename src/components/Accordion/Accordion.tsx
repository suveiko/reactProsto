import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
    callBack?: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}


export function Accordion({titleValue, items, onClick}: AccordionPropsType) {

    const [collapsed, dispatch] = useReducer(reducer, false)

    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={titleValue} onClick={() => dispatch({type: TOGGLE_CONSTANT})}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle({title, onClick}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={onClick}> ----{title}---- </h3>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {items.map(({value, title}, index) =>
                <li key={index} onClick={() => {
                    onClick(value)
                }}>{title}</li>
            )}
        </ul>
    )
}

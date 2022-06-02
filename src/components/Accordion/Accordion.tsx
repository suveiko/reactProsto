import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callBack: (collapsed: boolean) => void
    items: string[]
}

export function Accordion({titleValue, collapsed, callBack, items}: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={titleValue} onClick={() => callBack(!collapsed)}/>
            {!collapsed && <AccordionBody items={items}/>}
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
        <h3 onClick={onClick}>   ----{title}----  </h3>
    )
}

type AccordionBodyType = {
    items: string[]
}

function AccordionBody({items}:AccordionBodyType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {items.map((i, index) =>
                <li key={index}>{i}</li>
            )}
        </ul>
    )
}

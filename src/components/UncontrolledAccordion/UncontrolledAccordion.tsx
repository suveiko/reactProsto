import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}


export function UncontrolledAccordionSecret({titleValue}: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)
    const onClickToggleHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={titleValue} onClickToggleHandler={onClickToggleHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)

type AccordionTitlePropsType = {
    title: string
    onClickToggleHandler: () => void
}

function AccordionTitleSecret({title, onClickToggleHandler}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={onClickToggleHandler}> --{title}-- </h3>
    )
}

const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

const AccordionBody = React.memo(AccordionBodySecret)

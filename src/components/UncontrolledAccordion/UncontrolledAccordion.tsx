import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}



export function UncontrolledAccordion({titleValue}: AccordionPropsType) {

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



type AccordionTitlePropsType = {
    title: string
    onClickToggleHandler: () => void
}

function AccordionTitle({title, onClickToggleHandler}: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={onClickToggleHandler}> --{title}-- </h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

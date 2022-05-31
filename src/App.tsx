import React, {useState} from 'react';
import './App.css';
import {OnOffUncontrolled} from "./components/OnOffUncontrolled/OnOffUncontrolled";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false)

    return (
        <div className='App'>
            <OnOffUncontrolled callBack={setOn}/> {on.toString()}
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue} />
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} callBack={setAccordionCollapsed}/>
            <OnOff value={on} setOn={setOn}/>
        </div>
    );
}

export default App;

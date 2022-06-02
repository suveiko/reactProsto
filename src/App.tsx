import React, {useState} from 'react';
import './App.css';
import {OnOffUncontrolled} from "./components/OnOffUncontrolled/OnOffUncontrolled";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {OnOff} from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false)

    return (
        <div className='App'>
            <OnOffUncontrolled callBack={setOn}/> {on.toString()}
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue} />
            <OnOff value={on} setOn={setOn}/>
        </div>
    );
}

export default App;

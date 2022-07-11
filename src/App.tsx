import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {OnOff} from "./components/OnOff/OnOff";
import {Clock} from "./components/Clock/Clock";


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [on, setOn] = useState<boolean>(false)

    return (
        <div className='App'>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <OnOff value={on} setOn={setOn}/>
            <hr/>
            <Clock/>
        </div>
    );
}

export default App;

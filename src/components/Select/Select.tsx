import {useState} from "react";

import s from './Select.module.css'

export function Select() {

    const popupList = ['Sasha', 'Artem', 'Max', 'Bob']
    const [isVisible, setIsVisible] = useState(true)
    const [popupType, setPopupType] = useState(0)

    const onClickLi = (i: number) => {
        setPopupType(i)
        setIsVisible(false)
    }

    return (
        <div className={s.wrapperContainer}>
                <div className={s.wrapper} onClick={() => setIsVisible(!isVisible)}>
                    {popupList[popupType]}
                    {isVisible ? <img
                        className={s.arrowBottom}
                        src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                        alt=""
                    /> : <img
                        className={s.arrowRight}
                        src="https://cdn-icons.flaticon.com/png/512/2989/premium/2989988.png?token=exp=1655016341~hmac=d3be35ddf134984234db314a3635914b"
                        alt=""
                    /> }
                </div>
            {isVisible && <div className={s.popupContainer}>
                <div>
                    {popupList.map((p, i) => {
                        return (
                            <div className={s.popupList} key={i} onClick={() => onClickLi(i)}>
                                {p}
                            </div>
                        )
                    })}
                </div>
            </div>}
        </div>
    )
}

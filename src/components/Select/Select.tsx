import {useState, KeyboardEvent, useEffect} from "react";

import s from './Select.module.css'

type ItemType = {
    value: any
    title: string
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select({value, items, onChange}: SelectPropsType) {

    const [isVisible, setIsVisible] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])

    const toggleItem = () => {
        setIsVisible(!isVisible)
    }
    const onItemClick = (value: string) => {
        onChange(value)
        toggleItem()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretenderElement = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]
                    pretenderElement && onChange(pretenderElement.value)
                    return
                }
            }
            !selectedItem && onChange(items[0].value)
        }

        if (e.key === 'Enter' || e.key === 'Esc') {
            setIsVisible(false)
        }
    }

    return (
        <div
            className={s.select}
            tabIndex={0}
            onKeyUp={onKeyUp}
        >
            <span
                onClick={toggleItem}
                className={s.main}
            >
                {selectedItem && selectedItem.title}
                {isVisible ? <img
                    className={s.arrowBottom}
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    alt=""
                /> : <img
                    className={s.arrowRight}
                    src="https://cdn-icons.flaticon.com/png/512/2989/premium/2989988.png?token=exp=1655016341~hmac=d3be35ddf134984234db314a3635914b"
                    alt=""
                />}
            </span>
            {
                isVisible &&
                <div className={s.items}>
                    {items.map(i => <div
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        className={`${s.item} ${hoveredItem === i && s.selected}`}
                        key={i.value}
                        onClick={() => onItemClick(i.value)}
                    >
                        {i.title}
                    </div>)}
                </div>
            }
        </div>
    )
}

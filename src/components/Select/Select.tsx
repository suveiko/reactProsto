import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select({value, onChange, items}: SelectType) {
    return (
        <div>
            <div>{value}</div>
            {items.map((i, index) => {
                return (
                    <div onClick={onChange}>{i.title}</div>
                )
            })}
        </div>
    )
}

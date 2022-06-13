import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA;
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i

        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('Users Secret')
    return <div>{
        props.users.map((u, i) => (
            <div key={i}>{u}</div>
        ))}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(
        ['Sasha', 'Anton', 'Bob']
    )
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes('a'))
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>

}
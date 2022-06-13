import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('Users')
    return <div>{
        props.users.map((u, i) => (
            <div key={i}>{u}</div>
        ))}
    </div>
}

const Users = React.memo(UsersSecret)

export const ExampleOne = () => {
    console.log('Example')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(
        ['Sasha', 'Anton', 'Bob']
    )

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>

}
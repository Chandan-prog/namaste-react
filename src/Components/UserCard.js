import { useState } from "react";
export default function UserCard(props)
{
    const [count1] = useState(0);
    const [count2] = useState(2)
    return(<div className="user-card">
        <h1>Count1: {count1}</h1>
        <h1>Count2: {count2}</h1>
        <h2>name: {props.name}</h2>
        <h2>location: {props.location}</h2>
    </div>)
}
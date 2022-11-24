import { useSelector } from "react-redux"

export default function UsersList() {
const users = useSelector(state => state.users)

    return (
    <ul>
        {users.map((user,key) => <li key={key}>{user}</li>)}
    </ul>
    )
}
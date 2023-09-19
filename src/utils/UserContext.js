import { createContext } from "react";

const UserContext = createContext({
    loggedInData: 'default User',
})

export default UserContext;
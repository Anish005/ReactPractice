import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        // to make the below work data must be given to the provider 
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;
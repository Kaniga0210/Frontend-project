import React, { useContext } from "react";
import UserContext from "./Context";

function Profile() {
    const user = useContext(UserContext);
    return (
        <div>
            Profile Page
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Phone: {user.phone}</p>
            <p>Message: {user.message}</p>
        </div>
    );
}

export default Profile;
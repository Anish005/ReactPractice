import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
    return(
        <div className="bg-gray-600 text-white text-3xl p-4">
            {/* the userid params in the main.jsx will get the access here , make sure you kept the name same */}
            User:{userid}
        </div>
    )
}
export default User
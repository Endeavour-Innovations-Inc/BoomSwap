import React from "react";
import "./ParamCard.css"
import Route from "./components/Route";

const ParamCard = () => {
    return (
        <div className="param">
            <Route marginTop="10px" name="Custom Route" resultString="ABC - XYZ" />
            <Route marginTop="0px" name="Custom Route" resultString="ABC - XYZ" />
            <Route marginTop="0px" name="Custom Route" resultString="ABC - XYZ" />
            <Route marginTop="0px" name="Custom Route" resultString="ABC - XYZ" />
        </div>
    )
}

export default ParamCard
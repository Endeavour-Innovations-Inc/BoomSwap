import React from "react";
import "./ParamCard.css"
import Route from "./components/Route";

const ParamCard = () => {
    return (
        <div className="param">
            <Route marginTop="14px" name="Minimum Received" resultString="19.74 SVN" />
            <Route marginTop="0px" name="Price Impact" resultString="<0.01%" />
            <Route marginTop="0px" name="Liquidity Provider Fee" resultString="0.0033 CRO" />
            <Route marginTop="0px" name="Route" resultString="CRO > BOOM" />
        </div>
    )
}

export default ParamCard
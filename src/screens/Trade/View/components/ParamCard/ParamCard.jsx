import React from "react";
import "./ParamCard.css"
import Route from "./components/Route";

const ParamCard = ({ swapDetails }) => {
    return (
        <div className="param">
          <Route marginTop="14px" name="Minimum Received" resultString={swapDetails.minimumReceived} />
          <Route marginTop="0px" name="Price Impact" resultString={swapDetails.priceImpact} />
          <Route marginTop="0px" name="Liquidity Provider Fee" resultString={swapDetails.liquidityProviderFee} />
          <Route marginTop="0px" name="Route" resultString={swapDetails.route} />
        </div>
    );
}

export default ParamCard
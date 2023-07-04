import React from "react";
import { Button } from "react-bootstrap";
import AppContext from "../context/AppContext";
import EnumViewType from "../content/EnumViewType";

const Welcome = () => {

    const {setViewType} = React.useContext(AppContext);

    return  <>
                <h1>Bienvenue</h1>
                <Button className="StartButton" onClick={() => setViewType(EnumViewType.SUBSCRIPTIONS)}>
                    Commencer
                </Button>
            </>

}

export default Welcome;
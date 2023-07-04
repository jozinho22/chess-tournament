import React from "react";
import { Container, Button } from "react-bootstrap";

import { ChevronLeft, ArrowRepeat, PlayFill, PauseFill, Check2 } from "react-bootstrap-icons";
import EnumButtonType from "../content/EnumButtonType";
import SideButton from "../SideButton";

const GameDisplayer = ( {gameTypes, user, setUser, setInGame} ) => {

    const [running, setRunning] = React.useState(false);
 
    React.useEffect(() => {
        
    }, [])

    React.useEffect(() => {
        init();
    }, [])

    const init = () => {
        
    }

    const goBack = () => {
        setInGame(false);
    }

    return  <>
                
                    <Container className="LeftButtonsContainer">
                        <SideButton action={goBack} icon={<ChevronLeft />} type={EnumButtonType.RETURN} title={"Go back"} />
                     </Container>
            </>
            
                

}

export default GameDisplayer;
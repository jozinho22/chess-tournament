import React from "react";
import { Container } from "react-bootstrap";
import SubscriptionsDisplayer from "./views/SubscriptionsDisplayer";
import GameDisplayer from "./views/GameDisplayer";
import EnumViewType from "./content/EnumViewType";
import Welcome from "./views/Welcome";
import PlayersEdit from "./views/PlayersEdit";
import AppContext from "./context/AppContext";

import SideButton from "./SideButton";
import { ChevronLeft } from "react-bootstrap-icons";
import EnumButtonType from "./content/EnumButtonType";

const AppManager = () => {

    const [user, setUser] = React.useState({});

    const [players, setPlayers] = React.useState([]);

    const {viewType, setViewType} = React.useContext(AppContext);

    const goBack = () => {
        if(viewType === EnumViewType.SUBSCRIPTIONS) {
            setViewType(EnumViewType.WELCOME)
        } else if(viewType === EnumViewType.PLAYERS_EDIT || viewType === EnumViewType.GAME) {
            setViewType(EnumViewType.SUBSCRIPTIONS)
        }
    }

    return  <>
                {
                    viewType === EnumViewType.WELCOME ? 
                        <Welcome />

                            :   viewType === EnumViewType.SUBSCRIPTIONS ?
                                    <SubscriptionsDisplayer 
                                        players={players} 
                                        setPlayers={setPlayers} />

                                                :   viewType === EnumViewType.PLAYERS_EDIT ? 
                                                        <PlayersEdit players={players} setPlayers={setPlayers} />
                                                            
                                                            :   viewType === EnumViewType.GAME ? 
                                                                        <GameDisplayer />
                                                                                :   <></>
                                
                }
                {
                    viewType !== EnumViewType.WELCOME ?
                        <Container className="LeftButtonsContainer">
                            <SideButton action={goBack} icon={<ChevronLeft />} type={EnumButtonType.RETURN} title={"Go back"} />
                        </Container>
                            : <></>
                }   
                
            </>

}

export default AppManager;
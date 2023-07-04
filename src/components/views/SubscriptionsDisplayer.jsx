import React from 'react';
import { Container, Button } from 'react-bootstrap';
import EnumViewType from "../content/EnumViewType";
import CustomInput from '../CustomInput';
import AppContext from '../context/AppContext';
import {PlusCircle, Pencil} from 'react-bootstrap-icons'

const SubscriptionsDisplayer = ( {players, setPlayers} ) => {

    const [addPlayerOk, setAddPlayerOk] = React.useState(false);
    
    const [player, setPlayer] = React.useState({});
    const [id, setId] = React.useState(0);

    const [gameOk, setGameOk] = React.useState(false);

    const {setViewType} = React.useContext(AppContext);

    var width = document.body.offsetWidth;


    const processGame = () => {
        /* if(gameOk) {
            var u = {...user};
            u.choices.push(0);
            setUser(u);
            next();
        } */
    }

    const addPlayer = () => {
        if(addPlayerOk) {
            players.push({id: id, ...player});
            setPlayers(players)
            setId(id + 1)
        }
    }

    const displayPlayers = () => {
        setViewType(EnumViewType.PLAYERS_EDIT);
    }

    return  <>
                <Container className="SubscriptionsDisplayerContainer">
                    <h1>Inscriptions </h1>
                    
                    <div className="SubscriptionsContainer">
                         <>
                            <CustomInput setAddPlayerOk={setAddPlayerOk} addPlayer={addPlayer} displayPlayers={displayPlayers} setPlayer={setPlayer} players={players} processGame={processGame} />
                            <div className="PlayerButton">
                                <Button className="AddPlayerButton" onClick={addPlayer}>
                                    <PlusCircle /> {width > 450 ? "Ajouter le joueur" : ""}
                                </Button>
                                <Button className="EditPlayersButton" onClick={displayPlayers}>
                                    <Pencil /> {width > 450 ? "Modifier les joueurs" : ""}
                                </Button>
                            </div>
                    
                            <Button className="StartButton" onClick={() => setViewType(EnumViewType.GAME)}>
                                Débuter le tournoi
                            </Button>

                            <div className="PlayersList">
                                Joueurs [{players.length}]: 
                                {
                                    players.map((p, index) => {
                                        return <p key={index}> {p.pseudo} ({p.elo}) {index === players.length - 1 ? '' : ', '}</p>
                                    })
                                }
                            </div>
                        </>
                    </div>
                </Container>
            </>

}

export default SubscriptionsDisplayer;
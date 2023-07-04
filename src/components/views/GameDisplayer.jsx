import React from "react";
import { Container, Button } from "react-bootstrap";
import PlayersTable from "../content/PlayersTable";

import SideButton from "../SideButton";
import { ChevronLeft, ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import EnumButtonType from "../content/EnumButtonType";
import AppContext from '../context/AppContext';
import EnumViewType from "../content/EnumViewType";
import PlayersRoundTable from "../content/PlayersRoundTable";

const GameDisplayer = ( {players} ) => {

    const [running, setRunning] = React.useState(false);
    const [meets, setMeets] = React.useState([]);
    const [round, setRound] = React.useState(0);

    const {setViewType} = React.useContext(AppContext);
    var width = document.body.offsetWidth;
    
    React.useEffect(() => {
       
    }, [])

   
    console.log("running : " + running)
    console.log("round : " + round)
    console.log("meets : ")
    console.log(meets)

    const getMeets = (round) => {

        let meetsCopy = [...meets]

         console.log("round in getMeets : " + round)

        let sorted = players.sort((a, b) => a.elo - b.elo)
        console.log("sorted", sorted)
        if(players.length % 2 !== 0) {
            let notPlaying = Math.floor(Math.random() * players.length);
            console.log("not :" + notPlaying)
            sorted.filter(p => p.id !== notPlaying)
        }
        let meetsTemp = []
        let meetTemp = {}
        for(let player of sorted) {
            if(player.id % 2 === 0) {
                meetTemp.whites = player;
            } else {
                meetTemp.blacks = player;
                meetsTemp.push(meetTemp)
                meetTemp = {}
            }
        }

        meetsCopy[round] = meetsTemp;
        setMeets(meetsCopy);
    }

    const start = () => {
        getMeets(round)
        setRunning(true)
    }

    const nextRound = () => {
        getMeets(round + 1)
        setRound(round + 1)
    }

    const prevRound = () => {
        if(round !== 0) setRound(round - 1)
    }

    const goBack = () => {
        if(running) {
            let sign = prompt("Êtes vous sûr ? Toutes les données seront perdues. Tapez 'yes' pour confirmer")
            if(sign.toLocaleLowerCase() === "yes") {
                /* setRunning(false)
                setTournament({}) */
                setViewType(EnumViewType.SUBSCRIPTIONS)
            }
        } else {
            setViewType(EnumViewType.SUBSCRIPTIONS)
        }
        
    }

    return  <>
                {
                    !running ?
                        <>
                            <h1>Tournoi</h1>
                            <PlayersTable players={players} />
                            <Button className="StartButton" onClick={start}>
                                Débuter
                            </Button>    
                        </>
                            :   <>
                                    <h1>Round {round + 1}</h1>
                                    <h2>Cliquez sur le vainqueur</h2>
                                    <PlayersRoundTable meets={meets[round]} />

                                    <div className="AlignedButton">
                                        <Button className="StartButton" onClick={prevRound}>
                                            <ArrowLeft /> {width > 450 ? "Ajouter le joueur" : ""}
                                        </Button>
                                        <Button className="StartButton" onClick={nextRound}>
                                            <ArrowRight /> {width > 450 ? "Ajouter le joueur" : ""}
                                        </Button>
                                    </div>
                                </>
                }
                {
                    <Container className="LeftButtonsContainer">
                        <SideButton action={goBack} icon={<ChevronLeft />} type={EnumButtonType.RETURN} title={"Go back"} />
                    </Container>
                }
                
            </>

}

export default GameDisplayer;
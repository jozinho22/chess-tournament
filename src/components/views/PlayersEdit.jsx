import PlayersEditTable
 from "../content/PlayersEditTable";
const PlayersEdit = ({players, setPlayers}) => {

    const deletePlayer = (id) => {
        let playersCopy = [...players];
        playersCopy.splice(playersCopy.indexOf(playersCopy.find(p => p.id === id)),  1);
        setPlayers(playersCopy)
    }

    const deleteAllPlayers = () => {
        let playersCopy = [...players];
        playersCopy.splice(0, playersCopy.length);
        setPlayers(playersCopy)
    }

    return  <>
                <h1>Modifier les joueurs </h1>
                <PlayersEditTable players={players} deletePlayer={deletePlayer} deleteAllPlayers={deleteAllPlayers} />    
            </>

}

export default PlayersEdit;
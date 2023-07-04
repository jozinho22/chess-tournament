import PlayersEditTable
 from "../content/PlayersEditTable";
const PlayersEdit = ({players, setPlayers}) => {

    const deletePlayer = (id) => {
        let playersCopy = [...players];
        playersCopy.splice(playersCopy.indexOf(playersCopy.find(p => p.id === id)),  1);
        setPlayers(playersCopy)
    }

    return  <>
                <h1>Modifier les joueurs </h1>
                <PlayersEditTable players={players} deletePlayer={deletePlayer} />    
            </>

}

export default PlayersEdit;
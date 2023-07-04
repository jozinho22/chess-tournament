import NiceTable from "./NiceTable";
import { Button } from "react-bootstrap";
import {XCircle} from 'react-bootstrap-icons'

const PlayersEditTable = ( {players, deletePlayer, deleteAllPlayers} ) => {
  
    return  <>
                <NiceTable> 
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Joueur
                            </th>
                            <th>
                                Elo
                            </th>
                            <th>
                                (sup)
                            </th>
                        </tr>
                    </thead>
                    <tbody> 
                        {players.map( (player, index) => (
                            <tr key={index}>
                                <td>
                                    {player.id} 
                                </td>
                                <td>
                                    {player.pseudo} 
                                </td>
                                <td>
                                    {player.elo} 
                                </td>
                                <td>
                                    <XCircle className="Clickable" onClick={() => deletePlayer(player.id)} />
                                </td>
                            </tr>  
                        ))}
                        {
                            players && players.length === 0 ?
                                <tr>
                                    Pas de joueurs
                                </tr>
                                    :   <></>
                        }
                    </tbody>
                    
                </NiceTable> 
                <Button className="EditPlayersButton" onClick={deleteAllPlayers}>
                    Tout supprimer
                </Button>
            </>
}

export default PlayersEditTable;
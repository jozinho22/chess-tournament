import NiceTable from "./NiceTable";
import { Button } from "react-bootstrap";
import {XCircle} from 'react-bootstrap-icons'

const PlayersTable = ( {players} ) => {
  
    return  <NiceTable> 
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
                            
                        </tr>  
                     ))}
                </tbody>
            </NiceTable> 
}

export default PlayersTable;
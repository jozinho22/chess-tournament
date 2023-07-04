import NiceTable from "./NiceTable";

const PlayersRoundTable = ( {meets} ) => {
  
    return  <NiceTable> 
                <thead>
                    <tr>
                        <th>
                            Blancs
                        </th>
                        <th>
                            Noirs
                        </th>
                    </tr>
                </thead>
                <tbody> 
                    {meets.map( (meet, index) => (
                        <tr key={index}>
                            <td>
                                {meet.whites.pseudo} 
                            </td>
                            <td>
                                {meet.blacks.pseudo} 
                            </td>
                        </tr>  
                     ))}
                </tbody>
            </NiceTable> 
}

export default PlayersRoundTable;
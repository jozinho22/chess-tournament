import React from 'react';
import {Container, InputGroup, Form, Button} from 'react-bootstrap';
import getMessagesOfCustomInput from './content/getMessagesOfCustomInput';

const CustomInput = ( props ) => {

    const [messages, setMessages] = React.useState(getMessagesOfCustomInput());
    const [messageToDisplay, setMessageToDisplay] = React.useState("");
    
    const [pseudo, setPseudo] = React.useState("Gros noob");
    const [elo, setElo] = React.useState(400);


    React.useEffect(() => {
        let messageToDisplaySlice = {...messageToDisplay};

        let n = 0;
        if(isNaN(parseInt(elo))) {
            console.log(parseInt(elo))
            messageToDisplaySlice = messages[0].text;    
        } else if(elo < 350) {
            messageToDisplaySlice = messages[1].text;    
        } else if(elo > 2700) {
            messageToDisplaySlice = messages[2].text;    
        } else if(pseudo.length < 3 || pseudo.length > 15) {
            messageToDisplaySlice = messages[3].text;    
        }

        setMessageToDisplay(messageToDisplaySlice)

    }, [elo, pseudo]);

    React.useEffect(() => {
        if(messageToDisplay.length > 0) {
            props.setAddPlayerOk(false);
        } else {
            props.setAddPlayerOk(true);
            props.setPlayer(
                {
                    pseudo: pseudo,
                    elo: elo
                }
            )
        }
    }, [elo, pseudo, messageToDisplay]); 

    return  <>
                <Container className="CustomInputContainer">
                    <InputGroup className="CustomInputGroup mb-3">
                        <InputGroup.Text className="CustomInputTitle" id="basic-addon1">pseudo</InputGroup.Text>
                        <Form.Control
                            className="CustomInput"
                            aria-label="pseudo"
                            aria-describedby="basic-addon1"
                            value={pseudo} 
                            onChange={e => {
                                setPseudo(e.target.value)
                            }}
                        />
                    </InputGroup>
                    <InputGroup className="CustomInputGroup mb-3">
                        <InputGroup.Text className="CustomInputTitle" id="basic-addon1">Elo</InputGroup.Text>
                        <Form.Control
                            type="number"
                            className="CustomInput"
                            aria-label="elo"
                            aria-describedby="basic-addon1"
                            value={elo} 
                            onChange={e => {
                                setElo(e.target.value)
                            }}
                        />
                    </InputGroup>
                    
                    <hr />
                    
                </Container>
                <Container className="CustomInputAlert">
                    {
                        messageToDisplay.length > 0 ?
                             <p>{messageToDisplay}</p>
                                : <></>
                    }
                </Container> 
            </>

}

export default CustomInput;
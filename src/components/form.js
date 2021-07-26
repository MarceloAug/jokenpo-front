import React, { Component } from 'react';
import { Row, Col, Container} from 'reactstrap'; 
import { Form,FormGroup, Label, Input, Button } from 'reactstrap';
import { ToastContainer,toast} from 'react-toastify';



export default class Formulario extends Component {

    constructor(props){
        super(props);

        this.state = {
            jokenpo:{
                playerOne:"",
                playerTwo:"",
                
            },
        }
    }


    handleImputChange = event =>{
        
        const {value,name} = event.target;
        this.setState(prevState =>({
            jokenpo:{...prevState.jokenpo,[name]:value}
        }));
    }


    ///dispara para api 
    handleSubmit = event =>{

        fetch("http://localhost:3001/jokenpo",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
          
            body:JSON.stringify(this.state.jokenpo)
         
        })
        .then(response => response.json())
        .then(response => {
            toast.success(response.message);
        })
        event.preventDefault();
    
    }

    render(){
        return(
            <div>
                <ToastContainer />
                <Container>
                    <Row>
                        <Form  onSubmit={this.handleSubmit}>
                            <Col  md = "4">
                                <FormGroup>
                                    <Label for="playerone">Jogador 1</Label>
                                    <Input type="select" name="playerOne" id="playerone" onChange={this.handleImputChange} required >
                                        <option value="">Selecione</option>
                                        <option value="pedra">Pedra</option>
                                        <option value="papel">Papel</option>
                                        <option value="tesoura">Tesoura</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md = "4" >
                                <FormGroup>
                                    <Label for="playerone">Jogador 1</Label>
                                    <Input type="select" name="playerTwo" id="playertwo" onChange={this.handleImputChange} required >
                                        <option value="">Selecione</option>
                                        <option value="pedra">Pedra</option>
                                        <option value="papel">Papel</option>
                                        <option value="tesoura">Tesoura</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md = "12">
                                <Button>Jogar</Button>
                            </Col>
                        </Form>
                    </Row>
                </Container>
            </div>
        );
    }
}
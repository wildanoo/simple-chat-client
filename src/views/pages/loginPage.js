import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


import {
  Jumbotron,
  Input,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Button,
} from 'reactstrap';

const LoginPage = (props) => {
  const [roomName, setRoomName] = useState('');
  const [userName, setUserName] = useState('');

  let history = useHistory();

  const handleName = (e) => {
    setUserName(e.target.value);
  }
  const handleRoom = (e) => {
    setRoomName(e.target.value);
  }

  const handleSubmit = () => {
    if(roomName&& userName){
      history.push(`/${roomName}/${userName}`);
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Simple Chat App</h1>
                  <p className="lead">Login and enter room</p>
                  <hr className="my-2" />
                </Jumbotron>
                <Col md={{ size: 6, offset: 3 }}>
                  <Input placeholder="Your name" type='text' value={userName} onChange={handleName} className='loginInput' />
                  <Input placeholder="Room name" type='text' value={roomName} onChange={handleRoom} className='loginInput' />
                  <Button color='success' className='enterRoomButton' onClick={handleSubmit}>Join room</Button>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
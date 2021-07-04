import React, { useState, useEffect, useRef } from 'react';

import useChat from '../../utils/useChat';
import Conversation from '../components/conversation';

import {
  Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from 'reactstrap';

const MainPage = (props) => {
  const { roomId, userName } = props.match.params;
  const { messages, sendMessages } = useChat(roomId, userName);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (data) => {
    setNewMessage(data.target.value)
  }

  const handleSendMessage = () => {
    sendMessages(newMessage);
    setNewMessage('')
  }

  return (
    <div>
      <Container>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <Card>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Simple Chat App</h1>
                  <p className="lead">This is a simple Chat App.</p>
                  <hr className="my-2" />
                </Jumbotron>
                <Conversation
                  roomId={roomId}
                  newMessage={newMessage}
                  messages={messages}
                  handleMessageChange={handleMessageChange}
                  handleSendMessage={handleSendMessage}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
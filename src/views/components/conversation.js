import React from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from 'reactstrap';

const Conversation = ({ newMessage, messages, handleMessageChange, handleSendMessage }) => {
  return (
    <>
      <div>
        <h3>Chat Box</h3>
        <div className='chatBox'>
          {messages.length > 0 &&
            messages.map((val, i) => {
              return (
                <div key={i}>
                  <div key={i} className={val.ownedByCurrentUser ? 'chatBlockSelf' : 'chatBlock'}>
                    <div className='chatBaloon'>
                      <div><b>{val.body.userName}</b></div>
                      <span>{val.body.messageBody}</span>
                    </div>
                  </div>
                </div>)
            })
          }
        </div>
        <div className='chatInput'>
          <InputGroup>
            <Input placeholder="Type here to chat" type='text' onChange={handleMessageChange} value={newMessage}
            />
            <InputGroupAddon addonType="append">
              <Button color="primary" onClick={handleSendMessage} type='submit'>Send</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </>
  );

}

export default Conversation;

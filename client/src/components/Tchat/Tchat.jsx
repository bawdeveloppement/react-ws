import React, { Component } from "react";
import MessageList from "./MessageList";
import TchatBottombar from "./TchatBottomBar";
import Navbar from "../Nav/Navbar";
import TchatNavbar from "./TchatNavbar";

import { ConquestContextConsumer } from "../../lib/Conquest";

const Tchat = props => {
  return <ConquestContextConsumer children={
    <div>Hello</div>
  }>
  </ConquestContextConsumer>
}

/*
class Tchat extends Component {
    constructor (props)
    {
        super(props);
        this.state =  {
          msgText : "test",
          msgList : [],
          config: {
            maxLastMsg: 10
          }
        }
        this.msgFieldRef = React.createRef();
    }

    msgFieldChange = ({ target }) => {
      const msg = target.value;
      this.setState((prevState, props) => {
          return {
              msgText : msg
          }
      });
    }

    writeMessage = (tempMsg) => {
      this.setState((prevState, props) => ({ 
          msgList: [
            ...this.state.msgList, tempMsg
          ]
        })
      );
    }

    sendMessage = (socket, msgText) => {
      let tempMsg = { 
        owner: this.props.user.name, 
        text: msgText, 
        when: Date.now()
      }
      socket.send(tempMsg);
      this.writeMessage(tempMsg)
    }
    
    handleProfilClick = user_id => {
      console.log(user_id)
    }
    
    componentDidMount = () => {
      console.log(this.props);
    }

    componentDidUpdate = () => {
        console.log(this.state);
    }

    render ()
    {
      const { msgList }  = this.state;
        return <div className="bg-white flex flex-1 flex-col">
          <TchatNavbar></TchatNavbar>
          <div className="flex flex-1 flex-col h-full pt-2 bg-gray-100">
            
            <ConquestContextConsumer>
              {({event_messages}) => <MessageList
                  data={{ msgList : event_messages}} 
                  config={this.state.config}
                  events={{ handleProfilClick: this.handleProfilClick }}
                />
              }
            </ConquestContextConsumer>
            

            {/* Bottom bar : Send message & Files */
            /*<TchatBottombar events={{
              handleSendMessage : this.sendMessage
            }}/>
          </div>
        </div>
          }
    }
}
*/

export default Tchat;
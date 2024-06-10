import React from 'react'
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from '../components/miscellaneous/SideDrawer'
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';
import { useState } from 'react';

const { Box } = require("@chakra-ui/react")

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const {user} =ChatState();
  
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" width="100%" height="91.5vh" padding="10px">
      {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};


export default ChatPage

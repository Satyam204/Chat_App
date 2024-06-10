import React from 'react'
import { ChatState } from '../Context/ChatProvider';
import { Box, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getSender,getSenderFull} from "../config/ChatLogics";
import ProfileModal from "./miscellaneous/ProfileModal";

const SingleChat = (fetchAgain) => {
    const { selectedChat, setSelectedChat, user} =
    ChatState();
  
    return (
        <>
        {selectedChat ? (
            <>
             <Text
            fontSize={{ base: "28px", md: "30px" }}
            padding={3}
            px={2}
            width="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
              <>
                  {getSender(user, selectedChat.users)}
                  <ProfileModal
                    user={getSenderFull(user, selectedChat.users)}
                  />
                </>
            </Text>
            </>
        ):(
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          <Text fontSize="3xl" padding={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
        )

        }
        </>
  )
}

export default SingleChat

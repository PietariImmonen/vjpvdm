import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botname: "RokoteBot",
    initialMessages: [createChatBotMessage(`Hello`)],
    customStyles: {
        botMessageBox: {
            backgroundColor: '#2D3142',
        },
        chatButton: {
            backgroundColor: '#2C98A0',
          },
    }
}

export default config
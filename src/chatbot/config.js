import { createChatBotMessage } from "react-chatbot-kit";

const config = {

    //Creating the first message of chatbot and also Bg Color of sent message from bot and chatButton
    botname: "RokoteBot",
    initialMessages: [createChatBotMessage(`Heippa, kysy minulta "Mikä on rokote?" tai "Mitä hyötyä rokotteista?". Osaan puhua seuraavista aiheista: rokote, lastentaudit, infektio, haittavaikutus, hyöty, immuniteetti, lisäinfoa.`)],
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
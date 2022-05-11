class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   greet = () => {
     const message = this.createChatBotMessage("https://www.figma.com/file/ew9jmHa8nZIy8XECnZtr3A/Jutellaan-Rokotteista?node-id=0%3A1");
     this.addChatbotMessageToState(message);
   }

   vaccine = () => {
       const message = this.createChatBotMessage("Tälläistä tietoa on rokotteista blää blää blää");
       this.addChatbotMessageToState(message);
   }

   addChatbotMessageToState = (message) => {
     this.setState(prevState => ({
         ...prevState,
         messages: [...prevState.messages, message]
     }));
   }

 }
 
 export default ActionProvider;
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()

      if(lowercase.includes("rokote")) {
        this.actionProvider.vaccine();
      }

      if(lowercase.includes("lastentaudit")) {
        this.actionProvider.disease();
      }

      if(lowercase.includes("infektio")) {
        this.actionProvider.infection();
      }

      if(lowercase.includes("haittavaikutus")) {
        this.actionProvider.harm();
      }

      if(lowercase.includes("hyöty")) {
        this.actionProvider.plus();
      }

      if(lowercase.includes("immuniteetti")) {
        this.actionProvider.immune();
      }

      if(lowercase.includes("lisäinfoa")) {
        this.actionProvider.info();
      }

    }
  }
  
  export default MessageParser;
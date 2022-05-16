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
       const message = this.createChatBotMessage("Rokote on lääkevalmiste, jonka tarkoitus on stimuloida immuunijärjestelmää puolustautumaan bakteereita ja viruksia vastaan. Tyypillisesti rokote sisältää heikennettyä tai tapettua muotoa bakteerista tai viruksesta, joilla saadaan aktivoitua immuunisoluja tuhoamaan tautia. Mikäli rokotettu altistuu samalle bakteerille tai virukselle uudelleen immuunijärjestelmä muistaa taudinaiheuttajan ja osaa torjua taudin tehokkaasti. ");
       this.addChatbotMessageToState(message);
   }

   disease = () => {
    const message = this.createChatBotMessage("Yleisempiä lastentauteja ovat hengitystieinfektiot, rokot ja ripulitaudit. Suomessa on tarjolla lapsille ja nuorille 13 eri rokotetta, jotka tarjoavat suojaa yleisimmiltä taudeilta. Vastustuskykyä tarjotaan muun muassa vesirokolta, keuhkokuumeelta ja kurkkumädältä. ");
    this.addChatbotMessageToState(message);
  }

  infection = () => {
    const message = this.createChatBotMessage("Infektio on tartunta taudinaiheuttajien leviämisen seurauksena. Infektio tartunta tapahtuu kun bakteereita tai viruksia päätyy elimistöön. Tartuntataudit leviävät herkästi elimistöstä toiseen ilmateitse tai kosketuksen kautta. ");
    this.addChatbotMessageToState(message);
  }

  harm = () => {
    const message = this.createChatBotMessage("Kaikista rokotteista voi seurata haittavaikutuksia, mutta ne esiintyvät vain harvoilla rokotetuilla. Yleisempiä rokotteen aiheuttamia oireita ovat huonovointisuus, paikallinen kipu/turvotus sekä kuume. Lievät oireet menevät yleensä nopeasti ohi, mutta mikäli rokotteista jatkunut oireilu pitkittyy on välittömästi hakeuduttava lääkäriin. ");
    this.addChatbotMessageToState(message);
  }

  plus = () => {
    const message = this.createChatBotMessage("Rokotteiden avulla on päästy eroon monista vakavista taudeista. On arvioitu, että rokotteiden ansiosta vuosittain säästyy noin 2-3 miljoonan lapsen henki. Rokote suojaa itseään sekä ympärillä olevia, sillä riittävän rokote prosentin saavutettua voidaan puhua laumaimmuniteetista. Katso myös tarkemmin mikä on immuniteetti.");
    this.addChatbotMessageToState(message);
  }

  immune = () => {
    const message = this.createChatBotMessage("Immuniteetti eli elimistön vastustuskyky pitää sisällään kaikki kehon puolustus- ja suojajärjestelmät infektioita vastaan. Väestön vastustuskyvystä käytetään termiä laumaimmuniteetti, joka suojaa myös rokottamattomia yksilöitä, kun tartuntataudin leviämistä saadaan kuriin.");
    this.addChatbotMessageToState(message);
  }

  info = () => {
    const message = this.createChatBotMessage("Mikäli aihe jäi askarruttamaan yksityishenkilöt saavat neuvoa omasta terveyskeskuksesta, neuvolasta, työterveyshuollosta tai yksityiseltä lääkäriasemalta.");
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
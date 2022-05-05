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

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };

  showOptions = () => {
    const optionsMessage = this.createChatBotMessage(
      'Below list are the topics I can help you with.',
      {
        withAvatar: true,
        delay: 300,
        widget: 'options',
      },
    );

    this.addMessageToState(optionsMessage);
  };

  handleUnkownKeywords = () => {
    const message = this.createChatBotMessage(
      "I don't understand. Can you ask again using a few key words or choose from any of the topics below.",
      {
        withAvatar: true,
        delay: 300,
        widget: 'options',
      },
    );

    this.addMessageToState(message);
  };

  handleAdoptionProcessReply = (event = false) => {
    if (event.type === 'click') {
      const userMessage = this.createClientMessage('Adoption Process');

      this.addMessageToState(userMessage);
    }

    const botMmessage1 = this.createChatBotMessage(
      'Once you have matched with a pet that liked you back, the adoption process will be a personal transaction between you and the pet handler through our chat feature.',
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );

    this.addMessageToState(botMmessage1);

    const botMmessage2 = this.createChatBotMessage(
      'But here are some steps of what you can expect especially if the pet is from an animal shelter:',
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        delay: 800,
        widget: 'process',
      },
    );

    this.addMessageToState(botMmessage2);

    const botMmessage3 = this.createChatBotMessage(
      'The pet adoption steps mentioned above may differ because some may have an additional step or two that you need to go through to proceed with the adoption.',
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        delay: 800,
      },
    );

    this.addMessageToState(botMmessage3);
  };

  handlePaperworksReply = (event = false) => {
    if (event.type === 'click') {
      const userMessage = this.createClientMessage('Paperwork');

      this.addMessageToState(userMessage);
    }

    const botMmessage = this.createChatBotMessage(
      'The paperwork needed to adopt will be provided by the pet handler of your matched pet.',
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );

    this.addMessageToState(botMmessage);
  };

  handleRequirementsReply = (event = false) => {
    if (event.type === 'click') {
      const userMessage = this.createClientMessage('Requirements');

      this.addMessageToState(userMessage);
    }

    const botMmessage = this.createChatBotMessage(
      'Are you ready to adopt? Here are the basic requirements for you to be qualified:',
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
        widget: 'requirements',
      },
    );

    this.addMessageToState(botMmessage);

    const followUp = this.createChatBotMessage(
      'Take note that these are just the basic requirements and may vary, some pet owners may require more than what is on the given list.',
      {
        loading: true,
        terminateLoading: true,
        delay: 700,
        withAvatar: true,
      },
    );

    this.addMessageToState(followUp);
  };
}

export default ActionProvider;

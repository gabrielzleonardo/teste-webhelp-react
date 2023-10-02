const Data = {
  content: [
    {
      id: 1,
      type: "bannerOne",
      title: "Tenha a melhor experiência",
      loginFormData: {
        formLabel: "Tipo de perfil",
        formOptions: [
          {
            id: 1,
            formTitle: "Pessoa Física",
            formValue: "fisica",
            formFields: [
              {
                id: 1,
                fieldTitle: "CPF",
                fieldType: "text",
                placeholder: "000.000.000-00",
              },
              {
                id: 2,
                fieldTitle: "Data de nascimento",
                fieldType: "date",
                placeholder: "00/00/0000",
              },
            ],
          },
          {
            id: 2,
            formTitle: "Pessoa Jurídica",
            formValue: "juridica",
            formFields: [
              {
                id: 1,
                fieldTitle: "CNPJ",
                fieldType: "text",
                placeholder: "00.000.000/0000-00",
              },
              {
                id: 2,
                fieldTitle: "Inscrição estadual",
                fieldType: "text",
                placeholder: "Isento",
              },
            ],
          },
        ],
      },
    },
    {
      id: 2,
      type: "benefits",
      title: "Benefícios para ajudar você e sua empresa.",
      cards: [
        {
          cardLabel: "Negociação",
          cardImage: "/images/cards/benefits1.webp",
          cardtitle: "Negociação rápida e segura.",
        },
        {
          cardLabel: "Segunda via",
          cardImage: "/images/",
          cardtitle: "Consulta de débitos em atraso.",
        },
        {
          cardLabel: "Navegação",
          cardImage: "/images/",
        },
        {
          cardLabel: "Pagamento",
          cardImage: "/images/",
          cardtitle: "Seu pagamento, como preferir",
        },
      ],
    },
    {
      id: 3,
      type: "services",
      title: "Atendimento personalizado",
      label: "Diversos canais, para cada necessidade.",
      cards: [
        {
          cardLabel: "Agilidade onde estiver.",
          cardtitle: "Ligação",
          cardImage: "/images/",
        },
        {
          cardLabel: "Praticidade",
          cardtitle: "WhatsApp",
          cardImage: "/images/",
        },
        {
          cardLabel: "Mensagens de texto",
          cardtitle: "Chat online",
          cardImage: "/images/",
        },
      ],
    },
    {
      id: 4,
      type: "getStarted",
      title: "Comece agora!",
      label: "Veja como é fácil e seguro.",
      cards: [
        {
          id: 1,
          cardTitle: "Login",
          cardLabel: "Insira seus dados de acesso",
          cardImage: "/images/cardgetstarted1.webp",
        },
        {
          id: 2,
          cardTitle: "Token",
          cardLabel:
            "Insira o código recebido em seu celular ou e-mail cadastrado.",
          cardImage: "/images/cardgetstarted2.webp",
        },
        {
          id: 3,
          cardTitle: "Contrato",
          cardLabel: "Selecione o contrato que gostaria de negociar.",
          cardImage: "/images/Group8864.webp",
        },
        {
          id: 4,
          cardTitle: "Pronto",
          cardLabel: "Agora é só escolher a forma de pagamento.",
          cardImage: "/images/group.png",
        },
      ],
    },
    {
      id: 5,
      type: "faq",
      title: "Perguntas frequentes",
      label: "Tire suas duvidas.",
      questions: [
        {
          id: 1,
          questionTitle: "Quais débitos consigo consultar?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: 2,
          questionTitle: "Posso negociar todas as parcelas?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: 3,
          questionTitle: "Consigo informar que já fiz o pagamento?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: 4,
          questionTitle: "Qual o prazo para a baixa do pagamento?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: 5,
          questionTitle: "Este portal é seguro?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: 6,
          questionTitle: "Preciso pagar algum valor para acessar?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
      ],
    },
  ],
  footer: {
    aboutNav: {
      navTitle: "Sobre",
      navLinks: [
        { id: 1, title: "Quem somos", href: "#" },
        { id: 2, title: "Política de privacidade", href: "#" },
      ],
    },
    contactNav: {
      navTitle: "Fale com a gente",
      navLinks: [
        { id: 1, image: "/images/email.svg", href: "#" },
        { id: 2, image: "/images/whatsapp.svg", href: "#" },
        { id: 3, image: "/images/phone.svg", href: "#" },
        { id: 4, image: "/images/text.svg", href: "#" },
      ],
    },
    paymentMethods: {
      title: "Formas de pagamento",
      methods: [
        { id: 1, methodImage: "/images/Brand-PIX.webp" },
        { id: 2, methodImage: "/images/creditcard.svg" },
        { id: 3, methodImage: "/images/barcode.svg" },
        { id: 4, methodImage: "/images/gpay.svg" },
      ],
    },
  },
};

export default Data;

const Data = {
  content: [
    {
      id: 1,
      type: "bannerOne",
      title: "Tenha a melhor experiência",
      form: {
        formLabel: "Tipo de perfil",
        formOptions: [
          {
            formTitle: "Pessoa Física",
            formValue: "fisica",
            formFields: [
              {
                fieldTitle: "CPF",
                fieldType: "text",
                placeholder: "000.000.000-00",
              },
              {
                fieldTitle: "Data de nascimento",
                fieldType: "date",
                placeholder: "00/00/0000",
              },
            ],
          },
          {
            formTitle: "Pessoa Jurídica",
            formValue: "juridica",
            formFields: [
              {
                fieldTitle: "CNPJ",
                fieldType: "text",
                placeholder: "00.000.000/0000-00",
              },
              {
                fieldTitle: "Data de nascimento",
                fieldType: "date",
                placeholder: "00/00/0000",
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
          cardImage: "/images/",
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
      type: "get_started",
      title: "Comece agora!",
      label: "Veja como é fácil e seguro.",
      cards: [
        {
          cardtitle: "Login",
          cardLabel: "Insira seus dados de acesso",
          cardImage: "/images/",
        },
        {
          cardtitle: "Token",
          cardLabel:
            "Insira o código recebido em seu celular ou e-mail cadastrado.",
          cardImage: "/images/",
        },
        {
          cardtitle: "Contrato",
          cardLabel: "Selecione o contrato que gostaria de negociar.",
          cardImage: "/images/",
        },
        {
          cardtitle: "Pronto",
          cardLabel: "Agora é só escolher a forma de pagamento.",
          cardImage: "/images/",
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
          questionTitle: "Quais débitos consigo consultar?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          questionTitle: "Posso negociar todas as parcelas?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          questionTitle: "Consigo informar que já fiz o pagamento?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          questionTitle: "Qual o prazo para a baixa do pagamento?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          questionTitle: "Este portal é seguro?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          questionTitle: "Preciso pagar algum valor para acessar?",
          questionAnswer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
      ],
    },
  ],
  footer: {
    nav_about: {
      nav_title: "Sobre",
      nav_links: [
        { link_title: "Quem somos", link_href: "#" },
        { link_title: "Política de privacidade", link_href: "#" },
      ],
    },
    nav_contact: {
      nav_title: "Fale com a gente",
      nav_links: [
        { link_image: "/images/", link_href: "#" },
        { link_image: "/images/", link_href: "#" },
        { link_image: "/images/", link_href: "#" },
        { link_image: "/images/", link_href: "#" },
      ],
    },
    payment_methods: {
      title: "Formas de pagamento",
      methods: [
        { method_image: "/images/" },
        { method_image: "/images/" },
        { method_image: "/images/" },
        { method_image: "/images/" },
      ],
    },
  },
};

export default Data;

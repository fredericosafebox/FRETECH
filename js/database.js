// Banco de dados dos produtos
let data = [
  {
    id: 1,
    img: "../img/catalogo/cadeira1.png",
    nameItem: "Generic Gamer Chair - Model Phoenix",
    description:
      "Essa cadeira adciona ergonomia e performance às suas jogatinas diárias. Must Buy!",
    value: 890.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Cadeira"],
  },
  {
    id: 2,
    img: "../img/catalogo/cadeira2.png",
    nameItem: "Generic Gamer Chair - Model Dragon",
    description:
      "Uma cadeira gamer de qualidade, com selo de aprovação Steam. Conforto e performance.",
    value: 999.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Cadeira"],
  },
  {
    id: 3,
    img: "../img/catalogo/cadeira3.png",
    nameItem: "Generic Gamer Chair - Model Eagle",
    description:
      "Uma cadeira ideal para gamers dedicados, que desejam conforto para longas horas de jogo.",
    value: 765,
    addCart: "Adicionar ao carrinho",
    tag: ["Cadeira"],
  },
  {
    id: 4,
    img: "../img/catalogo/cadeira4.png",
    nameItem: "Generic Gamer Chair - Model Champion",
    description:
      "Essa cadeira foi projetada para proporcionar o máximo de conforto e precisão. Indispensável.",
    value: 1360.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Cadeira"],
  },
  {
    id: 5,
    img: "../img/catalogo/cadeira5.png",
    nameItem: "Generic Gamer Headset - Model Legend",
    description:
      "Um trono forjado com uma única finalidade: Tornar o seu usuário uma lenda viva.",
    value: 2115.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Cadeira"],
  },
  {
    id: 6,
    img: "../img/catalogo/headset1.png",
    nameItem: "Generic Gamer Headset - Model Wolf",
    description:
      "Um headset adequado para jogadores intermediários. Possui tecnologia de som 3D",
    value: 675.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Headset"],
  },
  {
    id: 7,
    img: "../img/catalogo/headset2.png",
    nameItem: "Generic Gamer Headset - Model Hound",
    description:
      "Este headset possibilita imersão avançada graças a sua tecnologia Dolby Atmos.",
    value: 548.50,
    addCart: "Adicionar ao carrinho",
    tag: ["Headset"],
  },
  {
    id: 8,
    img: "../img/catalogo/headset3.png",
    nameItem: "Generic Gamer Headset - Model Cerberus",
    description:
      "Modelo Mid Tier adequado para jogos FPS. Som 3D, Bass Booster, e microfone inteligente.",
    value: 700,
    addCart: "Adicionar ao carrinho",
    tag: ["Headset"],
  },
  {
    id: 9,
    img: "../img/catalogo/headset4.png",
    nameItem: "Generic Gamer Headset - Model Sonic",
    description:
      "Modelo profissional, que possibilita imersão máxima. Som Surround com Dolby 5.1.",
    value: 950,
    addCart: "Adicionar ao carrinho",
    tag: ["Headset"],
  },
  {
    id: 10,
    img: "../img/catalogo/headset5.png",
    nameItem: "Generic Headset - Model Thunder",
    description:
      "Ouça a respiração de seus inimigos e saiba onde eles estão sem precisar de minimap ou HUD.",
    value: 1560.99,
    addCart: "Adicionar ao carrinho",
    tag: ["Headset"],
  },
  {
    id: 11,
    img: "../img/catalogo/keyboard1.png",
    nameItem: "Generic Keyboard - Model Athenas",
    description:
      "Teclas responsivas, custom keys, e LED para o máximo de performance.",
    value: 225,
    addCart: "Adicionar ao carrinho",
    tag: ["Teclado"],
  },
  {
    id: 12,
    img: "../img/catalogo/keyboard2.png",
    nameItem: "Generic Keyboard - Model Zeus",
    description:
      "Teclado desenvolvido para possibilitar o máximo de conforto.",
    value: 199.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Teclado"],
  },
  {
    id: 13,
    img: "../img/catalogo/keyboard3.png",
    nameItem: "Generic Keyboard - Model Ares",
    description:
      "O Model Ares possui funções especiais que impactam diretamente o jogo.",
    value: 350,
    addCart: "Adicionar ao carrinho",
    tag: ["Teclado"],
  },
  {
    id: 14,
    img: "../img/catalogo/keyboard4.png",
    nameItem: "Generic Keyboard - Model Titan",
    description:
      "Já até vem com as teclas WASD pintadinhas pra sua felicidade.",
    value: 290,
    addCart: "Adicionar ao carrinho",
    tag: ["Teclado"],
  },
  {
    id: 15,
    img: "../img/catalogo/keyboard5.png",
    nameItem: "Generic Keyboard - Model Origin",
    description:
      "Esse teclado caríssimo promete te deixar imune a LER/DORTs e até mesmo low fps.",
    value: 745.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Teclado"],
  },
  {
    id: 16,
    img: "../img/catalogo/monitor1.png",
    nameItem: "Generic Monitor - Model Watcher",
    description:
      "Tela de 22' e tecnologia LCD.",
    value: 1874.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Monitor"],
  },
  {
    id: 17,
    img: "../img/catalogo/monitor2.png",
    nameItem: "Generic Monitor - Model Overseer",
    description:
      "Tela de 24'. QLED. 3D.",
    value: 1933.00,
    addCart: "Adicionar ao carrinho",
    tag: ["Monitor"],
  },
  {
    id: 18,
    img: "../img/catalogo/monitor3.png",
    nameItem: "Generic Monitor - Model Falcon",
    description:
      "Tela de 28'. Ultrawide. 3D. QLED.",
    value: 2279.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Monitor"],
  },
  {
    id: 19,
    img: "../img/catalogo/monitor4.png",
    nameItem: "Generic Monitor - Model Hawk",
    description:
      "Tela de 28'. Tecnologia PixelDust. QLED.",
    value: 2800,
    addCart: "Adicionar ao carrinho",
    tag: ["Monitor"],
  },
  {
    id: 20,
    img: "../img/catalogo/monitor5.png",
    nameItem: "Generic Monitor - Model Condor",
    description:
      "Tela de 27'. 120 FPS. Ultrawide.",
    value: 3420,
    addCart: "Adicionar ao carrinho",
    tag: ["Monitor"],
  },
  {
    id: 21,
    img: "../img/catalogo/mouse1.png",
    nameItem: "Generic Gamer Mouse - Model Warrior",
    description:
      "4 modos de sensibilidade até 2000 dpi.",
    value: 199,
    addCart: "Adicionar ao carrinho",
    tag: ["Mouse"],
  },
  {
    id: 22,
    img: "../img/catalogo/mouse2.png",
    nameItem: "Generic Gamer Mouse - Model Warfighter",
    description:
      "Mouse preciso com função Gatling e duas custom keys.",
    value: 240,
    addCart: "Adicionar ao carrinho",
    tag: ["Mouse"],
  },
  {
    id: 23,
    img: "../img/catalogo/mouse3.png",
    nameItem: "Generic Gamer Mouse - Model Killer",
    description:
      "4 modos de sensibilidade até 1200 dpi. LED.",
    value: 150,
    addCart: "Adicionar ao carrinho",
    tag: ["Mouse"],
  },
  {
    id: 24,
    img: "../img/catalogo/mouse4.png",
    nameItem: "Generic Gamer Mouse - Model Hunter",
    description:
      "5 modos de sensibilidade até 4000 dpi. 4 custom keys.",
    value: 315.50,
    addCart: "Adicionar ao carrinho",
    tag: ["Mouse"],
  },
  {
    id: 25,
    img: "../img/catalogo/mouse5.png",
    nameItem: "Generic Gamer Mouse - Model Predator",
    description:
      "Mouse rápido, preciso, com 5 sensibilidades e pesos internos.",
    value: 333.40,
    addCart: "Adicionar ao carrinho",
    tag: ["Mouse"],
  },
  {
    id: 26,
    img: "../img/catalogo/gabinete1.png",
    nameItem: "Generic Gamer Chassis - Cold War",
    description:
      "Desenvolvido para garantir a máxima refrigeração interna.",
    value: 440,
    addCart: "Adicionar ao carrinho",
    tag: ["Gabinete"],
  },
  {
    id: 27,
    img: "../img/catalogo/gabinete2.png",
    nameItem: "Generic Gamer Chassis - The Beauty",
    description:
      "Seu design permite visualização total do espaço interno.",
    value: 569,
    addCart: "Adicionar ao carrinho",
    tag: ["Gabinete"],
  },
  {
    id: 28,
    img: "../img/catalogo/gabinete3.png",
    nameItem: "Generic Gamer Chassis - Enlightened",
    description:
      "Possui 6 fans e acabamento de vidro minimalista.",
    value: 660.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Gabinete"],
  },
  {
    id: 29,
    img: "../img/catalogo/gabinete4.png",
    nameItem: "Generic Gamer Chassis - Overlord",
    description:
      "Resistência, performance e suporte para water cooling.",
    value: 940,
    addCart: "Adicionar ao carrinho",
    tag: ["Gabinete"],
  },
  {
    id: 30,
    img: "../img/catalogo/gabinete5.png",
    nameItem: "Generic Gamer Chassis - LED Supremacy",
    description:
      "Todo o espaço interno foi projetado pensando em LEDs. Lumus!",
    value: 999.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Gabinete"],
  }

];


data = data.sort(() => Math.random() - 0.5)
data.forEach(obj => obj["qtd"] = 0)

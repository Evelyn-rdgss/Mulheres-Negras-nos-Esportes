/* Fontes de pesquisa e "Elas também fazem história" de cada atleta.
   A chave é o mesmo id usado no endereço (atleta.html?id=...).
   Cada fonte abre no clique. Com "link" abre direto a página; sem "link" abre
   uma busca pelo título exato (troque pelo endereço definitivo quando tiver):
   { texto: "...", link: "https://..." } */
window.FONTES = {
  "sheryl-swoopes": {
    fontes: [
      {
        texto: "Sheryl Swoopes - Wikipedia",
        link: "https://en.wikipedia.org/wiki/Sheryl_Swoopes",
      },
      {
        texto: "WNBA — Sheryl Swoopes Career Timeline",
        link: "https://www.wnba.com/news/sheryl-swoopes-career-timeline",
      },
      {
        texto:
          "Women’s National Basketball Association (WNBA) | Expansion, Playoffs, History, Players, & Teams | Britannica",
        link: "https://www.britannica.com/topic/Womens-National-Basketball-Association",
      },
    ],
    tambem: [
      {
        nome: "Hortência Marcari",
        texto:
          "uma das maiores jogadoras da história do basquete feminino brasileiro e pioneira entre as mulheres que quebraram barreiras no esporte.",
      },
    ],
  },
  formiga: {
    fontes: [
      "Dia Internacional da Mulher: cinco atletas brasileiras que quebraram barreiras",
      {
        texto: "Formiga (futebolista) – Wikipédia, a enciclopédia livre",
        link: "https://pt.wikipedia.org/wiki/Formiga_(futebolista)",
      },
      {
        texto: "Formiga",
        link: "https://estrelasbaianasdoesporte.blogspot.com/2025/02/formiga.html",
      },
    ],
    tambem: [
      {
        nome: "Marta",
        texto:
          "considerada uma das maiores jogadoras da história do futebol feminino e referência mundial da modalidade.",
      },
      {
        nome: "Debinha, Ludmila e Gabi Portilho",
        texto: "nomes relevantes do futebol feminino brasileiro contemporâneo.",
      },
    ],
  },
  marta: {
    fontes: [
      {
        texto: "Marta (futebolista) – Wikipédia, a enciclopédia livre",
        link: "https://pt.wikipedia.org/wiki/Marta_(futebolista)",
      },
      "Marta vai jogar a Copa do Mundo no Brasil em 2027? Entenda planos da camisa 10 com a Seleção | Ge",
      {
        texto:
          "Marta: biografia, títulos, times e curiosidades da jogadora – Esportelândia",
        link: "https://www.esportelandia.com.br/futebol/marta/",
      },
      {
        texto:
          "Marta 40 anos: veja 40 momentos marcantes da carreira da melhor jogadora da história | Ge",
        link: "https://ge.globo.com/futebol/futebol-internacional/noticia/2026/02/19/marta-40-anos-veja-40-momentos-marcantes-da-carreira-da-melhor-jogadora-da-historia.ghtml",
      },
      {
        texto: "Marta: 10 fatos sobre a maior jogadora de todos os tempos",
        link: "https://www.dicasdemulher.com.br/marta/",
      },
    ],
    tambem: [
      {
        nome: "Formiga",
        texto:
          "meio-campista que disputou sete Copas do Mundo e sete Olimpíadas, referência de longevidade no futebol feminino.",
      },
    ],
  },
  "serena-williams": {
    fontes: [
      {
        texto: "Serena Williams - Wikipedia",
        link: "https://en.wikipedia.org/wiki/Serena_Williams",
      },
      "Tudo sobre Serena Williams: carreira, títulos, recordes e biografia – Esportelândia",
      {
        texto:
          "Serena Williams | Comeback, Age, Children, Sister, Height, Grand Slams, Biography, Titles, & Facts | Britannica",
        link: "https://www.britannica.com/biography/Serena-Williams",
      },
      "Serena Williams Não Voltou ao Tênis Pelo Dinheiro; O Que Explica o Retorno da Atleta Mais Rica da História",
    ],
    tambem: [
      {
        nome: "Venus Williams",
        texto:
          "sete títulos de Grand Slam em simples e pioneira na luta por igualdade de premiação no tênis feminino.",
      },
      {
        nome: "Althea Gibson",
        texto:
          "primeira mulher negra americana a vencer um Grand Slam, abrindo caminho para as irmãs Williams.",
      },
    ],
  },
  "alexandra-nascimento": {
    fontes: [
      "Alexandra leva o prêmio de melhor jogadora do mundo no handebol",
      {
        texto: "Alexandra do Nascimento - Wikipedia",
        link: "https://en.wikipedia.org/wiki/Alexandra_do_Nascimento",
      },
      "Alexandra Nascimento volta ao Mundial de Handebol aos 44 anos: veterana exalta nova geração e papel na seleção",
    ],
    tambem: [
      {
        nome: "Eduarda Taleska e Mayara Fierro",
        texto:
          "nomes importantes do handebol brasileiro atual, embora com menos visibilidade internacional do que Alexandra.",
      },
    ],
  },
  "simone-manuel": {
    fontes: [
      {
        texto: "Simone Manuel - Wikipedia",
        link: "https://en.wikipedia.org/wiki/Simone_Manuel",
      },
      "Simone Manuel, nadadora pioneira",
      "Simone Manuel: Primeira campeã negra é amiga de Simone Biles e diz que significa muito",
      "Primeira negra a vencer prova individual, Simone Manuel quer servir de inspiração - Jornal O Globo",
      "Simone Manuel Bio - SwimSwam",
      "Primeira negra campeã nas piscinas, Simone Manuel espera inspirar gerações - Máquina do Esporte",
    ],
    tambem: [
      {
        nome: "Etiene Medeiros",
        texto:
          "nadadora brasileira recordista e medalhista mundial; principal nome negro do Brasil na natação feminina.",
      },
    ],
  },
  "aida-dos-santos": {
    fontes: [
      "Em 1964, Aída dos Santos conquistou o quarto lugar no atletismo",
      "A revolução feminina de Aída | VEJA",
      "Aida dos Santos, pioneira do esporte brasileiro, faz 85 anos | Ge",
      "Aida dos Santos (1937 – atualmente) – Memória Feminista Antirracista",
      {
        texto: "Aída dos Santos – Wikipédia, a enciclopédia livre",
        link: "https://pt.wikipedia.org/wiki/A%C3%ADda_dos_Santos",
      },
    ],
    tambem: [
      {
        nome: "Florence Griffith-Joyner (Flo-Jo)",
        texto:
          "detentora dos recordes mundiais dos 100 m (10s49) e 200 m (21s34), ambos de 1988 e ainda não superados.",
      },
      {
        nome: "Allyson Felix",
        texto:
          "atleta mais condecorada da história do Campeonato Mundial de atletismo, com 20 medalhas mundiais e 11 olímpicas.",
      },
      {
        nome: "Shelly-Ann Fraser-Pryce",
        texto:
          "multicampeã olímpica e mundial jamaicana, referência absoluta nos 100 m.",
      },
    ],
  },
  "melania-luz": {
    fontes: [
      {
        texto: "Melânia Luz – Wikipédia, a enciclopédia livre",
        link: "https://pt.wikipedia.org/wiki/Mel%C3%A2nia_Luz",
      },
      "Melânia Luz (1928 – 2016) – Memória Feminista Antirracista",
      "Melânia Luz: a vida e a morte de uma pioneira invisível",
      "Melânia Luz: a única preta a iluminar uma pista olímpica nos anos 1940",
      "Melânia Luz | Comitê Olímpico do Brasil",
    ],
    tambem: [
      {
        nome: "Aída dos Santos",
        texto:
          "primeira brasileira a chegar a uma final olímpica, com o quarto lugar no salto em altura em Tóquio 1964.",
      },
    ],
  },
  "beatriz-souza": {
    fontes: [
      "Beatriz Souza, a Bia (2026): história, medalhas e Olimpíada de Paris 2024 – Esportelândia",
      {
        texto: "Beatriz Souza – Wikipédia, a enciclopédia livre",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
      },
      "Quem é Beatriz Souza? Medalhas, altura, peso e história da judoca | Ge",
      "Conheça a trajetória de Beatriz Souza, a primeira brasileira medalhista de ouro em Paris - Mídia NINJA",
      "De pai para filha: A história da judoca Beatriz Souza que lutará pelo pódio nas Olimpíadas 2024 | Exame",
      "Bia Souza relembra Paris-2024, fala sobre LA-2028 e pós-carreira",
    ],
    tambem: [
      {
        nome: "Rafaela Silva",
        texto:
          "campeã olímpica e mundial de judô; conquistou o primeiro ouro do Brasil nos Jogos do Rio 2016.",
      },
      {
        nome: "Ketleyn Quadros",
        texto:
          "primeira mulher brasileira a conquistar medalha olímpica individual no judô, em Pequim 2008.",
      },
    ],
  },
  "renee-powell": {
    fontes: [
      {
        texto: "Renee Powell - Wikipedia",
        link: "https://en.wikipedia.org/wiki/Renee_Powell",
      },
      "Renee Powell — Clearview Golf Club",
      "Renee Powell is first to be honored with World Golf Hall of Fame Charlie Sifford Award | Golf News and Tour Information | GolfDigest.com",
    ],
    tambem: [
      {
        nome: "Cheyenne Woods",
        texto:
          "sobrinha de Tiger Woods e golfista profissional norte-americana, uma das faces mais visíveis da diversidade no golfe feminino.",
      },
    ],
  },
  "fabiana-claudino": {
    fontes: [
      {
        texto: "Fabiana Claudino – Wikipédia, a enciclopédia livre",
        link: "https://pt.wikipedia.org/wiki/Fabiana_Claudino",
      },
      "Fabiana explica aposentadoria do vôlei e faz planos para o futuro: “Ser capitã da minha própria vida” | Ge",
      "Bicampeã olímpica detalha vida fora do vôlei e revela novos projetos para mulheres negras",
      "Ídolos do Volei #45 Fabiana Claudino",
      "Fabiana Marcelino Claudino | Comitê Olímpico do Brasil",
    ],
    tambem: [
      {
        nome: "Adenizia da Silva",
        texto:
          "central campeã olímpica com a seleção brasileira em Pequim 2008 e Londres 2012.",
      },
      {
        nome: "Fernanda Garay",
        texto:
          "ponteira campeã olímpica em Londres 2012 e referência da seleção brasileira.",
      },
    ],
  },
  "rebeca-andrade": {
    fontes: [
      {
        texto: "Rebeca Andrade – Wikipédia, a enciclopédia livre",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
      },
      "Rebeca Andrade mantém decisão sobre Olímpiadas 2028, em Los Angeles | VEJA",
      "Rebeca Andrade: Biografia, Medalhas e Recordes",
      "Estrela mais brilhante do Olimpo brasileiro, Rebeca Andrade é ouro no solo em Paris | Ge",
      {
        texto: "Gymnastics - Balance, Flexibility, Strength | Britannica",
        link: "https://www.britannica.com/sports/gymnastics",
      },
    ],
    tambem: [
      {
        nome: "Daiane dos Santos",
        texto:
          "primeira brasileira a ganhar ouro mundial na ginástica artística, em 2003; deu nome a dois elementos do código de pontos.",
      },
      {
        nome: "Simone Biles",
        texto:
          "norte-americana considerada a maior ginasta da história, com 11 medalhas olímpicas e 30 medalhas mundiais.",
      },
    ],
  },
  "simone-biles": {
    fontes: [
      {
        texto: "Simone Biles - Wikipedia",
        link: "https://en.wikipedia.org/wiki/Simone_Biles",
      },
      {
        texto: "Simone Biles | Biografia, Resultados, Troféus e Medalhas",
        link: "https://www.olympics.com/pt/atletas/simone-biles",
      },
      {
        texto: "Gymnastics - Balance, Flexibility, Strength | Britannica",
        link: "https://www.britannica.com/sports/gymnastics",
      },
    ],
    tambem: [
      {
        nome: "Rebeca Andrade",
        texto:
          "maior medalhista olímpica brasileira da história; primeira mulher brasileira a ganhar medalha olímpica na ginástica artística, com ouro no salto em Tóquio 2020 e ouro no solo em Paris 2024.",
      },
      {
        nome: "Daiane dos Santos",
        texto:
          "primeira brasileira a ganhar ouro mundial na ginástica artística, em 2003; deu nome a dois elementos do código de pontos.",
      },
    ],
  },
};

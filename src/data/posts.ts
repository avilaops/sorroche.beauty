/**
 * Conteúdo do blog em blocos estruturados — a interface renderiza a partir
 * daqui, então trocar por um CMS depois não exige refazer as páginas.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO — usado no <time> e no JSON-LD. */
  date: string;
  readingMinutes: number;
  category: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "quanto-custa-maquiagem-de-noiva",
    title: "Quanto custa uma maquiagem de noiva em Rio Preto?",
    description:
      "O que realmente entra no valor de uma maquiagem de noiva em São José do Rio Preto — e por que orçamento sério não sai por tabela.",
    date: "2026-08-05",
    readingMinutes: 5,
    category: "Noivas",
    body: [
      {
        type: "p",
        text: "É a primeira pergunta de quase toda noiva, e a resposta honesta incomoda um pouco: depende. Não porque exista algo a esconder, mas porque duas noivas com a mesma data podem contratar produções completamente diferentes.",
      },
      {
        type: "p",
        text: "Este texto explica o que compõe o valor, para você comparar orçamentos sabendo o que está olhando.",
      },
      { type: "h2", text: "O que entra no preço" },
      {
        type: "list",
        items: [
          "Teste de maquiagem: é um atendimento completo antes do casamento, com hora marcada e produtos usados. Alguns orçamentos incluem, outros cobram à parte — vale perguntar.",
          "Número de pessoas: madrinhas, mãe da noiva e acompanhantes mudam o tempo total e, portanto, o valor.",
          "Horário: casamento de manhã cedo costuma exigir começar de madrugada. Isso pesa.",
          "Deslocamento: atender no salão é diferente de atender no hotel, na casa da família ou em cidade vizinha.",
          "Duração da produção: uma maquiagem blindada para festa ao ar livre exige mais etapas e mais produto do que um look para cerimônia curta.",
        ],
      },
      { type: "h2", text: "Por que desconfiar de tabela fechada" },
      {
        type: "p",
        text: "Um valor único para qualquer noiva geralmente significa uma de duas coisas: ou está alto para quem precisa de pouco, ou vai virar cobrança extra depois, quando aparecerem as madrinhas e o deslocamento. Orçamento feito após conversa protege as duas partes.",
      },
      { type: "h2", text: "O que perguntar antes de fechar" },
      {
        type: "list",
        items: [
          "O teste está incluído? Se não, quanto custa?",
          "Até que horas a profissional fica no local?",
          "Há custo de deslocamento para a minha cidade?",
          "O que acontece se o horário do casamento atrasar?",
          "Quantas pessoas cabem no tempo reservado?",
        ],
      },
      {
        type: "quote",
        text: "O barato que vira caro no casamento não é o preço — é o retrabalho no dia, sem tempo para consertar.",
      },
      { type: "h2", text: "Como funciona aqui" },
      {
        type: "p",
        text: "O orçamento sai depois de uma conversa sobre a sua data: horário, local, quantas pessoas e o que você imagina. Assim o valor que você recebe é o valor real, sem surpresa no dia.",
      },
    ],
  },
  {
    slug: "teste-de-maquiagem-de-noiva",
    title: "Teste de maquiagem de noiva: vale a pena mesmo?",
    description:
      "Por que o teste é o encontro mais importante antes do casamento, o que acontece nele e como aproveitar bem.",
    date: "2026-07-28",
    readingMinutes: 4,
    category: "Noivas",
    body: [
      {
        type: "p",
        text: "Muita noiva pensa no teste como um luxo opcional. Na prática, é o que transforma expectativa em certeza — e o que evita a pior sensação possível: olhar no espelho no dia do casamento e não se reconhecer.",
      },
      { type: "h2", text: "O que o teste responde" },
      {
        type: "list",
        items: [
          "Se o tom da base está certo na sua pele, na luz do horário do seu casamento.",
          "Como a sua pele reage aos produtos — vermelhidão, oleosidade, alergia.",
          "Se o look combina com o vestido, o penteado e o seu jeito.",
          "Quanto tempo a produção leva de verdade, para acertar o cronograma do dia.",
        ],
      },
      { type: "h2", text: "Quando fazer" },
      {
        type: "p",
        text: "O ideal é entre 30 e 60 dias antes. Perto o suficiente para a pele estar parecida com a do dia, e longe o bastante para ajustar o que não agradou — ou tratar alguma reação com calma.",
      },
      { type: "h2", text: "Como aproveitar melhor" },
      {
        type: "list",
        items: [
          "Leve fotos de referência, inclusive do que você não gosta. O 'não' ajuda tanto quanto o 'sim'.",
          "Combine o teste com o dia do teste de penteado, para ver o conjunto.",
          "Se possível, marque em horário parecido com o do casamento — a luz muda a percepção.",
          "Tire fotos com o celular, com e sem flash. É assim que a maquiagem vai aparecer nas fotos dos convidados.",
          "Passe o dia com a maquiagem e observe como ela se comporta nas horas seguintes.",
        ],
      },
      {
        type: "quote",
        text: "O teste não é para ver se a maquiadora sabe trabalhar. É para vocês duas combinarem, com tempo, o que vai acontecer no dia.",
      },
      { type: "h2", text: "Depois do teste" },
      {
        type: "p",
        text: "O que foi aprovado fica registrado: tons, produtos, acabamento, o que ajustar. No dia do casamento não existe improviso — existe repetição de algo que já deu certo.",
      },
    ],
  },
  {
    slug: "maquiagem-que-nao-sai-no-calor",
    title: "Maquiagem que não sai no calor: o que funciona de verdade",
    description:
      "Em Rio Preto o calor derruba maquiagem antes da festa começar. O que realmente segura o acabamento, e o que é mito.",
    date: "2026-07-19",
    readingMinutes: 5,
    category: "Técnica",
    body: [
      {
        type: "p",
        text: "Quem mora em São José do Rio Preto sabe: existe um tipo de calor que desmancha maquiagem antes mesmo da festa começar. E existe muita informação errada circulando sobre como resolver isso.",
      },
      { type: "h2", text: "O que realmente segura" },
      {
        type: "list",
        items: [
          "Preparo de pele adequado ao seu tipo. É a etapa que mais influencia a duração, e a que mais gente pula.",
          "Camadas finas. Maquiagem pesada não dura mais — dura menos, porque escorrega e craquela.",
          "Produtos de longa permanência nos pontos críticos: base, olhos e boca.",
          "Selagem final, que fixa o conjunto e controla o brilho ao longo da noite.",
        ],
      },
      { type: "h2", text: "O que é mito" },
      {
        type: "list",
        items: [
          "Passar mais base para durar mais. O efeito é o contrário.",
          "Pó em excesso resolve oleosidade. Em excesso, ele marca linhas e envelhece o acabamento.",
          "Maquiagem à prova d'água serve para qualquer situação. Ela resiste a lágrima e suor, não a mergulho.",
          "Spray fixador sozinho salva tudo. Sem preparo correto embaixo, ele fixa um acabamento que já ia cair.",
        ],
      },
      { type: "h2", text: "O que você pode fazer no dia" },
      {
        type: "list",
        items: [
          "Chegue com o rosto limpo e sem produto acumulado.",
          "Evite procedimentos novos na pele nos dias anteriores.",
          "Leve lenço de papel, não lenço umedecido, para o suor.",
          "Encoste o papel na pele, sem esfregar — esfregar remove a base.",
        ],
      },
      {
        type: "quote",
        text: "Maquiagem que dura não é a que tem mais produto. É a que foi construída na ordem certa.",
      },
    ],
  },
  {
    slug: "como-escolher-maquiadora",
    title: "Como escolher a maquiadora do seu casamento",
    description:
      "Cinco perguntas que revelam mais sobre uma profissional do que qualquer portfólio no Instagram.",
    date: "2026-07-10",
    readingMinutes: 4,
    category: "Noivas",
    body: [
      {
        type: "p",
        text: "Portfólio bonito é o mínimo, não o diferencial. Quase toda profissional mostra os melhores trabalhos, com a melhor luz e o melhor ângulo. O que separa uma boa escolha de um arrependimento aparece em outros lugares.",
      },
      { type: "h2", text: "1. Peça para ver trabalhos em pele parecida com a sua" },
      {
        type: "p",
        text: "Tom de pele, textura e idade mudam completamente o resultado. Um portfólio inteiro com o mesmo tipo de pele diz pouco sobre o que vai acontecer com a sua.",
      },
      { type: "h2", text: "2. Pergunte o que acontece se o dia atrasar" },
      {
        type: "p",
        text: "Casamento atrasa. A resposta a essa pergunta revela se a profissional reserva a data só para você ou se tem outro compromisso depois.",
      },
      { type: "h2", text: "3. Veja fotos feitas por convidados, não só as profissionais" },
      {
        type: "p",
        text: "A foto do fotógrafo tem tratamento. A do celular do convidado, com flash direto, mostra como a maquiagem realmente se comporta.",
      },
      { type: "h2", text: "4. Pergunte sobre o preparo de pele" },
      {
        type: "p",
        text: "Se a resposta for genérica, atenção. Preparo é o que sustenta a maquiagem, e uma boa profissional fala disso com detalhe, adaptando ao seu tipo de pele.",
      },
      { type: "h2", text: "5. Observe como ela escuta" },
      {
        type: "p",
        text: "Na primeira conversa, ela pergunta sobre você ou já chega com uma proposta pronta? Maquiagem de noiva é sobre a sua cara no seu dia — e isso começa com escuta.",
      },
      {
        type: "quote",
        text: "Você não está contratando um serviço técnico. Está escolhendo quem vai estar ao seu lado nas horas mais nervosas do dia.",
      },
    ],
  },
  {
    slug: "preparar-a-pele-antes-da-maquiagem",
    title: "Como preparar a pele antes de uma produção importante",
    description:
      "O que fazer nas semanas e nas horas anteriores para a maquiagem se comportar bem no dia.",
    date: "2026-06-30",
    readingMinutes: 4,
    category: "Cuidados",
    body: [
      {
        type: "p",
        text: "Boa parte do resultado de uma maquiagem é decidida antes de a profissional encostar um pincel em você. A pele que chega ao atendimento define o que é possível fazer nela.",
      },
      { type: "h2", text: "Nas semanas anteriores" },
      {
        type: "list",
        items: [
          "Mantenha a hidratação constante. Pele desidratada absorve base de forma irregular e marca linhas.",
          "Não teste procedimento novo perto da data. Peeling, laser e ácidos pedem tempo de recuperação.",
          "Se for fazer limpeza de pele, deixe pelo menos uma semana de intervalo.",
          "Cuide da sobrancelha com antecedência, não na véspera — vermelhidão aparece na foto.",
        ],
      },
      { type: "h2", text: "Na véspera" },
      {
        type: "list",
        items: [
          "Durma o que der. Olheira e inchaço são visíveis e limitam o que a maquiagem resolve.",
          "Evite excesso de sal e álcool, que incham o rosto.",
          "Hidrate os lábios. Lábio ressecado descasca e nenhum batom disfarça isso.",
        ],
      },
      { type: "h2", text: "No dia" },
      {
        type: "list",
        items: [
          "Chegue com o rosto limpo, sem maquiagem e sem excesso de creme.",
          "Evite protetor solar muito oleoso logo antes — ele pode fazer a base deslizar.",
          "Vá com uma peça de roupa que abra na frente, para não passar pela cabeça depois de pronta.",
        ],
      },
      {
        type: "quote",
        text: "Maquiagem não corrige pele maltratada. Ela trabalha com o que encontra — então vale entregar a melhor pele possível.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date)
);

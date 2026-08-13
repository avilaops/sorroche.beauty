/**
 * Cidades atendidas. Cada uma tem contexto próprio — página de cidade com
 * texto genérico é ignorada pelo Google e não ajuda ninguém.
 */
export type City = {
  slug: string;
  name: string;
  /** Como a cidade se relaciona com Rio Preto, para o texto da página. */
  context: string;
  /** O que muda no atendimento nessa cidade. */
  logistics: string;
  /** Observação prática sobre horário e deslocamento. */
  timing: string;
  /** Perguntas próprias da cidade — evita FAQ clonado entre páginas. */
  faq: { q: string; a: string }[];
};

export const cities: City[] = [
  {
    slug: "mirassol",
    name: "Mirassol",
    context:
      "Mirassol é vizinha de São José do Rio Preto — na prática, as duas cidades funcionam como uma só para quem mora na divisa. É a cidade da região de onde vêm mais pedidos de atendimento fora de Rio Preto.",
    logistics:
      "Por causa da proximidade, o atendimento em Mirassol costuma ser o mais simples de encaixar na agenda: dá para atender em casa, no salão do evento ou no espaço de festas sem alterar muito o cronograma do dia.",
    timing:
      "Mesmo sendo perto, casamentos de manhã em Mirassol pedem saída cedo de Rio Preto. Combinar o horário com antecedência evita correria justamente na hora em que a noiva precisa de calma.",
    faq: [
      {
        q: "Vale a pena atender em Mirassol ou é melhor ir até o estúdio?",
        a: "Depende do seu dia. Se o cabelo é feito em casa e a festa é em Mirassol, atender no local poupa dois deslocamentos. Se você já vai a Rio Preto para outra coisa, o estúdio pode render mais tempo tranquilo.",
      },
      {
        q: "Consigo agendar em cima da hora em Mirassol?",
        a: "Para maquiagem social, às vezes sim — a proximidade ajuda a encaixar. Para noiva, não: a data precisa estar reservada com antecedência porque o dia inteiro fica dedicado a você.",
      },
    ],
  },
  {
    slug: "bady-bassitt",
    name: "Bady Bassitt",
    context:
      "Bady Bassitt fica a poucos minutos de São José do Rio Preto, no caminho de quem vem pela rodovia. É comum a família morar em Bady Bassitt e a festa acontecer em Rio Preto — ou o contrário.",
    logistics:
      "O atendimento pode acontecer na casa da noiva em Bady Bassitt e a festa em outra cidade, ou tudo no mesmo lugar. Como isso muda o deslocamento e o tempo total, precisa ser combinado quando a data é reservada.",
    timing:
      "Se a produção começa em Bady Bassitt e termina em outra cidade, vale reservar folga entre a maquiagem e a cerimônia — trânsito de fim de tarde na região costuma atrasar.",
    faq: [
      {
        q: "Moro em Bady Bassitt mas caso em Rio Preto. Como funciona?",
        a: "É uma das combinações mais comuns. A maquiagem pode ser feita na sua casa, antes de todo mundo sair, ou já no local da festa em Rio Preto. A escolha muda o horário de início e é definida junto com você.",
      },
      {
        q: "Dá para atender minha família em Bady Bassitt e eu em outro lugar?",
        a: "Sim, mas isso exige planejar o tempo com cuidado, porque envolve deslocamento no meio da produção. Quanto antes essa logística for combinada, mais folgado fica o cronograma do dia.",
      },
    ],
  },
  {
    slug: "cedral",
    name: "Cedral",
    context:
      "Cedral é uma cidade pequena da região de Rio Preto, onde os casamentos costumam ser mais intimistas e a produção acontece na casa da família ou em espaços de festa próprios da cidade.",
    logistics:
      "Em cidades menores, é comum a maquiagem de noiva, madrinhas e mãe da noiva acontecer toda no mesmo lugar, uma depois da outra. Isso pede um tempo maior reservado — e é melhor definir quantas pessoas serão atendidas logo no começo.",
    timing:
      "O deslocamento até Cedral entra no orçamento. Para produções com várias pessoas, o horário de início costuma ser bem mais cedo do que a noiva imagina.",
    faq: [
      {
        q: "Em Cedral, quantas pessoas dá para atender no mesmo dia?",
        a: "Depende do horário da cerimônia e de quanto tempo cada produção leva. Como o deslocamento já consome parte do dia, o número de pessoas precisa ser fechado quando a data é reservada — não dá para incluir alguém na véspera.",
      },
      {
        q: "A produção pode ser na casa da família?",
        a: "Sim, e é o mais comum em Cedral. Basta ter um cômodo com luz razoável, uma tomada e espaço para montar. Um quarto costuma funcionar melhor que a sala cheia de gente.",
      },
    ],
  },
  {
    slug: "guapiacu",
    name: "Guapiaçu",
    context:
      "Guapiaçu fica na região de São José do Rio Preto e recebe casamentos em chácaras e espaços ao ar livre, onde calor e vento fazem parte do dia.",
    logistics:
      "Festa ao ar livre muda a escolha técnica: o acabamento precisa ser mais resistente, com selagem reforçada, porque a maquiagem vai enfrentar sol, calor e o vento da tarde.",
    timing:
      "Para eventos em chácara, vale combinar o local exato da produção com antecedência — nem sempre há um espaço adequado com luz e tomada perto do salão.",
    faq: [
      {
        q: "Minha festa é em chácara, ao ar livre. Que maquiagem escolher?",
        a: "Nesses casos a maquiagem blindada faz muita diferença: sol, calor e vento desgastam o acabamento bem mais rápido do que num salão fechado. Vale conversar sobre isso antes de decidir o look.",
      },
      {
        q: "Tem estrutura para a maquiagem nas chácaras de Guapiaçu?",
        a: "Varia muito de um espaço para outro. Por isso é importante confirmar antes se existe um cômodo com luz natural e tomada — se não houver, dá para adaptar, mas é melhor saber com antecedência.",
      },
    ],
  },
];

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

import type { Post } from "./posts";
import delineado from "@/../public/portfolio/delineado.jpg";
import esfumadoPreto from "@/../public/portfolio/esfumado-preto.jpg";
import debutante from "@/../public/portfolio/debutante.jpg";
import esfumadoSuave from "@/../public/portfolio/esfumado-suave.jpg";
import glow from "@/../public/portfolio/glow.jpg";
import ondasHollywood from "@/../public/portfolio/ondas-hollywood.jpg";
import radiante from "@/../public/portfolio/radiante.jpg";
import dourado from "@/../public/portfolio/dourado.jpg";
import roseIluminado from "@/../public/portfolio/rose-iluminado.jpg";

/**
 * Segunda leva do blog, escrita para as buscas que uma cliente de São José
 * do Rio Preto faz de verdade antes de contratar: ocasião + cidade. Cada
 * texto responde uma pergunta concreta — página que só repete "maquiadora
 * em Rio Preto" não ranqueia e não convence ninguém.
 */
export const postsRioPreto: Post[] = [
  {
    slug: "maquiadora-em-rio-preto-como-escolher",
    title: "Maquiadora em Rio Preto: como escolher a certa para a sua ocasião",
    description:
      "O que olhar antes de contratar uma maquiadora em São José do Rio Preto: portfólio, teste, produtos, tempo de atendimento e o que uma boa conversa inicial revela.",
    date: "2026-08-26",
    readingMinutes: 6,
    category: "Guia",
    image: delineado,
    imageAlt:
      "Maquiagem social com delineado preciso e pele luminosa, feita por Viviane Sorroche em São José do Rio Preto.",
    body: [
      {
        type: "p",
        text: "São José do Rio Preto tem muita maquiadora boa. O problema nunca foi falta de opção — é saber, antes de pagar, se aquela profissional é a certa para o seu rosto, a sua ocasião e o seu jeito. Este guia é a lista que eu daria a uma amiga que estivesse procurando.",
      },
      { type: "h2", text: "Comece pelo portfólio, mas olhe do jeito certo" },
      {
        type: "p",
        text: "Foto bonita todo mundo tem. O que interessa é variedade: peles diferentes, idades diferentes, ocasiões diferentes. Uma maquiadora que só mostra um tipo de rosto e um estilo de look vai tentar encaixar você nele. Procure fotos sem filtro pesado, de preferência com luz natural, e observe se as clientes continuam parecendo elas mesmas.",
      },
      {
        type: "list",
        items: [
          "As peles nas fotos têm textura real ou parecem plástico? Textura real é bom sinal.",
          "Há clientes com o seu tom de pele? Base errada é o erro mais comum e mais visível.",
          "Existe foto de fim de festa? Poucas maquiadoras mostram, e diz muito sobre duração.",
        ],
      },
      { type: "h2", text: "Pergunte sobre o teste" },
      {
        type: "p",
        text: "Para noiva, teste não é opcional — é o encontro em que vocês decidem juntas o que vai acontecer no dia. Para formatura ou festa importante, também vale a pena quando há tempo. Se a profissional desencoraja o teste ou trata como perda de tempo, é um sinal de alerta.",
      },
      { type: "h2", text: "Produtos e higiene" },
      {
        type: "p",
        text: "Você tem o direito de perguntar quais marcas são usadas, se os pincéis são higienizados entre clientes e como é feita a preparação da pele. Uma resposta clara e sem incômodo é o que se espera de quem trabalha com rosto de gente.",
      },
      { type: "h2", text: "Tempo, local e o que está incluído" },
      {
        type: "list",
        items: [
          "Quanto tempo o atendimento leva? Maquiagem social bem feita leva perto de uma hora e meia.",
          "Atende no estúdio, em casa ou no local do evento? Em Rio Preto e nas cidades vizinhas isso muda o horário de tudo.",
          "Cílios postiços, preparação de pele e retoque estão no valor ou são à parte?",
          "O que acontece se o seu evento atrasar?",
        ],
      },
      { type: "h2", text: "A conversa inicial diz quase tudo" },
      {
        type: "p",
        text: "Repare em como a profissional responde à primeira mensagem. Ela pergunta sobre a ocasião, o horário, o vestido, o que você gosta e o que não gosta? Ou só manda o preço? Maquiagem é personalizada por natureza; quem trata como produto de prateleira vai entregar resultado de prateleira.",
      },
      {
        type: "quote",
        text: "A maquiadora certa não é a que faz o look mais impressionante. É a que faz o look em que você se reconhece — e que continua no lugar quando a festa acaba.",
      },
      { type: "h2", text: "Como funciona aqui" },
      {
        type: "p",
        text: "Atendo em São José do Rio Preto, no estúdio da Vila Nossa Senhora da Paz, a domicílio e nas cidades da região. Toda produção começa com uma conversa sobre a sua ocasião, e o seu perfil de beleza fica registrado no app para o próximo atendimento partir de onde o anterior parou.",
      },
    ],
  },
  {
    slug: "maquiagem-para-formatura-rio-preto",
    title: "Maquiagem para formatura em Rio Preto: colação, fotos e festa com um look só",
    description:
      "Como planejar a maquiagem de formatura em São José do Rio Preto para atravessar colação, sessão de fotos e baile sem retoque — e o que combinar com a beca.",
    date: "2026-08-22",
    readingMinutes: 5,
    category: "Maquiagem Social",
    image: esfumadoPreto,
    imageAlt:
      "Esfumado preto com pele acetinada e rabo de cavalo baixo, maquiagem de formatura por Viviane Sorroche.",
    body: [
      {
        type: "p",
        text: "Formatura é a ocasião mais longa que uma maquiagem enfrenta: começa à tarde, passa por colação sob luz forte, foto oficial, jantar em família e termina em festa de madrugada. Em Rio Preto, some a isso o calor. A produção precisa ser pensada para esse dia inteiro, não para a primeira foto.",
      },
      { type: "h2", text: "Um look que funciona nos três momentos" },
      {
        type: "list",
        items: [
          "Colação: luz de auditório é dura e vem de cima. Pele bem preparada e contorno leve evitam que o rosto fique chapado nas fotos oficiais.",
          "Fotos com a família: aqui a pele precisa parecer pele — flash de celular denuncia base pesada.",
          "Baile: luz baixa e calor. É o momento que pede o esfumado mais marcado e a selagem mais firme.",
        ],
      },
      { type: "h2", text: "Beca, capelo e o que isso muda" },
      {
        type: "p",
        text: "A beca cobre o corpo inteiro e é escura na maioria dos cursos. O rosto vira o único ponto de cor da foto. Por isso o look de formatura costuma pedir um pouco mais de definição nos olhos e no lábio do que uma maquiagem de festa comum — sem exagero, mas com presença. O capelo achata o cabelo e aproxima o olhar da testa: sobrancelha bem desenhada faz diferença.",
      },
      { type: "h2", text: "Quando marcar" },
      {
        type: "p",
        text: "Em época de formatura, os horários da tarde vão embora primeiro — várias turmas colam no mesmo fim de semana. Reserve assim que souber a data. Se a colação é cedo e o baile é à noite, dá para combinar um retoque rápido entre os dois, ou uma produção blindada que dispense retoque.",
      },
      { type: "h2", text: "Perguntas que sempre aparecem" },
      {
        type: "list",
        items: [
          "Faço o cabelo antes ou depois? Antes, de preferência. O penteado define o que o rosto precisa.",
          "Cílios postiços são obrigatórios? Não. Para foto oficial, um cílio discreto ajuda; para quem não gosta, máscara bem aplicada resolve.",
          "Posso trazer minha mãe junto? Sim, e é comum. Mãe de formanda também merece produção.",
        ],
      },
      {
        type: "quote",
        text: "A foto da formatura vai ficar na parede da casa dos seus pais por vinte anos. Vale ser você — bem cuidada, mas você.",
      },
    ],
  },
  {
    slug: "maquiagem-para-debutante-15-anos",
    title: "Maquiagem para debutante: como fazer 15 anos parecerem 15 anos",
    description:
      "O equilíbrio da maquiagem de debutante em São José do Rio Preto: marcante para a festa e para as fotos, sem envelhecer nem esconder a menina.",
    date: "2026-08-18",
    readingMinutes: 4,
    category: "Maquiagem Social",
    image: debutante,
    imageAlt:
      "Debutante de tiara e vestido rosa de pétalas com maquiagem delicada, produção de Viviane Sorroche.",
    body: [
      {
        type: "p",
        text: "O erro mais comum na maquiagem de 15 anos é tratar a debutante como uma noiva de 30. O resultado é uma menina que não se reconhece nas próprias fotos. A festa é grande, o vestido é grande, mas o rosto tem 15 anos — e deve continuar tendo.",
      },
      { type: "h2", text: "O que a pele jovem pede" },
      {
        type: "p",
        text: "Pele de adolescente costuma ser oleosa e às vezes tem acne. A tentação é cobrir tudo com base pesada, e é justamente o que faz a maquiagem parecer máscara. O caminho é preparar bem, corrigir só onde precisa e deixar a pele respirar no resto. Nas fotos, isso aparece como frescor.",
      },
      { type: "h2", text: "Onde colocar a intensidade" },
      {
        type: "list",
        items: [
          "Olhos: um esfumado suave com brilho no centro da pálpebra dá presença sem pesar.",
          "Pele: iluminador bem colocado faz mais pela foto do que qualquer contorno.",
          "Boca: tons rosados ou nude com brilho. Vermelho fechado e batom matte envelhecem.",
          "Cílios: postiço leve, só para a foto. Nada de volume dramático.",
        ],
      },
      { type: "h2", text: "A valsa, a troca de vestido e o retoque" },
      {
        type: "p",
        text: "Muitas festas de 15 anos em Rio Preto têm dois vestidos: um para a cerimônia e a valsa, outro para a balada. A maquiagem pode acompanhar essa troca com um retoque combinado — lábio mais intenso, um pouco mais de brilho — sem refazer nada. Se a família preferir, dá para deixar um kit de retoque separado para a própria debutante usar.",
      },
      { type: "h2", text: "A mãe da debutante" },
      {
        type: "p",
        text: "É uma das pessoas mais fotografadas da noite e quase sempre a última a pensar em si. Vale reservar o horário dela junto com o da filha. Atender as duas em sequência rende um dia mais tranquilo para a família inteira.",
      },
      {
        type: "quote",
        text: "Debutante bem maquiada é aquela cujas amigas dizem 'você está linda', não 'você está diferente'.",
      },
    ],
  },
  {
    slug: "maquiagem-madrinha-de-casamento",
    title: "Maquiagem de madrinha: elegante, sem competir com a noiva",
    description:
      "Como a madrinha se produz para um casamento em São José do Rio Preto: o que combinar com a noiva, como funciona atender o grupo e o que resiste à festa inteira.",
    date: "2026-08-14",
    readingMinutes: 4,
    category: "Noivas",
    image: esfumadoSuave,
    imageAlt:
      "Esfumado marrom suave com pele natural e colar de diamantes, maquiagem de madrinha por Viviane Sorroche.",
    body: [
      {
        type: "p",
        text: "A madrinha tem uma missão dupla: estar impecável e não roubar a cena. Parece simples, mas é o que separa uma maquiagem de madrinha bem pensada de uma maquiagem de festa qualquer.",
      },
      { type: "h2", text: "Alinhar com a noiva" },
      {
        type: "p",
        text: "Antes de qualquer decisão, pergunte à noiva se há paleta de cores para as madrinhas e que tipo de maquiagem ela vai usar. Se a noiva vai de pele natural e boca nude, uma madrinha de lábio vermelho fechado vai destoar em toda foto do altar. Não é regra rígida — é bom senso.",
      },
      { type: "h2", text: "Em grupo, tempo é tudo" },
      {
        type: "p",
        text: "Quando várias madrinhas se produzem no mesmo lugar, o cronograma precisa existir. Cada maquiagem social leva perto de uma hora; cinco madrinhas são uma tarde inteira. A ordem ideal é: quem mora mais longe primeiro, quem tem o penteado mais demorado por último, e a noiva num horário só dela.",
      },
      { type: "h2", text: "Casamento de dia ou de noite" },
      {
        type: "list",
        items: [
          "De dia, ao ar livre: pele leve, blush natural, nada de brilho excessivo — o sol já ilumina tudo.",
          "De noite, em salão: aqui cabe um esfumado mais presente e um lábio mais definido. Luz baixa engole maquiagem tímida.",
          "Cerimônia religiosa: sobriedade nos olhos. Igreja tem iluminação difícil e foto de longe.",
        ],
      },
      { type: "h2", text: "Duração" },
      {
        type: "p",
        text: "Madrinha chora, abraça, dança e tira foto até o fim. A maquiagem precisa ser à prova disso. Preparação de pele correta e selagem em camadas resolvem a maior parte; máscara e delineador à prova d'água resolvem o resto.",
      },
      {
        type: "quote",
        text: "A melhor maquiagem de madrinha é a que aparece bonita nas fotos da noiva — não a que precisa de foto própria.",
      },
    ],
  },
  {
    slug: "pele-oleosa-calor-rio-preto",
    title: "Pele oleosa e 38 graus: maquiagem que segura no calor de Rio Preto",
    description:
      "O que muda na preparação, nos produtos e na selagem para a maquiagem durar em pele oleosa nos dias mais quentes de São José do Rio Preto.",
    date: "2026-08-10",
    readingMinutes: 5,
    category: "Técnica",
    image: glow,
    imageAlt:
      "Pele bronzeada com acabamento iluminado e controlado, maquiagem para o calor por Viviane Sorroche.",
    body: [
      {
        type: "p",
        text: "Quem mora em São José do Rio Preto conhece a combinação: sol forte, ar seco, e pele que brilha antes do meio-dia. Somando a isso uma festa ao ar livre ou uma cerimônia à tarde, a maquiagem enfrenta a prova mais dura que existe. Não é caso de desistir do acabamento bonito — é caso de mudar o método.",
      },
      { type: "h2", text: "A preparação decide tudo" },
      {
        type: "list",
        items: [
          "Limpeza suave, nunca agressiva. Pele oleosa limpa demais produz ainda mais óleo em resposta.",
          "Hidratante leve, em gel ou sérum. Pular hidratação em pele oleosa é erro clássico.",
          "Primer com controle de oleosidade só na zona T, não no rosto inteiro.",
          "Tempo de absorção entre camadas. Pressa aqui é o que faz a base escorregar depois.",
        ],
      },
      { type: "h2", text: "Menos produto, mais camadas finas" },
      {
        type: "p",
        text: "Base grossa em pele oleosa vira uma placa que racha e desliza. O acabamento que dura é construído em camadas finas: base leve, corretivo pontual, pó solto fixando só onde há brilho. A pele fica com aspecto de pele — e é por isso que aguenta o dia.",
      },
      { type: "h2", text: "Onde iluminar e onde não" },
      {
        type: "p",
        text: "Pele oleosa não precisa fugir do glow. O segredo é colocar o brilho nos pontos altos — maçã do rosto, arco do cupido, canto interno do olho — e manter a zona T fosca. Assim o rosto parece luminoso, não suado.",
      },
      { type: "h2", text: "Selagem e retoque" },
      {
        type: "p",
        text: "Spray fixador aplicado em camadas, com tempo de secagem, é o que blinda a maquiagem contra o calor. Para o retoque durante o evento, o papel absorvente de óleo é melhor amigo que o pó: ele tira o brilho sem acumular produto. É a diferença entre uma maquiagem com oito horas e uma com oito horas que ainda parece nova.",
      },
      {
        type: "quote",
        text: "Pele oleosa não é problema. Pele oleosa tratada como se fosse seca é que é.",
      },
    ],
  },
  {
    slug: "maquiagem-para-ensaio-fotografico",
    title: "Maquiagem para ensaio fotográfico: o que a câmera vê e o olho não",
    description:
      "Como a maquiagem para ensaio muda em relação à de festa: textura, brilho, cor e o que combinar com o fotógrafo antes de marcar em São José do Rio Preto.",
    date: "2026-08-06",
    readingMinutes: 4,
    category: "Técnica",
    image: ondasHollywood,
    imageAlt:
      "Maquiagem para fotografia com pálpebra iluminada e lábios nude, cabelo em ondas, por Viviane Sorroche.",
    body: [
      {
        type: "p",
        text: "A lente não é um olho. Ela achata, reflete, exagera brilho e some com textura. Uma maquiagem linda ao vivo pode parecer pálida ou oleosa na foto, e uma maquiagem que parece forte no espelho pode ser exatamente o que a câmera precisa. Ensaio pede um raciocínio próprio.",
      },
      { type: "h2", text: "Converse com o fotógrafo antes" },
      {
        type: "list",
        items: [
          "Vai ser em estúdio, com flash, ou externa com luz natural? Muda o acabamento inteiro.",
          "Qual é o horário? Luz de fim de tarde perdoa muito; sol a pino não perdoa nada.",
          "Há um clima definido — editorial, romântico, clássico? A maquiagem acompanha.",
          "O fotógrafo faz retoque de pele na edição? Se sim, a base pode ser mais leve.",
        ],
      },
      { type: "h2", text: "O que a câmera pune" },
      {
        type: "p",
        text: "Protetor solar com filtro físico e pó com sílica refletem o flash e deixam o rosto branco na foto — o famoso flashback. Iluminador em excesso vira mancha de luz. Base com tom errado, que no espelho passa, na foto aparece como um rosto diferente do pescoço.",
      },
      { type: "h2", text: "O que a câmera pede" },
      {
        type: "p",
        text: "Um pouco mais de definição do que você usaria no dia a dia: sobrancelha preenchida, contorno de leve, cílios com volume. A foto reduz a intensidade de tudo em um ou dois tons. O que parece um pouco marcado ao vivo aparece equilibrado na imagem.",
      },
      { type: "h2", text: "Ensaio de gestante, de família, de casal" },
      {
        type: "p",
        text: "Cada um tem uma intenção. Gestante costuma pedir leveza e pele luminosa; ensaio de família pede naturalidade que não destoe das outras pessoas; casal pede harmonia com o parceiro. A maquiagem certa é a que serve à história que o ensaio conta.",
      },
      {
        type: "quote",
        text: "Para a câmera, a melhor maquiagem é a que a foto entrega como se não houvesse maquiagem nenhuma.",
      },
    ],
  },
  {
    slug: "curso-de-automaquiagem-vale-a-pena",
    title: "Curso de automaquiagem vale a pena? O que você leva para casa",
    description:
      "O que uma aula de automaquiagem em São José do Rio Preto ensina de verdade: seu rosto, seus produtos, uma rotina que você repete sozinha — e para quem faz sentido.",
    date: "2026-08-02",
    readingMinutes: 4,
    category: "Curso",
    image: radiante,
    imageAlt:
      "Pele iluminada, blush pêssego e sorriso aberto: resultado de maquiagem leve, por Viviane Sorroche.",
    body: [
      {
        type: "p",
        text: "Tem muita gente que compra produto caro, assiste a tutorial e continua não gostando do próprio resultado. O motivo é simples: o tutorial ensina o rosto da influenciadora, não o seu. Uma aula de automaquiagem existe para fechar essa distância.",
      },
      { type: "h2", text: "O que acontece na aula" },
      {
        type: "list",
        items: [
          "Análise do seu rosto: formato, tom de pele, subtom, o que você quer realçar.",
          "Triagem da sua nécessaire: o que serve, o que está vencido, o que falta de verdade.",
          "Uma rotina de dia a dia em poucos passos, feita por você, com correção em tempo real.",
          "Uma variação para a noite, partindo da mesma base.",
        ],
      },
      { type: "h2", text: "Para quem faz sentido" },
      {
        type: "p",
        text: "Para quem se maquia todo dia e quer fazer melhor em menos tempo. Para quem nunca se maquiou e não sabe por onde começar. Para quem mudou — de idade, de cabelo, de pele — e o que funcionava não funciona mais. E para quem quer parar de gastar em produto que não usa.",
      },
      { type: "h2", text: "Para quem não faz" },
      {
        type: "p",
        text: "Para quem quer aprender a fazer maquiagem de noiva ou de festa em si mesma. Isso é outra coisa: uma produção completa pede mão profissional, e a aula não substitui isso. O curso ensina o cotidiano — e é no cotidiano que a maioria das pessoas se olha no espelho.",
      },
      { type: "h2", text: "O que você leva" },
      {
        type: "p",
        text: "Uma lista de compras enxuta, uma sequência de passos que cabe em dez minutos e a memória na mão de ter feito você mesma, com acompanhamento. Isso fica. Tutorial, não.",
      },
      {
        type: "quote",
        text: "Automaquiagem bem ensinada não te transforma em maquiadora. Te transforma em alguém que gosta do que vê no espelho de manhã.",
      },
    ],
  },
  {
    slug: "maquiagem-a-domicilio-rio-preto-como-funciona",
    title: "Maquiagem a domicílio em Rio Preto: como funciona e quando vale mais",
    description:
      "Atendimento de maquiagem em casa, no hotel ou no local da festa em São José do Rio Preto e região: o que muda no horário, no preço e no preparo do espaço.",
    date: "2026-07-24",
    readingMinutes: 4,
    category: "Guia",
    image: dourado,
    imageAlt:
      "Esfumado dourado com brilho e coque alto, produção para festa por Viviane Sorroche.",
    body: [
      {
        type: "p",
        text: "Estúdio ou em casa? As duas opções são boas, e a escolha depende do seu dia. A vantagem de ser atendida em casa é óbvia — você não se desloca maquiada, no calor, correndo o risco de suar a produção antes do evento. A contrapartida é logística, e é sobre ela que vale entender.",
      },
      { type: "h2", text: "Onde atendo" },
      {
        type: "p",
        text: "Em toda São José do Rio Preto e nas cidades vizinhas — Mirassol, Bady Bassitt, Cedral e outras da região. Para casamentos, é comum a produção acontecer no hotel, na casa da família ou já no espaço da festa. Para maquiagem social, geralmente na casa da cliente.",
      },
      { type: "h2", text: "O que muda no horário" },
      {
        type: "p",
        text: "O deslocamento entra na conta. Uma maquiagem às 16h em Mirassol significa sair de Rio Preto por volta das 15h15. Em dias de muitos atendimentos, isso limita a agenda — por isso o atendimento a domicílio precisa ser marcado com mais antecedência do que o do estúdio.",
      },
      { type: "h2", text: "O que preparar no espaço" },
      {
        type: "list",
        items: [
          "Um lugar perto de janela, com luz natural. Luz de banheiro engana e distorce cor.",
          "Uma cadeira firme, sem braços, e uma mesa ou bancada para os produtos.",
          "Uma tomada acessível.",
          "Tempo. Quem vai ser maquiada precisa estar de rosto limpo e disponível no horário — não no meio de outra coisa.",
        ],
      },
      { type: "h2", text: "E o preço?" },
      {
        type: "p",
        text: "O atendimento em casa tem um valor de deslocamento que varia com a distância e o horário. Ele é informado junto com o orçamento, antes de você reservar — nunca depois. Para grupos, como madrinhas ou família de formanda, o deslocamento é diluído e costuma compensar bastante.",
      },
      {
        type: "quote",
        text: "Chegar ao evento sem ter passado pelo trânsito maquiada já é metade da produção preservada.",
      },
    ],
  },
  {
    slug: "cronograma-do-dia-da-noiva",
    title: "Cronograma do dia da noiva: a que horas começa a maquiagem?",
    description:
      "Como montar a linha do tempo do dia do casamento em São José do Rio Preto — cabelo, maquiagem, vestido, fotos — para ninguém chegar atrasada nem esperar demais.",
    date: "2026-07-15",
    readingMinutes: 5,
    category: "Noivas",
    image: roseIluminado,
    imageAlt:
      "Esfumado rosé com brilho e cílios volumosos em cliente de cabelo cacheado, maquiagem de noiva por Viviane Sorroche.",
    body: [
      {
        type: "p",
        text: "A pergunta mais prática que uma noiva faz é também a mais mal respondida: 'a que horas começa?'. A resposta certa vem de trás para a frente — a partir da hora da cerimônia — e leva em conta tudo o que acontece antes dela.",
      },
      { type: "h2", text: "Conte de trás para a frente" },
      {
        type: "list",
        items: [
          "Hora da cerimônia: o ponto fixo.",
          "Menos deslocamento até o local, com folga para trânsito.",
          "Menos 30 a 45 minutos de fotos da noiva pronta, se houver making of.",
          "Menos 20 a 30 minutos para vestir o vestido — com ajuda, e sem pressa.",
          "Menos 1h30 de maquiagem.",
          "Menos o tempo do penteado, que varia muito.",
        ],
      },
      {
        type: "p",
        text: "Para uma cerimônia às 18h em Rio Preto, com fotos e vestido, a maquiagem costuma começar por volta das 14h30 — e o cabelo antes disso. Casamento de manhã, às 10h, empurra tudo para a madrugada, e é aí que a experiência da equipe faz diferença.",
      },
      { type: "h2", text: "Cabelo antes ou depois?" },
      {
        type: "p",
        text: "Cabelo primeiro, na maioria dos casos. O penteado define a moldura do rosto e pode deixar resíduo de spray na pele, que atrapalha a base. A exceção é quando o penteado envolve muito calor ou umidade perto do rosto — aí vale combinar com a cabeleireira a ordem que preserva melhor as duas produções.",
      },
      { type: "h2", text: "Madrinhas e mãe da noiva" },
      {
        type: "p",
        text: "Elas entram antes da noiva no cronograma, para que a noiva seja a última a ser maquiada e a primeira a estar fresca para as fotos. Se são muitas pessoas, uma segunda profissional ou um segundo dia de atendimento pode ser o que mantém o dia leve.",
      },
      { type: "h2", text: "Folga é a regra" },
      {
        type: "p",
        text: "Todo cronograma bem feito tem trinta minutos que não pertencem a ninguém. Eles absorvem o atraso do buffet, o alfinete que faltou, a lágrima da mãe. Sem folga, tudo funciona — até não funcionar.",
      },
      {
        type: "quote",
        text: "Noiva que chega à cerimônia sem ter corrido é noiva que aparece nas fotos do jeito que a gente planejou.",
      },
    ],
  },
];

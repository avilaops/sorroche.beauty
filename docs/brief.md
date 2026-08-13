Dominios
sorrochebeauty.store
sorrochebeauty.love
sorroche.beauty

Sim. Pelo material, eu não faria um “site de maquiadora” convencional. Eu faria uma **experiência de marca premium**, quase no nível de site de beauty/fashion editorial: muito espaço, fotografia grande, tipografia sofisticada, microinterações e conversão para WhatsApp sem poluir a interface.

O 21st encaixa muito bem nisso: hoje a plataforma reúne componentes React/Tailwind, blocos de marketing, galleries, heroes, navegação, backgrounds e animações, e permite pesquisar/instalar componentes pelo MCP/CLI para agentes de código. ([21st][1]) A ideia é **não parecer template**: usar os componentes do 21st como matéria-prima e customizá-los profundamente.

Eu iria numa direção **Luxury Beauty + Editorial + Apple-like**, evitando rosa clichê, excesso de dourado, cards por toda parte ou visual genérico de salão.

# PROJETO: VIVIANE SORROCHE MAKEUP

Crie um website institucional extremamente sofisticado, clean, tecnológico, editorial e premium para:

**Viviane Sorroche — Maquiadora em São José do Rio Preto/SP**

O objetivo não é criar apenas mais um site de maquiadora.

Quero uma experiência digital de alto padrão, com nível visual comparável a marcas internacionais de beleza, moda e luxo.

O site deve transmitir:

* exclusividade;
* sofisticação;
* beleza;
* confiança;
* feminilidade sem clichês;
* técnica;
* personalidade;
* acabamento premium;
* modernidade;
* atendimento personalizado.

O resultado NÃO pode parecer:

* template pronto;
* landing page genérica de IA;
* site tradicional de salão de beleza;
* excesso de rosa;
* excesso de dourado;
* excesso de cards;
* site cheio de bordas;
* layout corporativo;
* interface SaaS;
* visual infantil;
* página carregada de elementos.

A fotografia e o trabalho da maquiadora precisam ser protagonistas.

---

# TECNOLOGIA

Construir utilizando:

* Next.js
* App Router
* TypeScript
* React
* Tailwind CSS
* componentes do 21st.dev
* shadcn/ui quando necessário
* Motion / Framer Motion para animações
* Lucide Icons
* next/image
* otimização para SEO
* Schema.org
* Open Graph
* responsividade completa
* acessibilidade
* performance elevada

O projeto deve ser componentizado e organizado para produção.

Se o projeto for hospedado como site estático, preparar também compatibilidade com `output: "export"`.

---

# 21ST.DEV

Usar o 21st.dev como principal referência de UI.

Se Magic MCP / 21st MCP estiver disponível no ambiente:

1. pesquisar componentes adequados no 21st antes de desenvolver componentes genéricos manualmente;
2. procurar principalmente:

   * premium hero;
   * fullscreen hero;
   * image reveal;
   * image gallery;
   * masonry gallery;
   * animated navbar;
   * floating navbar;
   * testimonials;
   * before/after;
   * text reveal;
   * scroll animations;
   * marquee;
   * lightbox;
   * premium CTA;
   * animated footer;
   * image cursor;
   * spotlight;
   * parallax sections;
3. instalar os melhores componentes;
4. adaptar completamente cores, espaçamento, tipografia, animação e composição à identidade da Viviane;
5. evitar aparência de componente simplesmente copiado.

Não misturar dezenas de efeitos diferentes.

A experiência precisa ser coerente, elegante e controlada.

---

# DIREÇÃO VISUAL

Criar uma estética:

**Luxury Beauty Editorial + Minimalism + Modern Technology**

Referências conceituais:

* editoriais de moda;
* campanhas de cosméticos premium;
* revistas de beleza;
* páginas minimalistas de produtos Apple;
* sites fashion de alto padrão;
* portfolios fotográficos contemporâneos.

O site deve ter bastante espaço negativo.

As fotografias devem ocupar grandes áreas da tela.

Evitar containers pequenos demais.

Evitar colocar tudo dentro de caixas.

---

# PALETA

Usar uma paleta extremamente refinada.

Base:

* off-white quente;
* branco;
* preto profundo;
* grafite;
* tons nude muito discretos.

Um tom champagne/bege sofisticado pode ser usado como detalhe.

Não utilizar dourado brilhante.

Não utilizar rosa forte como cor principal.

A cor nunca deve competir com as fotografias.

---

# TIPOGRAFIA

Usar combinação editorial sofisticada.

Sugestão:

**Headings**
serif editorial elegante.

Exemplos conceituais:

* Instrument Serif
* Cormorant Garamond
* Playfair Display

**Interface / corpo**
sans-serif moderna e limpa.

Exemplos:

* Inter
* Geist
* Manrope

Usar títulos grandes.

Em desktop, alguns headings podem atingir:

`clamp(4rem, 9vw, 9rem)`

Não exagerar em negrito.

O contraste deve vir principalmente de:

* escala;
* espaçamento;
* fotografia;
* composição.

---

# NAVEGAÇÃO

Navbar extremamente minimalista.

Desktop:

`Viviane Sorroche` à esquerda.

Centro ou direita:

* Início
* Portfólio
* Serviços
* Noivas
* Curso
* Sobre
* Contato

CTA destacado:

**Agendar horário**

A navbar deve começar transparente sobre o hero.

Após scroll:

* backdrop blur;
* fundo translúcido;
* pequena redução de altura;
* animação suave.

Mobile:

menu fullscreen elegante.

Não usar menu lateral convencional.

---

# HERO

O HERO precisa causar impacto imediatamente.

Utilizar fotografia profissional em alta resolução.

Preferencialmente:

imagem de maquiagem/cliente ocupando aproximadamente 55–65% da composição.

Texto editorial sobre área limpa.

Conteúdo:

**VIVIANE SORROCHE**

Eyebrow:

`MAKEUP ARTIST · SÃO JOSÉ DO RIO PRETO`

Headline sugerida:

**Beleza que continua sendo você.**

ou:

**Sua essência.
Só que inesquecível.**

Subtexto:

`Maquiagem personalizada para momentos que merecem ser lembrados.`

CTAs:

**Agendar maquiagem**

**Ver portfólio**

Adicionar indicação minimalista de scroll.

---

# ANIMAÇÃO DO HERO

Entrada cinematográfica muito sutil.

Sequência:

1. imagem aparece utilizando mask/reveal;
2. eyebrow entra;
3. headline aparece por palavras ou linhas;
4. descrição aparece;
5. CTAs entram;
6. indicador de scroll surge.

Nada deve saltar ou fazer animações extravagantes.

Animações:

* easing sofisticado;
* movimento lento;
* fade;
* blur pequeno;
* clipping;
* translate suave.

---

# MANIFESTO

Depois do hero, criar seção editorial extremamente clean.

Texto grande:

**Cada rosto conta uma história.**

Complemento:

`A maquiagem não precisa transformar quem você é. Ela pode simplesmente revelar aquilo que já existe.`

A palavra ou frase pode aparecer gradualmente conforme o scroll.

---

# PORTFÓLIO

Esta deve ser uma das áreas mais importantes do projeto.

Criar uma experiência visual de portfolio, não simplesmente um grid do Instagram.

Categorias:

* Maquiagem Blindada
* Maquiagem Rosê
* Maquiagem Clean
* Olho Marcado
* Esfumado Glam
* Maquiagem Glam
* Delineado
* Beauty
* Noivas

Utilizar:

* masonry;
* imagens em tamanhos diferentes;
* retratos verticais;
* imagens grandes;
* algumas imagens full-width.

Ao hover:

* leve zoom;
* nome do estilo;
* cursor personalizado opcional;
* animação muito discreta.

Ao clicar:

abrir lightbox fullscreen.

Permitir navegação:

`← anterior | próxima →`

No mobile:

swipe.

---

# FEATURED WORK

Criar algumas apresentações maiores entre os grids.

Exemplo:

imagem ocupando quase a tela inteira.

Ao lado:

**BRIDAL**

`Maquiagem pensada para durar do primeiro olhar até a última fotografia.`

CTA:

**Conhecer maquiagem para noivas**

Depois outra:

**SOCIAL**

Depois:

**BEAUTY**

Essa alternância deixa o site com aspecto de editorial.

---

# SERVIÇOS

Não usar vários cards pequenos genéricos.

Criar uma lista editorial grande.

01
**Maquiagem Social**

02
**Noivas**

03
**Maquiagem Blindada**

04
**Produções Especiais**

05
**Curso de Automaquiagem**

Cada item pode revelar fotografia ou pequeno texto ao hover.

Mobile:

accordion elegante.

---

# SEÇÃO NOIVAS

Esta seção deve receber destaque especial.

Layout emocional e sofisticado.

Imagem grande de noiva.

Texto:

**Seu dia.
Sua história.
Sua beleza.**

Descrição:

`Uma produção construída para você — pensando na sua personalidade, fotografia, iluminação, vestido e em cada momento do casamento.`

CTA:

**Quero conhecer o atendimento para noivas**

Adicionar detalhes como:

* preparação personalizada;
* maquiagem de longa duração;
* acabamento fotográfico;
* atendimento com horário reservado.

Não inventar serviços específicos que não tenham sido confirmados.

---

# CURSO DE AUTOMAQUIAGEM

Criar seção própria.

Headline:

**Aprenda a se maquiar.
Sem deixar de parecer você.**

Descrição:

`Uma experiência para entender produtos, técnicas e escolhas que realmente funcionam para o seu rosto e para a sua rotina.`

CTA:

**Quero saber sobre o curso**

Não inventar duração, preço ou conteúdo ainda não informado.

---

# SOBRE VIVIANE

Criar seção editorial humanizada.

Não fazer um card "Sobre mim".

Usar:

* retrato grande;
* composição assimétrica;
* texto com largura limitada.

Título:

**Por trás dos pincéis.**

Texto base:

`Viviane Sorroche é maquiadora em São José do Rio Preto/SP, com trabalho voltado para maquiagem social, noivas e automaquiagem.`

Adicionar espaço no CMS/dados do projeto para posteriormente ampliar a biografia.

---

# PROVA SOCIAL

Criar uma seção de depoimentos sofisticada.

Título:

**O resultado é visto.
A experiência é sentida.**

Utilizar testimonials do 21st.dev, mas customizados para a estética.

Não inventar avaliações.

Criar placeholders claramente marcados como conteúdo a cadastrar.

Estrutura preparada para:

* nome;
* texto;
* serviço;
* foto opcional;
* data;
* origem do depoimento.

---

# INSTAGRAM

Criar uma seção de Instagram extremamente visual.

Título:

**@vivianesorroche.makeup**

Não simplesmente copiar o grid padrão do Instagram.

Usar imagens com dimensões editoriais diferentes.

CTA:

**Acompanhar no Instagram**

Link:

[https://www.instagram.com/vivianesorroche.makeup/](https://www.instagram.com/vivianesorroche.makeup/)

Preparar integração futura com Instagram/Meta API, mas não exigir API nesta primeira versão.

---

# AGENDAMENTO

Esta é a conversão principal do site.

Criar seção extremamente limpa.

Headline:

**Vamos criar sua próxima produção?**

Texto:

`Conte para a Viviane sobre sua ocasião e consulte disponibilidade.`

CTA principal:

**Agendar pelo WhatsApp**

Telefone:

+55 17 99215-2917

Link:

`https://wa.me/5517992152917`

Mensagem pré-preenchida:

`Olá, Vivi! Vim pelo seu site e gostaria de consultar um horário para maquiagem.`

Não expor o número em dezenas de lugares.

Utilizar um CTA flutuante elegante no mobile.

---

# LOCALIZAÇÃO

Mostrar:

**São José do Rio Preto — SP**

Endereço informado:

Rua Luiz Antônio da Silveira, 1512
Vila Nossa Senhora da Paz
São José do Rio Preto - SP
CEP 15025-020
Brasil

Criar mapa minimalista ou botão para abrir a localização.

Não deixar um iframe pesado dominar visualmente a página.

---

# FOOTER

Footer sofisticado, minimalista e amplo.

Exemplo:

**Viviane Sorroche**

`Makeup Artist`

Links:

* Instagram
* WhatsApp
* Portfólio
* Serviços
* Noivas
* Curso
* Contato

Localização:

`São José do Rio Preto · SP`

Rodapé final:

`© [ano automático] Viviane Sorroche. Todos os direitos reservados.`

Não hardcodar o ano.

---

# EXPERIÊNCIA MOBILE

Mobile deve ser prioridade.

Não apenas reduzir o desktop.

Criar:

* tipografia responsiva;
* hero específico para portrait;
* galleries otimizadas para touch;
* swipe;
* imagens corretamente recortadas;
* menu fullscreen;
* CTA de WhatsApp facilmente acessível;
* áreas de toque adequadas;
* animações mais leves.

O site precisa parecer tão premium no iPhone quanto em um monitor desktop.

---

# MICROINTERAÇÕES

Adicionar detalhes sofisticados:

* magnetic buttons discretos;
* underline animado;
* image reveal;
* text reveal;
* navbar blur;
* transições de imagem;
* scroll progress extremamente discreto;
* cursor especial somente se não comprometer usabilidade;
* parallax mínimo em determinadas imagens;
* hover states refinados.

Não utilizar efeitos só porque existem.

Cada animação precisa ter função visual.

---

# PERFORMANCE

Prioridade máxima.

Implementar:

* `next/image`;
* AVIF/WebP;
* responsive images;
* lazy loading;
* preload somente da imagem LCP;
* fonts otimizadas;
* dynamic import quando necessário;
* evitar bibliotecas pesadas;
* evitar JavaScript desnecessário;
* respeitar `prefers-reduced-motion`.

Meta:

* excelente Core Web Vitals;
* Lighthouse alto;
* carregamento inicial rápido mesmo com muitas fotografias.

---

# SEO LOCAL

O projeto precisa ser preparado para buscas como:

* maquiadora São José do Rio Preto;
* maquiagem São José do Rio Preto;
* maquiadora para noivas São José do Rio Preto;
* maquiagem de noiva Rio Preto;
* maquiagem social Rio Preto;
* curso de automaquiagem São José do Rio Preto.

Criar:

* title;
* meta description;
* canonical;
* sitemap;
* robots.txt;
* Open Graph;
* Twitter Card;
* JSON-LD;
* dados estruturados de LocalBusiness/BeautySalon quando semanticamente apropriado;
* breadcrumbs quando necessário;
* alt text descritivo;
* páginas semanticamente estruturadas.

Não fazer keyword stuffing.

---

# OPEN GRAPH

Criar estrutura para:

`/og-image.jpg`

A imagem deverá apresentar:

* uma fotografia premium;
* Viviane Sorroche;
* Makeup Artist;
* São José do Rio Preto/SP.

Visual editorial e minimalista.

---

# ESTRUTURA DE DADOS

Não espalhar textos, telefones e links diretamente pelos componentes.

Centralizar informações em arquivos como:

`src/data/site.ts`

`src/data/services.ts`

`src/data/portfolio.ts`

Exemplo:

```ts
export const siteConfig = {
  name: "Viviane Sorroche",
  instagram: "@vivianesorroche.makeup",
  phone: "+5517992152917",
  city: "São José do Rio Preto",
  state: "SP",
}
```

Galeria também deve vir de array/JSON estruturado.

Preparar arquitetura para futuramente consumir CMS sem refatorar toda a interface.

---

# COMPONENTIZAÇÃO

Estrutura sugerida:

```text
components/
  layout/
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    Manifesto.tsx
    Portfolio.tsx
    Services.tsx
    Bridal.tsx
    Course.tsx
    About.tsx
    Testimonials.tsx
    Instagram.tsx
    BookingCTA.tsx
    Location.tsx
  ui/
  animations/
```

Não criar um único `page.tsx` gigantesco.

---

# DESIGN SYSTEM

Criar tokens para:

* colors;
* typography;
* spacing;
* radius;
* shadows;
* animation duration;
* easing;
* containers.

A maior parte da interface deve usar pouco ou nenhum border-radius.

Não usar `rounded-3xl` indiscriminadamente.

Não usar sombras fortes.

Não criar glassmorphism em tudo.

---

# FOTOGRAFIAS

As imagens fornecidas devem ser tratadas como conteúdo premium.

Não aplicar filtros pesados.

Preservar:

* tons de pele;
* cor da maquiagem;
* textura;
* iluminação original.

Utilizar:

`object-fit: cover`

com definição individual de `object-position` quando necessário para preservar o rosto e a maquiagem.

---

# ACESSIBILIDADE

Garantir:

* HTML semântico;
* contraste adequado;
* navegação por teclado;
* foco visível;
* aria labels quando necessários;
* alt text;
* reduced motion;
* botões reais para ações;
* links reais para navegação.

---

# EXPERIÊNCIA DE CARREGAMENTO

Evitar splash screen longa.

Pode haver uma introdução extremamente curta e refinada:

`VIVIANE SORROCHE`

com fade/reveal de aproximadamente 400–800ms somente na primeira carga, caso não prejudique LCP.

Se afetar performance, remover.

---

# DETALHE ESPECIAL

Quero um elemento memorável que diferencie o site.

Criar uma seção de portfolio chamada:

**THE LOOK**

Ao fazer scroll, o retrato permanece parcialmente fixo enquanto diferentes estilos de maquiagem aparecem lateralmente:

`CLEAN`

`ROSÉ`

`GLAM`

`BRIDAL`

`BOLD`

A imagem e o texto mudam de maneira cinematográfica conforme o usuário avança.

Em mobile, transformar isso em uma experiência horizontal/swipe elegante.

Usar essa seção como assinatura visual do projeto.

---

# REGRA PRINCIPAL

Antes de adicionar qualquer componente pergunte:

**isso deixa a fotografia e o trabalho da Viviane mais valorizados?**

Se não deixar, não adicionar.

Menos elementos.

Mais impacto.

Menos decoração.

Mais fotografia.

Menos interface.

Mais experiência.

---

# RESULTADO ESPERADO

Ao abrir o site, o visitante deve ter a sensação de que está entrando no universo de uma profissional premium, e não simplesmente vendo um catálogo de serviços.

O site precisa provocar:

**"eu quero que ela faça minha maquiagem."**

A hierarquia visual deve conduzir naturalmente:

**Impacto → Portfólio → Desejo → Confiança → Serviço → Agendamento.**

Implemente a primeira versão completa seguindo esse conceito, utilizando componentes reais do 21st.dev sempre que agregarem qualidade, mas adaptando-os profundamente para que o resultado tenha identidade própria.

Um detalhe que eu considero muito importante: eu colocaria o **portfólio antes de ficar explicando muito os serviços**. Nesse negócio, a imagem vende antes do texto. As três telas que você mandou já mostram que ela tem material suficiente para construir uma experiência muito mais próxima de um **editorial de beleza** do que de uma landing page comum. A seção “THE LOOK” do prompt pode ser justamente o elemento que faça esse site parecer realmente diferente.

E tecnicamente a direção faz sentido com o ecossistema atual do 21st: ele tem componentes e templates React, Tailwind, galleries, heroes e blocos de marketing, além da integração MCP para pesquisar e trazer essas peças diretamente para um agente de desenvolvimento. ([21st][1])

[1]: https://21st.dev/?utm_source=chatgpt.com "Discover community-made UI components | 21st"


Dá — e, para ela, eu acho até mais interessante pensar em **site + aplicação web**, em vez de fazer somente um portfólio bonito.

O site seria a vitrine. A aplicação seria o **sistema operacional da maquiadora**, cuidando de agenda, clientes, noivas, pagamentos, histórico de maquiagem e relacionamento.

Eu estruturaria assim:

### 1. Site público

Continua com aquela proposta extremamente premium que montamos:

* portfólio;
* maquiagens;
* noivas;
* automaquiagem;
* sobre;
* Instagram;
* localização;
* CTA para agendamento.

Mas o botão principal poderia ser:

**Agendar maquiagem**

em vez de simplesmente jogar direto para o WhatsApp.

---

# 2. Aplicação de agendamento

A cliente entra numa experiência parecida com:

**Escolha sua produção → data → horário → informações → sinal → confirmação**

Por exemplo:

**Serviço**

* Maquiagem social
* Maquiagem blindada
* Noiva
* Curso de automaquiagem
* Outros serviços cadastrados pela Viviane

**Depois:**

* escolher data;
* mostrar horários realmente disponíveis;
* informar local;
* informar ocasião;
* anexar referência de maquiagem;
* informar horário do evento;
* observações;
* pagamento/sinal;
* confirmação.

E depois disso pode existir:

> Agendamento confirmado ✨
> 17 de agosto · 14h00
> Maquiagem Social

Com botão para:

**Adicionar ao calendário**

e

**Falar com a Vivi**

---

# 3. Área da cliente

Aqui começaria a ficar realmente diferente dos concorrentes.

Cada cliente teria:

**Minha conta**

com:

* próximos agendamentos;
* histórico;
* reagendar;
* cancelar conforme política;
* comprovantes;
* pagamentos;
* endereço;
* referências enviadas;
* fotos;
* maquiagens favoritas.

E uma funcionalidade que eu acho excelente:

## Meu Look

Depois de cada atendimento, a Viviane poderia registrar:

**Look realizado**

* Rosé
* Clean
* Glam
* Delineado
* Blindada
* Bridal

E ainda:

* produtos utilizados;
* tom/base;
* acabamento;
* cílios utilizados;
* observações;
* fotografia final.

Na próxima vez, a cliente poderia simplesmente clicar:

> **Quero repetir esse look**

Isso é muito bom para fidelização.

---

# 4. Beauty Profile

Essa seria uma das funcionalidades mais interessantes.

A cliente monta um perfil:

**Meu perfil de beleza**

* tipo de pele;
* tonalidade;
* subtom;
* sensibilidade;
* alergias;
* preferências;
* gosta/não gosta;
* acabamento preferido;
* cobertura preferida;
* sobrancelha;
* olhos;
* cílios;
* batom;
* referências.

Não precisa fazer diagnóstico dermatológico; seria somente **preferências e informações relevantes para o atendimento de maquiagem**.

Isso dá uma experiência muito premium.

---

# 5. Jornada especial para noivas

Aqui dá para fazer algo muito diferenciado.

Ao contratar um atendimento de noiva:

## Minha Jornada Bridal

Uma timeline:

**Reserva**

→ **Briefing**

→ **Referências**

→ **Teste de maquiagem**

→ **Look aprovado**

→ **Casamento**

→ **Finalizado**

A noiva poderia ter dentro do sistema:

* data do casamento;
* local;
* horário da cerimônia;
* horário da maquiagem;
* vestido;
* penteado;
* inspirações;
* referências;
* maquiagem das madrinhas;
* acompanhantes;
* cronograma;
* observações;
* fotos do teste;
* look escolhido.

Isso posicionaria a Viviane muito acima de um simples perfil de Instagram.

---

# 6. Moodboard

Uma funcionalidade visual:

## Meu Moodboard

A cliente envia referências do Pinterest/Instagram ou faz upload de imagens.

Ela pode marcar:

❤️ Gostei
👁 Quero algo parecido
❌ Não gosto

A Viviane vê tudo antes do atendimento.

Para uma maquiadora isso tem bastante valor operacional.

---

# 7. Portal administrativo da Viviane

E do lado dela teria um painel próprio.

### Dashboard

Mostrar:

**Hoje**

* 09:00 — Amanda — Social
* 11:30 — Beatriz — Blindada
* 15:00 — Camila — Noiva
* 18:00 — Júlia — Social

Mais indicadores:

* agendamentos hoje;
* agendamentos no mês;
* receita;
* clientes novas;
* clientes recorrentes;
* ticket médio;
* serviços mais vendidos;
* horários mais procurados.

---

# 8. Agenda inteligente

Uma agenda realmente boa.

Visual:

**Dia / Semana / Mês**

Com:

* horários disponíveis;
* horários bloqueados;
* intervalo;
* almoço;
* férias;
* atendimento externo;
* duração diferente por serviço;
* tempo de preparação;
* limite de atendimentos.

A Vivi consegue clicar:

**Bloquear horário**

ou:

**Criar agendamento manual**

---

# 9. CRM de clientes

Uma área:

## Clientes

Com:

* nome;
* WhatsApp;
* Instagram;
* aniversário;
* número de atendimentos;
* gasto total;
* último atendimento;
* próximo atendimento;
* maquiagem favorita;
* observações;
* fotos;
* tags.

Tags:

`Noiva`

`Cliente recorrente`

`Social`

`Curso`

`VIP`

---

# 10. WhatsApp integrado

Isso seria muito forte.

Depois que alguém agenda:

**WhatsApp automático**

> Oi, Ana ✨ Seu horário com a Vivi está confirmado para sexta-feira, às 15h.

No dia anterior:

> Amanhã é seu dia ✨ Seu atendimento está marcado para 15h.

Depois:

> Espero que tenha amado sua produção 🤍
> Como foi sua experiência?

E ela pode receber link para avaliação.

Isso pode ser integrado via **WhatsApp Business Platform + n8n**.

---

# 11. Lista de espera

Outra funcionalidade muito boa.

Se sábado estiver lotado:

> **Entrar na lista de espera**

Se alguém cancelar, o sistema pode avisar automaticamente.

Isso evita perder cliente.

---

# 12. Pagamento e sinal

Pode existir:

**Valor do serviço:** R$ X
**Sinal:** R$ X
**Restante:** R$ X

Status:

`Aguardando sinal`

`Confirmado`

`Pago`

`Cancelado`

Pode integrar futuramente com Mercado Pago, Stripe ou outro gateway escolhido.

---

# 13. Curso de automaquiagem

O mesmo sistema pode ter uma mini área educacional.

### Meu Curso

* módulos;
* vídeos;
* materiais;
* progresso;
* checklist;
* produtos recomendados;
* certificado;
* próximas aulas.

Assim ela não fica limitada somente a atendimento presencial.

---

# 14. Programa de relacionamento

Depois pode entrar:

## Vivi Club

A cliente acumula relacionamento, não necessariamente pontos financeiros.

Exemplo:

**Beauty Member**

* histórico de produções;
* aniversário;
* novidades;
* prioridade de agenda;
* lançamentos;
* eventos;
* benefícios definidos pela Viviane.

Sem transformar a marca premium num sistema de cupons.

---

# 15. PWA

Eu faria a aplicação como **PWA**.

A cliente acessa pelo navegador e pode instalar no celular:

**Viviane Sorroche**

com ícone próprio.

Ela abre e vê:

> Boa tarde, Mariana ✨
> Seu próximo atendimento é em 3 dias.

Isso dá uma percepção de aplicativo sem precisar começar criando iOS + Android nativos.

---

## Eu imaginaria o ecossistema assim

```text
sorroche.beauty
│
├── Site
│   ├── Início
│   ├── Portfolio
│   ├── Serviços
│   ├── Bridal
│   ├── Curso
│   └── Agendar
│
├── app.sorroche.beauty
│
├── Área da Cliente
│   ├── Agenda
│   ├── Meu Look
│   ├── Beauty Profile
│   ├── Moodboard
│   ├── Pagamentos
│   └── Bridal Journey
│
└── Painel Viviane
    ├── Dashboard
    ├── Agenda
    ├── Clientes
    ├── Serviços
    ├── Noivas
    ├── Financeiro
    ├── Portfólio
    ├── Cursos
    ├── Automações
    └── Configurações
```

### E tem uma ideia que eu colocaria como diferencial principal:

**"Beauty Passport"**

Cada cliente teria um verdadeiro passaporte digital das maquiagens feitas pela Viviane.

Exemplo:

> **Beauty Passport — Mariana**
>
> 4 produções realizadas
>
> **17 AGO 2026**
> Soft Rosé Glam
>
> **04 MAI 2026**
> Clean Beauty
>
> **12 JAN 2026**
> Brown Glam

Abre cada uma e aparecem foto, estilo, preferências e informações salvas.

Isso transforma uma relação que hoje termina depois da maquiagem em uma **experiência contínua de marca**.

Eu pensaria no produto não como “sistema para maquiadora”, mas como uma espécie de **Beauty OS da Viviane**: o site atrai, o portfolio gera desejo, o app agenda, o Beauty Passport fideliza, o CRM organiza e o WhatsApp traz a cliente de volta.

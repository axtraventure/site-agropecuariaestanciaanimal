# Blueprint Visual — Análise do Modelo de Referência

Documento descritivo da estrutura visual, hierarquia de seções, componentes e padrões de design com base nos arquivos de referência disponíveis em `/04-referencia-visual/` (`aquaclean-header.jpg`, `homepage.jpg` e `aquaclean-footer.jpg`).

---

## 1. Header (Cabeçalho)

### Estrutura e Elementos Presentes
O cabeçalho é dividido em duas barras horizontais sobrepostas:

1. **Barra Superior (Top Bar):**
   - **Fundo:** Verde petróleo escuro.
   - **Lado Esquerdo:**
     - Ícone de telefone + número de contato (+6221.2002.2013).
     - Ícone de relógio + horário de funcionamento (09.00 - 21.00).
   - **Lado Direito:**
     - 4 ícones circulares de redes sociais (Facebook, Instagram, Twitter/X e YouTube).

2. **Barra de Navegação Principal (Main Navigation Bar):**
   - **Fundo:** Branco / off-white.
   - **Lado Esquerdo:** Logotipo da empresa composto por símbolo gráfico à esquerda + tipografia do nome à direita.
   - **Centro / Direita:** Menu horizontal composto por 5 itens de navegação ("Home", "About Us", "Services ⌵", "Contact Us", "Pages ⌵").
   - **Extrema Direita:** Botão de ação (CTA) no estilo pílula arredondada em verde escuro ("GET STARTED").

### Fixação e Comportamento Mobile
- **Fixação:** Barra de navegação principal configurada como fixa no topo (*sticky*), mantendo o menu e o botão visíveis durante a rolagem.
- **Comportamento Mobile:** Em telas menores, a barra superior oculta ou reorganiza os dados secundários e os links centrais do menu se convertem em um botão do tipo hambúrguer (*toggle menu*), mantendo a logo e o botão de contato acessíveis.

---

## 2. Ordem Exata das Seções (de Cima para Baixo)

| Nº | Seção | Tipo Estrutural | Descrição Funcional |
|---|---|---|---|
| **0** | **Header** | Top bar + Nav sticky | Contatos superiores, logo, menu e botão CTA principal |
| **1** | **Hero Section** | Hero Banner com card flutuante (*overlap*) | Imagem full-width, título H1, parágrafo, botão e caixa flutuante de agendamento/contato rápido |
| **2** | **Quem Somos (About Us)** | Seção bipartida (2 colunas) | Texto institucional e 2 itens com ícone à esquerda; foto principal com badge de experiência à direita |
| **3** | **Logos de Marcas / Parceiros** | Grid de logotipos (*Trust Bar*) | Título centralizado e grid de 7 logotipos/selos institucionais |
| **4** | **Banner de Valor / Destaque** | Banner full-width com overlay | Imagem de fundo com filtro escuro, tag superior, título central e texto de apoio |
| **5** | **Apresentação Composta & Contato** | Seção bipartida assimétrica | Composição de fotos + card de avaliação flutuante à esquerda; texto, 2 blocos de telefone e botão à direita |
| **6** | **Grid de Serviços** | Grid de cards (2x3) | Cabeçalho centralizado seguido por 6 cards com foto, ícone flutuante, título, descrição e botão individual |
| **7** | **Como Funciona (Processo)** | Linha de processo horizontal (4 passos) | Cabeçalho e 4 círculos conectados por linha orgânica tracejada indicando o passo a passo |
| **8** | **Banner de Vídeo / Mídia** | Banner full-width com botão play | Fundo fotográfico escuro com botão circular de reprodução, título, texto e link/botão |
| **9** | **Diferenciais / Benefícios** | Grid de cards informativos (2x3) | Cabeçalho centralizado e 6 cards horizontais com ícone linear, título e parágrafo |
| **10** | **Depoimentos (Avaliações)** | Grid de cards com classificação | Cabeçalho com 5 estrelas douradas e 3 cards com avatar, texto em citação, nome e paginação |
| **11** | **Banner de Chamada Final (CTA)** | Banner institucional com card/bloco de ação | Imagem de fundo com profissional e bloco de conversão à direita com chamada e botão |
| **12** | **Footer** | Rodapé em 4 colunas + Barra de copyright | Informações institucionais, links, contatos diretos, newsletter e faixa final de direitos autorais |

---

## 3. Estrutura Detalhada de Conteúdo de Cada Seção

### Seção 1 — Hero Section
- **Tipo:** Hero banner com imagem fotográfica full-width e caixa flutuante de contato/agendamento sobreposta na base.
- **Conteúdo Principal:**
  - Imagem de fundo de alta resolução com profissionais em atendimento, escurecida no lado esquerdo por overlay.
  - Título principal (H1) em branco, sans-serif, grande porte.
  - Parágrafo descritivo curto em tom claro.
  - Botão de ação (CTA) arredondado em branco com texto escuro ("DISCOVER MORE").
- **Card Flutuante Sobreposto (Overlap Box):**
  - Card retangular com bordas arredondadas dividido em 2 áreas:
    - **Bloco da esquerda (verde escuro):** 2 linhas de contato direto (ícone de fone + "CUSTOMER SERVICES" + número de telefone; ícone de envelope + "SEND A MESSAGE" + endereço de e-mail).
    - **Bloco da direita (branco):** Formulário horizontal com 5 campos (Nome, Telefone, Categoria/Serviço, Data, Horário) e botão de ação ("BOOKING NOW!").

### Seção 2 — Quem Somos (About Us / Journey)
- **Tipo:** Seção bipartida em duas colunas.
- **Coluna Esquerda (Conteúdo):**
  - Kicker/Tag superior em caixa alta: "WHO WE ARE".
  - Título H2: "Driven by Excellence: AquaClean Journey".
  - Parágrafo explicativo.
  - 2 itens de destaque dispostos verticalmente, cada um com:
    - Ícone temático dentro de círculo verde água suave.
    - Título do diferencial em negrito.
    - Parágrafo de detalhamento curto.
- **Coluna Direita (Mídia):**
  - Foto retangular de serviço com cantos arredondados.
  - Badge circular flutuante sobreposto no canto superior direito: fundo branco, número "15+" em destaque verde e texto "YEARS OF EXPERIENCE" em caixa alta.

### Seção 3 — Logos de Confiança / Parceiros
- **Tipo:** Faixa horizontal de logos (*trust bar*).
- **Conteúdo:**
  - Título centralizado: "Trusted world-class brands and organizations of all sizes.".
  - 7 cards/botões de logos com fundo cinza claro e cantos arredondados (organizados em 4 logos na linha superior e 3 logos centralizados na linha inferior).

### Seção 4 — Banner de Valor / Destaque
- **Tipo:** Banner horizontal de largura total com imagem e sobreposição escura.
- **Conteúdo Centralizado:**
  - Kicker/Tag superior em caixa alta: "OUR VALUE".
  - Título H2 em branco: "AquaClean: Because Your Car Deserves the Best.".
  - Parágrafo descritivo em tom claro centralizado.

### Seção 5 — Apresentação Composta & Contato
- **Tipo:** Layout assimétrico em duas colunas.
- **Coluna Esquerda:**
  - Mosaico de 2 fotos verticais lado a lado com cantos arredondados.
  - Card de avaliação flutuante (*testimonial badge*) sobreposto na parte inferior: 5 estrelas amarelas, citação curta de cliente, nome e cargo/função.
- **Coluna Direita:**
  - Título institucional: "AquaClean: Because Your Car Deserves the Best.".
  - Parágrafo institucional.
  - 2 blocos de contato em formato pílula/linha com ícone circular verde suave, rótulo ("CUSTOMER SERVICES" / "ONLINE BOOKING") e número em destaque.
  - Botão de ação tipo pílula ("DISCOVER MORE").

### Seção 6 — Catálogo de Serviços
- **Tipo:** Grid regular de 6 cards de serviços (disposição 3 colunas x 2 linhas).
- **Cabeçalho:**
  - Kicker: "OUR SERVICES".
  - Título H2: "AquaClean: Keeping Your Car Fresh and Flawless.".
  - Parágrafo de apoio.
- **Estrutura de Cada Card (6 unidades):**
  - Foto temática retangular no topo com cantos superiores arredondados.
  - Ícone circular branco flutuante com borda suave posicionado no centro, sobrepondo a borda inferior da foto.
  - Título do serviço em negrito.
  - Texto descritivo breve.
  - Botão de ação em formato pílula com fundo escuro e seta indicativa ("LEARN MORE →").

### Seção 7 — Como Funciona (Processo Passo a Passo)
- **Tipo:** Linha do tempo / processo horizontal com 4 etapas.
- **Cabeçalho:**
  - Kicker: "HOW IT WORKS".
  - Título H2: "Driving Elegance Starts with AquaClean.".
- **Estrutura dos Itens:**
  - Linha curva tracejada ao fundo interligando as 4 etapas.
  - 4 círculos grandes preenchidos em tom verde água suave, cada um contendo:
    - Ícone linear ilustrativo no centro.
    - Etiqueta do passo ("STEP 1", "STEP 2", "STEP 3", "STEP 4").
    - Nome da ação correspondente abaixo do círculo.

### Seção 8 — Banner de Vídeo / Mídia em Destaque
- **Tipo:** Banner full-width escuro focado em mídia interativa.
- **Conteúdo Centralizado:**
  - Botão circular de "Play" branco com ícone centralizado escuro.
  - Título H2 em texto branco: "AquaClean: Making Every Drive Memorable.".
  - Texto descritivo em tom claro.
  - Botão de ação ("BOOK NOW →").

### Seção 9 — Diferenciais / Por Que Nos Escolher
- **Tipo:** Grid de 6 cards de benefícios (disposição 3 colunas x 2 linhas).
- **Cabeçalho:**
  - Kicker: "WHY CHOOSE US".
  - Título H2: "Outstanding Car Wash Service Excellence".
- **Estrutura de Cada Card (6 unidades):**
  - Bloco retangular com fundo cinza suave e cantos arredondados.
  - Ícone linear no canto superior esquerdo (relógio, velocímetro, escudo de proteção, folha ecológica, satisfação e brilho).
  - Título do diferencial em negrito.
  - Parágrafo descritivo de 2 a 3 linhas.

### Seção 10 — Depoimentos / Avaliações
- **Tipo:** Grid/carrossel com 3 cards de depoimento.
- **Cabeçalho:**
  - Kicker: "TESTIMONIAL".
  - Título H2: "Client Feedback & Reviews".
  - Classificação visual com 5 estrelas amarelas centralizadas.
- **Estrutura de Cada Card (3 unidades):**
  - Card retangular com fundo cinza suave e cantos arredondados.
  - Foto de perfil (avatar circular) no topo.
  - Depoimento do cliente em texto com aspas/itálico.
  - Nome do autor em destaque colorido e cidade/bairro em caixa alta abaixo.
- **Navegação:**
  - Três pontos (*dots*) de paginação centralizados na base da seção.

### Seção 11 — Banner de Chamada para Ação Final (CTA)
- **Tipo:** Banner de fechamento com foto institucional de largura total e bloco de conversão à direita.
- **Conteúdo da Área Direita:**
  - Título H2 em texto branco: "Join Our Loyalty Program for Exclusive Discounts on Your Next Car Wash.".
  - Parágrafo explicativo.
  - Botão de ação pílula com fundo branco e texto escuro ("DISCOVER MORE").

---

## 4. Estilo Visual Identificado

### Cores Predominantes
- **Cor Primária:** Verde petróleo / verde floresta escuro (`#2d4a43` / `#1e3831`), utilizado na barra superior, botões principais de ação e caixas institucionais de destaque.
- **Cor Secundária / Acento:** Verde água pastel / menta suave (`#7eb5aa` / `#88c0b8`), aplicada em ícones circulares, círculos dos passos do processo e barra de copyright.
- **Neutro Claro (Fundo Principal):** Branco puro (`#ffffff`) intercalado com cinza claro/off-white (`#f4f6f6` / `#f8f9f9`) para diferenciar seções e cards de benefícios.
- **Neutro Escuro (Tipografia):** Grafite escuro / carvão (`#1a202c` / `#2d3748`) para garantir alto contraste e legibilidade.
- **Cor de Apoio Social:** Amarelo dourado (`#f59e0b` / `#fbbf24`), utilizado nas 5 estrelas das avaliações e selos de prova social.

### Tipografia
- **Família:** Sans-serif moderna, geométrica e limpa (similar a *Plus Jakarta Sans*, *Outfit* ou *Poppins*).
- **Títulos (H1 e H2):** Pesados (Bold/Extra-Bold, peso 700 a 800), com espaçamento proporcional e kerning equilibrado.
- **Subtítulos e Kickers (Tags):** Caixa alta (*uppercase*), tamanho reduzido, peso semibold (600) e espaçamento entre letras aumentado (*letter-spacing* positivo).
- **Corpo de Texto:** Peso regular (400) a médio (500), tom cinza médio/escuro com altura de linha confortável (line-height ~1.6).

### Espaçamento entre Seções
- Ritmo vertical generoso e consistente, com respiros entre 80px e 100px nas telas de desktop.
- Alternância visual de planos: seções com fundo branco seguidas por seções com fundo cinza claro ou banners fotográficos escuros de largura total.

### Estilo de Cards, Botões e CTAs
- **Botões e CTAs:** 
  - Formato predominante em pílula (*fully rounded* / `border-radius: 9999px`).
  - Botões primários com fundo verde escuro e texto branco.
  - Botões secundários ou sobre fundos escuros em branco com texto verde/escuro.
  - Botões de cards frequentemente acompanhados por seta indicativa ("LEARN MORE →").
- **Cards:**
  - Cantos arredondados médios (`border-radius: 12px` a `16px`).
  - Sombras suaves e difusas (*soft drop shadows*) nos cards flutuantes.
  - Fundo cinza suave (`#f4f6f6`) sem contorno rígido para diferenciais e depoimentos, e fundo branco com imagem para serviços.
- **Badges:**
  - Elementos ovais e circulares brancos com sombra sutil sobrepostos a imagens para evidenciar tempo de experiência e notas de clientes.

### Tratamento de Imagens
- **Banners:** Imagens fotográficas realistas de largura total (*full-width*) com camadas de sobreposição (*overlays*) escuras para assegurar legibilidade ao texto branco sobreposto.
- **Fotos de Conteúdo:** Fotos retangulares ou quadradas com cantos arredondados expressivos (`border-radius: 16px` a `24px`).
- **Fotos de Serviços:** Imagens cortadas horizontalmente ocupando toda a largura superior do card com bordas arredondadas nos cantos superiores.
- **Avatares:** Imagens fotográficas recortadas em formato circular perfeito (`border-radius: 50%`).

---

## 5. Footer (Rodapé)

### Elementos Presentes e Ordem Estrutural
O rodapé é estruturado em duas partes principais:

1. **Bloco Superior do Rodapé (Fundo cinza suave / off-white):**
   - Dividido em 4 colunas horizontais equilibradas:
     - **Coluna 1 — Identidade Institucional:** Logotipo "AquaClean" com símbolo gráfico, texto explicativo breve sobre a atuação da empresa e fileira com 4 ícones circulares de redes sociais.
     - **Coluna 2 — Suporte / Links Rápidos:** Título em negrito ("Support") seguido por lista vertical de 5 links institucionais (Customer Support, FAQ Section, Online Support, Technical Support, Delivery Support).
     - **Coluna 3 — Contato e Endereço:** Título em negrito ("Get in Touch") seguido por 3 blocos com ícones lineares:
       - Ícone de marcador de mapa + Endereço físico completo.
       - Ícone de envelope + E-mails de suporte.
       - Ícone de telefone + Telefones de contato e fax.
     - **Coluna 4 — Inscrição / Newsletter:** Título em negrito ("News Letter"), texto convidativo breve e formulário composto por campo de entrada de e-mail ("Your Email") com botão pílula acoplado ("SIGN UP").

2. **Barra Inferior do Rodapé (Sub-footer — Fundo verde água suave):**
   - **Lado Esquerdo:** Texto legal de direitos autorais ("Copyright © 2023 AquaClean, All rights reserved. Powered by MoxCreative.").
   - **Lado Direito:** Links horizontais de termos e políticas separados por ponto central ("Term Of Services • Privacy Policy • Cookie Policy").

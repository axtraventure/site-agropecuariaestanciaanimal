# Guia de Imagens — Agropecuária Estância Animal

Este documento relaciona todas as imagens utilizadas no site One Page, especificando a seção onde estão inseridas, as dimensões recomendadas, os formatos adotados e as orientações para substituição futura pelos arquivos definitivos do cliente.

---

## Tabela Completa de Imagens do Projeto

| Arquivo | Seção | Tamanho (px) | Formato | Descrição |
|---|---|---|---|---|
| `favicon-32x32.png` | Head / Navegador | 32x32 | PNG | Favicon clássico gerado a partir do símbolo e das cores da empresa (#247A38 e #F4C430). |
| `favicon-16x16.png` | Head / Navegador | 16x16 | PNG | Favicon para abas de navegador em baixa resolução gerado a partir da marca. |
| `apple-touch-icon.png` | Head / Dispositivos Apple | 180x180 | PNG | Ícone de alta densidade para telas retina e atalhos em dispositivos iOS e Android. |
| `og-image.jpg` | Head (Open Graph / Redes Sociais) | 1200x630 | JPG | Imagem de compartilhamento social com logo da Estância Animal, slogan e localização. |
| `logo.png` | Header e Footer | 400x100 | PNG | Logotipo principal com fundo transparente, símbolo e nome "Agropecuária Estância Animal". |
| `hero-bg.webp` | Hero (`#hero`) | 1920x800 | WebP | Foto de alta qualidade da fachada ou interior da loja, mostrando variedade e atendimento. |
| `sobre-loja.webp` | Quem Somos (`#sobre`) | 800x600 | WebP | Foto do ambiente da loja física ou equipe em atendimento no Bairro Bela Vista. |
| `valor-banner-bg.webp` | Banner de Valor (`#valor`) | 1920x600 | WebP | Foto panorâmica com animais, rações ou área de jardinagem para banner de largura total. |
| `apresentacao-1.webp` | Apresentação Composta (`#apresentacao`) | 600x700 | WebP | Foto vertical mostrando cuidados com pet ou atendimento veterinário carinhoso. |
| `apresentacao-2.webp` | Apresentação Composta (`#apresentacao`) | 600x700 | WebP | Foto vertical exibindo prateleiras de rações, brinquedos e produtos pet. |
| `servico-pet-shop.webp` | Serviços (`#servicos` / `#pet-shop`) | 600x400 | WebP | Foto do setor de pet shop com rações de cães/gatos e acessórios de higiene. |
| `servico-veterinario.webp` | Serviços (`#servicos` / `#veterinario`) | 600x400 | WebP | Foto de consultório ou atendimento veterinário dedicado para cães e gatos. |
| `servico-banho-tosa.webp` | Serviços (`#servicos` / `#banho-e-tosa`) | 600x400 | WebP | Foto de cão sendo banhado ou tosquiado com higiene e carinho no espaço de estética animal. |
| `servico-agropecuaria.webp` | Serviços (`#servicos` / `#agropecuaria`) | 600x400 | WebP | Foto de alimentos, rações para animais de criação e insumos agropecuários. |
| `servico-ferragens.webp` | Serviços (`#servicos` / `#ferragens`) | 600x400 | WebP | Foto do setor de ferramentas manuais, parafusos, mangueiras e utilidades domésticas. |
| `servico-jardinagem.webp` | Serviços (`#servicos` / `#jardinagem`) | 600x400 | WebP | Foto de mudas de plantas, vasos, adubos, terra vegetal e ferramentas de poda. |
| `video-banner-bg.webp` | Banner de Vídeo (`#video`) | 1920x700 | WebP | Foto em alta resolução de tutores interagindo com animais para chamada de vídeo institucional. |
| `depoimento-1.webp` | Avaliações (`#depoimentos`) | 200x200 | WebP | Foto circular de cliente real para o depoimento sobre "Atendimento Atencioso". |
| `depoimento-2.webp` | Avaliações (`#depoimentos`) | 200x200 | WebP | Foto circular de cliente real para o depoimento sobre "Variedade de Produtos". |
| `depoimento-3.webp` | Avaliações (`#depoimentos`) | 200x200 | WebP | Foto circular de cliente real para o depoimento sobre "Qualidade dos Serviços". |
| `cta-final-bg.webp` | Contato / CTA Final (`#contato`) | 1920x700 | WebP | Foto de fundo aconchegante da loja com profissionais prontos para atender. |

---

## Diretrizes de Otimização para Substituição Definitiva

1. **Formato WebP Obrigatório:** Todas as fotos devem ser convertidas para o padrão `.webp` antes de sobrescrever os arquivos em `/build/assets/img/`, mantendo compressão entre 75% e 85% para tempo de carregamento inferior a 1 segundo.
2. **Favicons e Logo em PNG:** Manter canais alfa (fundo transparente) nítidos no `logo.png` e nos arquivos de favicon.
3. **Open Graph em JPG:** O arquivo `og-image.jpg` deve permanecer em formato JPEG com 1200x630 pixels para garantir compatibilidade com WhatsApp, Facebook, LinkedIn e Twitter.
4. **Nomenclatura Estrita:** Ao receber as fotos oficiais do cliente em `/06-assets-cliente/`, basta salvá-las com os nomes exatos listados na tabela acima em `/build/assets/img/`.

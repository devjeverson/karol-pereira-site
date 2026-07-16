# Karol Pereira Advocacia — Site institucional (Angular 18)

Site modernizado do escritório, feito com **Angular 18 (standalone components)**, SCSS e sem dependências de UI de terceiros.

## Como rodar

```bash
npm install
npm start        # http://localhost:4200
```

## Build de produção

```bash
npm run build
```

## Publicar no GitHub Pages

O deploy é automático via GitHub Actions. Faça push para `main` e, no repositório, configure **Settings > Pages** com a fonte **GitHub Actions**.

Se quiser disparar manualmente, use o workflow **Deploy Angular site to GitHub Pages** na aba **Actions**.

> Obs.: se o build travar tentando "inline de fontes" (erro 403 do Google Fonts em ambientes sem acesso à internet no momento do build), isso já está desativado em `angular.json` (`optimization.fonts: false`). As fontes continuam carregando normalmente no navegador via `<link>` no `index.html`.

## Estrutura

```
src/app/
  app.component.*                     -> shell da página (header, main, footer, botão flutuante)
  shared/components/
    header/           -> barra fixa, navegação e CTA de WhatsApp
    hero/              -> seção "Início", com o elemento de assinatura (cartão "processo/dossiê")
    about/             -> seção "Sobre" (texto da Dra. Karol, contato, mapa embed)
    services/          -> seção "Serviços" (áreas de atuação em cards)
    filantropia/        -> seção "Escritos e Filantropia" (lista cronológica)
    footer/             -> rodapé com redes sociais e copyright
    whatsapp-button/    -> botão flutuante fixo, canto inferior direito
```

## O que já está usando os arquivos reais

- **Logo**: `public/assets/images/logo-karol.jpg` — usada no selo do header (recortada em círculo via CSS).
- **Foto da Dra. Karol**: `public/assets/images/karol-hero.jpg` — usada no hero, com leve gradiente para o vinho escuro na base/borda para manter o texto legível.
- **Paleta**: extraída da logo (vinho quase preto `#300810` para as seções escuras, dourado `#cf9a3e` como acento).
- **Rodapé**: layout minimalista (ícones centralizados + copyright), no estilo da referência enviada — Instagram, LinkedIn e TikTok.
- **Botão do WhatsApp**: ícone atualizado (glifo mais limpo, verde oficial do WhatsApp), fixo no canto inferior direito em todas as telas.
- **Mobile-first**: menu hambúrguer abaixo de 900px, hero e seções revisadas para empilhar bem em telas pequenas — prioridade dada por conta da captação via Instagram (a maior parte do tráfego chega pelo celular).

## O que você provavelmente vai querer trocar

- **Telefone do WhatsApp**: trocar `5511999999999` em `app.component.html` (prop `phone`), `header.component.html`, `hero.component.html`, `about.component.html` e `cta-band.component.html`.
- **Links reais das redes sociais**: `footer.component.ts` (array `socials`).
- **Endereço no mapa**: `about.component.html`, troque o `src` do iframe pelo link real do Google Maps (Compartilhar → Incorporar um mapa).
- **Textos de "Escritos e Filantropia"**: `filantropia.component.ts` (array `writings`) — hoje está com conteúdo placeholder marcado com `// TODO`.
- **Favicon**: ainda é o padrão do Angular (`public/favicon.ico`) — troque pelo ícone/logo dela se quiser.

## Identidade visual

- Paleta: vinho `#6b1420` (marca), pergaminho `#f7f2e9` (fundo), dourado `#b08d57` (acento/selo) e um verde-salvia `#3f6659` como acento secundário (seções de acessibilidade/foco de teclado).
- Tipografia: **Fraunces** (títulos, serifada com personalidade), **Source Sans 3** (corpo do texto, alta legibilidade) e **IBM Plex Mono** (rótulos, datas, tags — reforça a estética de "processo/dossiê").
- Elemento de assinatura: cartões com recorte de "aba de pasta/processo", usado no hero e nos cards de serviços, remetendo ao universo jurídico sem recorrer aos clichês visuais (balança da justiça, martelo etc).
- Acessível por padrão: foco visível em todos os elementos interativos, `prefers-reduced-motion` respeitado, contraste testado no texto sobre vinho/pergaminho.

# Site CLASA — Casa Lions de Adolescentes de Santo André

Site institucional estático (HTML/CSS/JS puro, sem build).

## Estrutura

```
site/
├── index.html                 Home
├── institucional.html          Missão/Visão/Valores, ODS, Transparência, LGPD, Parceiros, Mapa
├── programas.html              SCFV, Lions Quest, Integrar, Aprendizagem
├── trabalhe-conosco.html       Benefícios + Vagas (modais de detalhe)
├── para-empresas.html          Por que contratar, Lei da Aprendizagem, especialistas
├── alugue-nosso-espaco.html    Espaço para festas, infraestrutura, galeria
├── contribua.html              PIX, Nota Fiscal Paulista, Voluntariado
├── diretoria.html              O que é o Lions Clube + Diretoria
├── faq.html                    Dúvidas frequentes (acordeão)
└── assets/
    ├── css/style.css           Todo o estilo (tokens + componentes)
    ├── js/partials.js          Cabeçalho + rodapé (editar 1 vez, vale p/ todas as páginas)
    ├── js/main.js              Carrosséis, menu mobile, modais, acordeão
    ├── img/                    Imagens
    ├── docs/                   PDFs institucionais
    └── video/                  <-- colocar institucional.mp4 aqui (ver assets/video/_LEIA.txt)
```

## Rodar localmente

```
cd site
python3 -m http.server 4599
# abrir http://localhost:4599
```

## Publicar

Suba **o conteúdo da pasta `site/`** para a raiz da hospedagem.
**Não subir:** `_figma/`, `.claude/`, `CONTEUDO-FIGMA.txt`, `LEIA-ME.md` (material de trabalho).

## Design (extraído do Figma)

- Azul `#013773` · Amarelo `#FFB812`
- Fontes Google: Alegreya SC (títulos/textos), Poppins (menu/rodapé/botões), Bebas Neue (detalhes)

## PENDENTE — precisa de informação do cliente

| Onde | O quê |
|---|---|
| `assets/js/partials.js` → `SEJA_APRENDIZ_URL` | Link do sistema/página de inscrição do Jovem Aprendiz |
| `assets/js/partials.js` → `SOCIAL` | URLs reais de Instagram, Facebook, LinkedIn, YouTube |
| `institucional.html` → 3 primeiros cards de "Documentos importantes" | PDFs dos Relatórios de Igualdade Salarial (1º/2º sem 2025, 1º sem 2026) |
| `institucional.html` → "Plano de Ação" | Confirmar se é 2025 ou 2026 (subi o 2026) |
| `index.html` → cards de Certificações ("Saiba mais") | Links das certificações CEBAS/CMDCA/CMAS (ou remover) |
| `assets/video/institucional.mp4` | Vídeo comprimido (original tem 206 MB) |
| `assets/img/parceiros-inst/inst-1..7.png` | Confirmar/ajustar logos dos parceiros institucionais |
| PDFs `relatorio-atividades-2025.pdf` (25 MB) e `plano-de-acao-2026.pdf` (30 MB) | Comprimir se possível |

## Observações / diferenças em relação ao Figma

- Legenda do logo no cabeçalho: Figma tem 3 linhas; ficou em 2 (`Casa Lions de Adolescentes / de Santo André`) pra não quebrar feio.
- Botão "?" flutuante: no Figma parece preso na borda da seção "Quem somos"; aqui é um botão fixo no canto que abre o WhatsApp (padrão web).
- Rodapé: adicionada uma linha de links (Institucional · Programas · Diretoria · Contribua · Dúvidas frequentes) que não existe no Figma — necessária pra navegação (senão FAQ/Diretoria/Contribua ficam sem acesso).
- Página `programas.html` tem um botão "Quero ser aprendiz" ao final (não está no Figma) — CTA útil; me avise se quiser remover.
- Corrigido typo do Figma: "ADOLESCENTEES" → "ADOLESCENTES".
- "Valores" no Figma estava com a lista duplicada — mantida uma vez.
- O Figma só tinha telas desktop; layout responsivo (tablet/celular) foi criado seguindo o mesmo estilo.
- Avaliações da Home: texto real do protótipo, renderizado como cards (não é integração ao vivo com o Google).
- **Baixo contraste (fiel ao Figma):** a legenda amarela do logo no cabeçalho e o rótulo "INFORMAÇÕES DA VAGA" nos modais usam amarelo `#FFB812` sobre branco — legível, mas abaixo do recomendado por acessibilidade (WCAG AA). Está assim porque é o que o Figma define. Se o cliente/designer quiser, dá pra trocar por azul-marinho.

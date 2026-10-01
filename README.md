# Prumo

Controle de gastos por ciclo de salário. Hospedado no GitHub Pages, dados no Firebase (login por e-mail e senha + Firestore).

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O app inteiro (telas, cálculos, login, cadastro, tutorial, sincronização) |
| `firebase-config.js` | Dados públicos do projeto Firebase (não muda nas atualizações) |
| `manifest.webmanifest` | Nome, cores, ícones, atalhos e capturas para instalar no Android e no iPhone |
| `sw.js` | Funcionamento offline e aviso de nova versão. Aumente `VERSAO` a cada atualização |
| `privacidade.html` | Política de privacidade (preencher nome, e-mail e data) |
| `icons/` | Ícones do app e dos atalhos |
| `telas/` | Capturas de tela mostradas na janela de instalação do Android |
| `firestore.rules` | Cópia das regras de segurança. Valem só depois de coladas no Console do Firebase |

Nunca coloque arquivos de backup (`prumo-backup-*.json`) neste repositório: ele é público.

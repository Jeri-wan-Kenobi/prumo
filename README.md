# Prumo

Controle de gastos por ciclo de salário. Hospedado no GitHub Pages, dados no Firebase (login por e-mail e senha + Firestore).

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O app inteiro (telas, cálculos, login, sincronização) |
| `firebase-config.js` | Dados públicos do projeto Firebase. Preencher no passo 5 do guia |
| `manifest.webmanifest` | Nome, cores e ícones para instalar na tela inicial |
| `sw.js` | Faz o app abrir sem internet. Aumente `VERSAO` a cada atualização |
| `icons/` | Ícones do app |
| `firestore.rules` | Cópia das regras de segurança. Elas valem só depois de coladas no Console do Firebase |

Nunca coloque arquivos de backup (`prumo-backup-*.json`) neste repositório: ele é público.

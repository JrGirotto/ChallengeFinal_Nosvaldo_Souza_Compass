# Automação de Testes de API com Cypress
---
## Sprint 5 - Tech

---
**Tecnologias utilizadas nesta Sprint:**


| Framework | O que é...| Instalação | Download / Documentação | 
|--- |--- |--- |---|
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" height="60" /> | Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web | GUI - Interface Gráfica | [Node](https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi) |
| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="50"/> | O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. | GUI - Interface Gráfica | [Visual Studio Code](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user) |
| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/128px-Github-desktop-logo-symbol.svg.png?20200316183539" height="50" /> | O GitHub Desktop é um aplicativo que permite que você interaja com o GitHub usando uma GUI em vez da linha de comando ou de um navegador web. | GUI - Interface Gráfica | [Git Hub Desktop](https://central.github.com/deployments/desktop/desktop/latest/win32) |
|<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" height="50"/>| JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. | Plugin Incluso no VSCode |[Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types) |
|<img src="https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-dark.png" height="50"/> | Cypress é um framework de testes, de código aberto e de fácil configuração. Totalmente baseado em uma nova arquitetura, isenta de outros frameworks de testes, o Cypress apresenta um painel próprio que exibe exatamente o que está acontecendo durante a execução dos testes. | Linha de Comando | [Cypress](http://www.cypress.io) |
|<img src="https://user-images.githubusercontent.com/29241659/115161869-6a017e80-a076-11eb-9bbe-c391eff410db.png" height="50"/> | O ServeRest é uma API REST gratuita que simula uma loja virtual com intuito de servir de material de estudos de testes de API. | Linha de Comando | [Serverest](http://www.serverest.dev) |

Após instalados os softwares via interface gráfica, para dar seguimento com o Cypress, temos que verificar se o Node foi instalado corretamente. Para isso digite no prompt de comando:
```
node -v
```
 Se o NODE foi instalado com sucesso aparecerá algo como: v.16.17.0

Para instalação do Cypress, crie uma pasta para o seu projeto, abra o prompt de comando **dentro da pasta criada**, e digite o seguinte comando: 
```
npm install --save-dev cypress@9.7.0
```
Esse comando, também digitado no prompt de comando, dentro da pasta do seu projeto, irá instalar a API de TESTES Serverest localmente em sua mais nova atualização:
```
npx serverest@latest
```

---

<details>
<summary>Mapa Mental - Serverest</summary>

![Mapa Mental - SERVEREST](Mapa_Mental/mapa_mental_serverest.png)

</details>

---
## Report com Cypress

Requisitos utilizados nesse projeto: (Cypress 9.7.0 - Windows - Node >14)
<br>

1 - Instale a biblioteca **cypress-mochawesome-reporter**:

```
npm i --save-dev cypress-mochawesome-reporter
```
<br>
2 - Adicione o seguinte código dentro do seu arquivo **cypress.json** para ativar a biblioteca instalada no passo acima e rodas algumas flags(configurações) para personalizar seu report:
```     
	"reporter": "cypress-mochawesome-reporter",
	"reporterOptions": {
		"reportDir": "cypress/reports/mocha",
		"reportPageTitle": "Sprint 5 - Testes Automatizados com Cypress",
		"reportTitle": "Testes Automatizados da API de estudos Serverest",
		"reportFilename": "[status]_[datetime]-[name]",
		"timestamp": "dd/mm/yyyy_HHMM",
		"charts": true,
		"overwrite": true,
		"embeddedScreenshots": true,
    	"inlineAssets": true,
    	"saveAllAttempts": false
```
3 - E por fim adicione esse import no arquivo **index.js** 

```
import 'cypress-mochawesome-reporter/register';
```
<br>

4 - Agora é só rodar o Cypress (Ele irá construir o arquivo HTML do Report em cima das SPECS encontradas)

```
npm run cy:run:prod
```
<details>
<summary>Exemplo de Report HTML Gerado:</summary>

![HTML gerado pelo Report](cypress/images/exemplo_html_%20report_readme.png)

</details>


---

## Referências
 * **_[QA Camp](https://www.youtube.com/c/QACamp), [Cypress](https://www.cypress.io), [Serverest](http://www.serverest.dev), [Wikipedia](http://www.wikipedia.com.br), [Vídeo Mochawesome Reporter](https://www.youtube.com/watch?v=aR74j4Hk0vo), [Documentação Mochawesome Reporter](https://github.com/LironEr/cypress-mochawesome-reporter)_**

---
## Créditos

* Agradecimentos à SM Larissa, Jacques e Matheus pelas dúvidas sanadas e todo acompanhamento e dedicação no projeto e também aos colegas pelas colaborações em equipe.


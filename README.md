# ui-test-cypress
## Projeto de Automação UI em Loja Ebac

URL: http://lojaebac.ebaconline.art.br/

### Cenários de Testes automatizados

#### História de usuário 1: [US-0001] – Adicionar item ao carrinho 
Critérios de aceitação:
Deve poder adicionar até 10 itens ao carrinho
Deve poder adicionar itens até o limite de R$990,00
Deve liberar cupom de 10% ao usuáro se o carrinho ficar no valor entre R$200,00 e R$600,00
Deve liberar cupom de 15% ao usuário de o valor do carrinho ficar acima de R$ 600,00

#### Cenário 1: Adicionar Item com Sucesso
Dado que esteja na galeria de produtos do site
Quando selecionar os itens e suas configurações
E adiciona-los ao carrinho
Então estes devem ser incluídos ao carrinho

#### Cenário 2: Adicionar Item sem Estoque
Dado que esteja na galeria de produtos do site
Quando selecionar os itens e suas configurações
Então deve ser informado que não há estoque

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/conradorpg/ui-automation-tcc-ebac.git
```
```
cd ui-automation-tcc-ebac
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.

### Gerando relatórios:

```
npm run cy:report  
```

Deve criar um arquivo "cypress/mochawesome-report/report.html. Basta abrir o arquivo com seu navegador preferido.


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker

-Mochawesome Report, para geração de relatórios: https://www.npmjs.com/package/mochawesome 

### Fim

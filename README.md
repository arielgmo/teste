# TradersClub

Primeiramente, parabéns por atingir nossos requisitos iniciais.

Nosso teste é simplesmente um **CRUD**, com pesquisa, listagem, criação, edição e remoção dos mesmos.

A documentação da api está disponível [neste endereço](https://tradersclubapi.docs.apiary.io/). Em caso de qualquer problema, por favor, avise-nos de imediato através do e-mail da **Juliana Barbosa** - **barbosa@tradersclub.com.br**.

As 4 telas de referência para o layout encontram-se na pasta *layout*, e consistem:

- *home.png*: A tela inicial de apresentação do teste.
- *lista-veiculos-1.png*: A tela representa uma lista e como será representada a pesquisa de veículos.
Não é necessário autocomplete no campo.
- *lista-veiculos-2.png*: A tela representa a mesma lista anterior, filtrada de forma mais precisa.
- *tela-detalhe-preenchida*: Este é o modelo de formulário de criação/edição. Note que o botão de Remoção também está representado no formulário.

As imagens como a logo do TC e a imagem do carro, estão disponíveis na pasta */src/assets/img*.
Note que também há um arquivos de CSS disponível em */src/assets/styles*. Sua função é a de disponibilizar as cores e fontes corretas para serem configuradas.

Serão avaliadas a capacidade de **organização**, **modularização**, **performance** e **entendimento** do ciclo de vida de um componente.

O teste deve ser escrito preferencialmente em *React*. No entanto, avaliaremos Angular como alternativa sem qualquer problema.


Muito obrigado e boa sorte! 
Esperamos tê-lo(a) por aqui em breve!


## Instalação

- 1 - Usar git para clonar o projeto em sua maquina.
- 2 - Instalar node.js caso não tenha na sua maquina, recomendo algum console tambem.
- 3 - Acessar o projeto de dentro do console e digitar o comando yarn install
- 4 - Usar o comando yarn start para iniciar o server(lembrando que no webpack ele está programado pra abrir na porta 8080, então a porta deve estar livre ou a config deve ser mudada no webpack)
- 5 - Assim que o server tiver sido iniciado acessar atráves de um browser a html: http://localhost:8080/, apesar que ela tambem deve abrir automaticamente quando o servidor local estiver pronto.

- Extras:
- Você pode gerar uma versão de prod com yarn build, que vai gerar um bundle só no /dist
- Eu usei para desenvolver e acho legal de usar caso não esteja habituado a usar o plugin de react e redux, para ver os componentes e as actions/store rolando em tempo real, sei que tanto o chrome quanto o firefox tem a aplicação.

## Considerações

- Reparei que vocês usaram o create react app para gerar o template inicial, resolvi fazer uma config em cima disso inves de usar o create react app, pois dessa forma acho mais facil de usar algumas configurações de preferencia minha.

- Sobre o sistema estrutura de arquivos e pastas, reparei que já tinha um sistema que vocês estavam utilizando, eu meio que já conhecia o sistema, apesar que normalmente não uso esse sistema(já debati um pouco sobre esse modelo, basicamente não gosto tanto por usar muito crtl+f do VSC para procurar arquivos) por preferencia pessoal, porem resolvi usar o mesmo sistema como era algo que já estava no projeto.

- Deixei Car Panels agrupados na estrutura do projeto por achar que faz sentido, por eles meio que se complementarem na tela, mas fiquei na duvida se deveria agrupar ou não e se eles deveriam estar dentro ou não da pasta do componente ao qual eles estão contidos os componentes na estrutura do projeto.

- Resolvi usar antd, para terminar o projeto mais rapidamente

- Usei sass, especificamente o tipo de arquivo scss para resolver o problema de ter variaveis de css que alteram as configurações de varios componentes na aplicação, sendo facil assim de mudar o "tema" da aplicação.

- Tem algumas configurações legais que são possiveis no antd tipo a de dar overwrite nos estilos do antd com less e assim você conseguiria ter seus proprios "temas" do antd, o que me pareceu muito com o que vocês tinham pedido, porem  resolvi optei por usar sass com .scss e variaveis mesmo pra resolver o problema de poder mudar os estilos num arquivo só.

- Tive problemas com a API, o ambiente com nome de production retornava um array com objetos vazio e objetos com apenas id null, então resolvi usar o ambiente do mockServer, porem em nenhum deles parecia que o Add/Edit/Remove estavam funcionando, porem programei como se eles tivessem funcionando normalmente e fazendo os requests pra API normalmente. Portanto peço que testem olhando os request na aba de network e as actions que fazem as requisições ao qual usei redux-thunk

- Uso redux-thunk porque acho que fica bom pra trabalhar com requisições async com ele, o codigo fica em um arquivo só ,fica limpo na função de request e por não ter muito gosto por redux-saga.

- A imagem de background do carro como não tem fundo transparente não fica muito boa, coloquei ela no codigo, porem eu comentei o codigo, caso queira ver entra no index.scss do MainContentContainer e descomenta

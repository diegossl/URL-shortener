# Encurtador de URL

O Encurtador de URL é uma ferramenta para transformar links de páginas web em um formato menor do que o original, facilitando o compartilhamento na internet.

## Setup

Para executar o projeto, será necessário instalar as dependências digitando o seguinte comando no terminal:

```bash
npm install
```

Finalmente, digite o seguinte comando no terminal para iniciar o servidor:

```bash
npm start
```
Agora o sistema está pronto para ser utilizado através da rota local:

[http://localhost:3000/url](http://localhost:3000/url)

Basta enviar o link que deseja encurtar para esta rota e será retornar um link compactado.

## Exemplo de entrada de dados:

Um objeto JSON contendo a URL original que será encurtada.
 
```javascript
{
  "url": "https://andrebona.com.br/por-que-o-dolar-se-tornou-a-principal-moeda-no-mercado-internacional/"
}
```
## Exemplo de saída de dados:

Um novo link encurtado.

```javascript
{
  "urlShortened": "http://127.0.0.1:3000/1593223191130"
}
```

## Licença

MIT
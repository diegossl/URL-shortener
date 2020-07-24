# URL shortener

The URL Shortener is a tool to transform web page links into a smaller format than the original, facilitating sharing on the internet.

## Setup

To execute the project, it will be necessary to install the dependencies by typing the following command in the terminal:

```bash
npm install
```

Finally, type the following command in the terminal to start the server:

```bash
npm start
```
The system is now ready to be used via the route:

[http://localhost:3000/url](http://localhost:3000/url)

Just send the link you want to shorten for this route and a compressed link will be returned.

## Example of data entry:

A JSON object containing the original URL that will be shortened.
 
```javascript
{
  "url": "https://andrebona.com.br/por-que-o-dolar-se-tornou-a-principal-moeda-no-mercado-internacional/"
}
```
## Example output:

A new shortened link.

```javascript
{
  "urlShortened": "http://127.0.0.1:3000/1593223191130"
}
```

## License

MIT

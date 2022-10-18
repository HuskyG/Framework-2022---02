const accounting = require("accounting");
const http = require("http");

const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.write(`<h1> Tax Calculator </h1>`);

    const query = url.parse(req.url, true).query;

    let subTotal = query.subTotal;
    let tax = subTotal * 0.13;
    let total = parseFloat(subTotal) + parseFloat(tax);

    res.write(`<p>Sub Total: ${accounting.formatMoney(subTotal)} </p>`);
    res.write(`<p>Tax: ${accounting.formatMoney(tax)} </p>`);
    res.write(`<p>Total: ${accounting.formatMoney(total)} </p>`);

    res.end();
  })
  .listen(3000);

console.log("Server running");

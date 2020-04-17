const http = require('http');
const httpProxy = require('http-proxy');
const url = require('url');
const zlib = require('zlib');

// Create Proxy Server
const proxy = httpProxy.createProxyServer({ target: 'http://localhost:3000' }).listen(8000);

// Create Http Server
http.createServer((req, res) => {
  // Request Url
  const urlParts = url.parse(req.url, true);

  if (urlParts.query.host) {
    global.host = urlParts.query.host;
  }

  // Proxy Params
  const option = {
    target: global.host,
    selfHandleResponse: true,
    changeOrigin: true,
    followRedirects: true,
  };

  proxy.web(req, res, option);

  // Proxy Response
  proxy.on('proxyRes', (proxyRes, _req, _res) => {
    let body = [];

    // Get body
    proxyRes.on('data', (chunk) => {
      body.push(chunk);
    });

    // Unzip body, replace data, gzip data, send data
    proxyRes.on('end', () => {
      body = Buffer.concat(body);
      // Unzip body
      zlib.unzip(body, (err, buffer) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
        body = buffer.toString();
        // replace data
        body += `<h1 style="
          position: absolute;
          top: 10%;
          left: calc(50% - 126px);
          color: blue;
          z-index: 1001;
          "> Hello world </h1>`;
        // gzip data
        const newBody = zlib.gzipSync(body);
        proxyRes.headers['content-length'] = body.length;
        // send data
        _res.writeHead(200, proxyRes.headers).end(newBody);
      });
    });
  });
}).listen(3000);

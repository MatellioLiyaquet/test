// include dependencies
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
import cors from 'cors';

const app = express();
app.use(cors());
// create the proxy
/** @type {import('http-proxy-middleware/dist/types').RequestHandler<express.Request, express.Response>} */
const exampleProxy = createProxyMiddleware({
  target: 'https://6htseqdyy2.execute-api.us-east-1.amazonaws.com/dev/api/v1/',
  changeOrigin: true, // needed for virtual hosted sites
});

// mount `exampleProxy` in web server
app.use('/api', exampleProxy);
app.listen(4000);

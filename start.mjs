import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Config
import { config as envconfig } from 'dotenv';
envconfig();
const config = require("./config.json");

// Auth
const auth = process.env['auth'] || "false";
const username = process.env['username'] || "user";
const password = process.env['password'] || "secret";
const users = {};
users[username] = password;

// Web Server
import http from 'http';
import express from 'express';
const httpPatch = http.createServer();
const app = express();
import basicAuth from 'express-basic-auth';

// GQL
import { readFile } from 'node:fs';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

// PX imports
const Corrosion = require("./corrosion/server")
import RhodiumProxy from 'Rhodium';
import createServer from '@tomphttp/bare-server-node';

const bare = createServer("/not-sus-server/" || process.env['barePath']);

const proxy = new Corrosion({
  prefix: "/co/",
  codec: "xor",
  title: "sussy",
  forceHttps: true,
  requestMiddleware: [
    Corrosion.middleware.blacklist(["accounts.google.com"], "Page is not allowed here or is not compatible"),
  ]
});

proxy.bundleScripts();

const Rhodium = new RhodiumProxy({
  encode: "xor",
  prefix: "/rho/",
  server: app,
  Corrosion: [true, proxy],
  title: "sussy"
});

Rhodium.init();

if (auth == "true") {
  app.use(basicAuth({
    users,
    challenge: true,
    unauthorizedResponse: autherror
  }));
};

function autherror(req) {
  return req.auth
    ? ("Credentials " + req.auth.user + ":" + req.auth.password + " rejected")
    : "Error"
};

let GSJson = require("./json/games.json");
let AppJson = require("./json/apps.json");

readFile("./typeDefs.graphql", "utf8", async (err, typeDefs) => {
  if(err) return console.err(err);
  try {
    const server = new ApolloServer({
      typeDefs,
      plugins: [
        ApolloServerPluginLandingPageProductionDefault()
      ],
      resolvers: {
        Query: {
          GSData: () => GSJson,
          AppData: () => AppJson,
          URIconfig: () => {
            return {
              DC: process.env['INVITE_URL'] || "https://example.com",
              WD: process.env['CHATBOX_URL'] || "example.com"
            }
          }
        }
      }
    });
    await server.start();
    app.use('/graphql', express.json(), expressMiddleware(server));
  } catch(err) {
  console.log("ERR");
  console.error(err);
  }
});

app.use(express.static('./build', {
  extensions: ["html"]
}));

app.use(express.static('./static'));

app.use(function (req, res, next) {
  if(req.url =='/graphql') return next();
  res.status(404).sendFile("404.html", { root: './build' });
});

// Bad patch for dumb issue

httpPatch.on('request', (req, res) => {
  if(bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else if(req.url.startsWith(proxy.prefix)) {
    proxy.request(req, res);
  } else if(req.url.startsWith(Rhodium.prefix)) {
    Rhodium.request(req, res);
  } else { app(req, res) };
});

httpPatch.on('upgrade', (req, socket, head) => {
  if (bare.shouldRoute(req, socket, head)) { bare.routeUpgrade(req, socket, head) } else { socket.end() }
});

httpPatch.on('listening', () => {
  const addr = httpPatch.address();

  console.log(`The Impostor created a vent from the other side on port ${addr.port}`)
  console.log('');
  console.log('You can now view it in your browser.')
  /* Code for listing IPS from website-aio */
  console.log(`Local: http://${addr.family === 'IPv6' ? `[${addr.address}]` : addr.address}:${addr.port}`);
  try { console.log(`On Your Network: http://${address.ip()}:${addr.port}`); } catch (err) {/* Can't find LAN interface */ };
  if (process.env.REPL_SLUG && process.env.REPL_OWNER) console.log(`Replit: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
});

httpPatch.listen({ port: (process.env.PORT || config.port) });
# Hello gRPC !

Hello gRPC is a simple NodeJS Backend that uses gRPC as a communication protocol. Its main purpose is to get familiarized with this technology and serve as a boilerplate.

- [Hello gRPC !](#hello-grpc-)
  - [Features](#features)
  - [Installation](#installation)
  - [Env keys](#env-keys)
  - [Run](#run)
    - [Server](#server)
    - [Client](#client)
  - [ES6 support](#es6-support)

## Features

- Server launch
- Client launch
- Protobuf definition
- ES6 support

## Installation

```bash
npm install
```

## Env keys

```bash
SERVER_URL = "YOUR_IP:YOUR_PORT" # Mine was "0.0.0.0:50051"
```

## Run

### Server

```bash
npm start
```

### Client

This is a simple JavaScript client that tests Hello proto and comes bundled with this project.

```bash
npm run client:hello
```

## ES6 support

The usage of features like `import` and `export` is possible thanks to [Babel](https://babeljs.io/). You can find the [configuration file](.babelrc) in the root directory of the project.

The [steps to follow](https://mugan86.medium.com/configurar-babel-en-nodejs-525fd101990b) are:

1. Install the dependencies

```bash
npm install -D @babel/core @babel/cli @babel/node @babel/preset-env
```

2. Create a `.babelrc` file in the root directory of the project

```json
{
  "presets": ["@babel/preset-env"]
}
```

3. Add proper scripts to `package.json`

```json
{
  "scripts": {
    "start": "babel-node src/server.js",
    "client:hello": "babel-node src/client.js"
  }
}
```

4. Enjoy! :)

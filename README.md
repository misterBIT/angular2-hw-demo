# Angular 2 workshop seed app - Day 2 Homework solution 
the last 3 commits (past the update commit) are interesting for you to check one by one.


## Prerequisites

Node.js and npm are essential to Angular 2 development. 

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm. (not avilable for windows, other similar solutions exist) 

 WINDOWS ONLY run to install dependencies as global 
    npm install -g webpack webpack-dev-server typings typescript 
    
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `typings install`

The `npm start` command uses webpack (w/ dev-server) to run the applicaiton
Shut it down manually with Ctrl-C.

You're ready to write your application.

### npm scripts

npm scripts defined in the `package.json`:

* `npm start` - runs the webpack compiler w/ dev-server, compiles changes delta to in memory-fs on the fly.
* `npm run build` - runs the webpack compiler to create production artifacts in dist folder.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.

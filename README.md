# JavaScript Monorepo

Experimental build of JavaScript monorepo setup with [Lerna](https://github.com/lerna/lerna) workspaces.

## Development

```
npm install -g lerna
git clone git@github.com:mseimys/js-monorepo.git
cd js-monorepo
lerna bootstrap
```

This should install all npm dependencies and symlink the modules between themselves so you would get the following structure:

```
~/code/js-monorepo (master) $ tree -L 4
.
├── README.md
├── lerna.json
├── package-lock.json
├── package.json
├── packages
│   ├── package-a
│   │   ├── index.js
│   │   ├── node_modules
│   │   │   └── lodash
│   │   ├── package-lock.json
│   │   └── package.json
│   ├── package-b
│   │   ├── node_modules
│   │   │   ├── lodash
│   │   │   └── moment
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── src
│   │       └── index.js
│   └── package-c
│       ├── node_modules
│       │   └── @js-monorepo
│       │       ├── package-a -> ../../../package-a
│       │       └── package-b -> ../../../package-b
│       ├── package.json
│       └── src
│           └── index.js
└── webpack.config.js
```

## Source of Inspiration

Inspiration for the JavaScript monorepos: https://www.youtube.com/watch?v=7Lr8xYPKG5w

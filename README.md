# Guitar Modes

## Getting Started
```
cp sample.env .env
npm install
```

## Local development with HMR
```
npm start
```

## Production build
- Set NODE_ENV=production to enable the service worker.
- This also uses Chromium to pre-render the entire React app and allows the client to be Hydrated (as if it were rendered using SSR).
```
npm run build
OR
npm run clean-and-build
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

License
-------

Modes is © 2019 Francois Laubscher.
It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE.md) file.

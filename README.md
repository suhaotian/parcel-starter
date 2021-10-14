# Parcel Starter

For Node.js backend development and React development with parcel latest version. 

`development`:

```
yarn start
```

`build`:

```
yarn build
```

## Error

if run:

```
yarn parcel --target client
```

`Cannot read property 'env' of undefined`

So here we have hack in the scripts `"start:client": "parcel serve client/index.html --dist-dir dist/client-dev/ --open chrome"`, only use the target in watch or build.

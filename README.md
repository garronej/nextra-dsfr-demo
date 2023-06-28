# Nextra Docs Template 

This is a template for creating documentation with [Nextra](https://nextra.site) using the [DSFR theme](https://github.com/codegouvfr/react-dsfr).

[**Live Demo →**](https://nextra.react-dsfr.fr)

## Local Development

```bash
git clone https://github.com/codegouvfr/nextra-dsfr-demo
cd nextra-dsfr-demo
yarn
yarn dev
```

## Experimenting with the default theme

If you want to put `console.log()` in the default documentation theme (`nextra-theme-docs`)
for understanding how nextra work:  

To experiment with the default `nextra-theme-docs`:  

```bash
cd ~/github
git clone https://github.com/shuding/nextra
cd nextra
pnpm install
cd packages/nextra-theme-docs
pnpm dev

# Open a new terminal

cd ~/github
git clone https://github.com/garronej/nextra-dsfr-demo
cd nextra-dsfr-demo
# Edit next.config.js to have "theme": "nextra-theme-docs" (Instead of nextra-theme-dsfr)
yarn 
yarn add nextra-theme-docs
rm -rf .next && rm -rf node_modules/nextra-theme-docs/dist && cp -r ../nextra/packages/nextra-theme-docs/dist node_modules/nextra-theme-docs/dist

# Each time you change the sources of ../nextra/packages/nextra-theme-docs/src/* you must re-run
# the last command.  
```

## License

This project is licensed under the MIT License.

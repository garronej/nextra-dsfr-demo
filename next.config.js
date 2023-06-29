const withNextra = require("nextra")({
  //theme: 'nextra-theme-docs',
  "theme": "@codegouvfr/nextra-theme-dsfr",
  "themeConfig": "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
  "experimental": {
    "appDir": true
  },
  */
  "webpack": config => {
    config.module.rules.push({
      "test": /\.woff2$/,
      "type": "asset/resource"
    });
    return config;
  },
  "transpilePackages": [
    "@codegouvfr/nextra-theme-dsfr",
    "@codegouvfr/react-dsfr",
    "tss-react"
  ]
};

module.exports = withNextra(nextConfig);

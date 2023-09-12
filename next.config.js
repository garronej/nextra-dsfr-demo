import nextra from "nextra";

const withNextra = nextra({
  //"theme": 'nextra-theme-docs',
  "theme": "@codegouvfr/nextra-theme-dsfr",
  "themeConfig": "./theme.config.tsx",
});

/** @type {import('next').NextConfig} */
 const nextConfig = {
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

export default withNextra(nextConfig);


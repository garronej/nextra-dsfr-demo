const withNextra = require("nextra")({
  //theme: 'nextra-theme-docs',
  "theme": "nextra-theme-dsfr-docs",
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
  "transpilePackages": ["nextra-theme-dsfr-docs", "@codegouvfr/react-dsfr", "tss-react"]
};

module.exports = withNextra(nextConfig);

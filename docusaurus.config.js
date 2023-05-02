// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const rcaronLanguageGrammar = require('./submodules/rcaron-vscode/syntaxes/rcaron.tmLanguage.json');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RCaron',
  tagline: 'RCaron Documentation',
  url: 'https://rcaron.jan0660.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jan0660', // Usually your GitHub org/user name.
  projectName: 'rcaron-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          editUrl:
            'https://github.com/Jan0660/rcaron-docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'docusaurus-preset-shiki-twoslash',
      {
        themes: ["min-light", "dark-plus"],
        langs: [
          {
            id: "rcaron",
            scopeName: "source.rcaron",
            grammar: rcaronLanguageGrammar,
          },
          "csharp",
        ]
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RCaron',
        logo: {
          alt: 'A lowercase r with a caron',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Jan0660/RCaron',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;

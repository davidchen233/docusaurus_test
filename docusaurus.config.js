// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dream UI",
  tagline: "The Dream UI Library",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Dream UI",
        logo: {
          alt: "Dream UI Logo",
          src: "img/logo.png",
        },
        // Navbar Items
        items: [
          {
            type: "doc",
            docId: "getting_started",
            position: "left",
            label: "Getting Started",
          },
          {
            type: "doc",
            docId: "design/intro",
            position: "left",
            label: "Design",
          },
          {
            type: "doc",
            docId: "development/startup",
            position: "left",
            label: "Development",
          },
          {
            type: "doc",
            docId: "library/overview",
            position: "left",
            label: "Library",
          },
          {
            type: "doc",
            docId: "faq",
            position: "left",
            label: "FAQ",
          },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [],
        // 這行註解掉才可以調整footerbar樣式
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Dream UI, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // darkTheme: require('prism-react-renderer/themes/github'),
      },
      // 設定預設樣式
      // colorMode: {
      //   defaultMode: 'dark',
      //   disableSwitch: false,
      //   respectPrefersColorScheme: false,
      // },
    }),
};

module.exports = config;

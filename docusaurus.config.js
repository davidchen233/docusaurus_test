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
  /**
   * -根網域設定
   * 此處須設定為網域名稱
   */
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  /**
   * -根路徑設定
   * 如果Deploy到GitHubPage
   * 須將此處改為Repo的名稱
   * 如未來會直接上線到網站
   * 則要把此處改為"/"
   */
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
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
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
            className: "header-github-link",
            "aria-label": "GitHub repository",
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
      /**
       *  ?TODO：目前研究結果。搜尋引擎需等build完取得sitemap後，才能將索引資料傳至algolia
       * */
      algolia: {
        appId: "8ZEJUY8QUY",
        apiKey: "27774d33ab2ee31af8adf90bf9d731bc",
        indexName: "LION_docusarus_test",
        contextualSearch: true,
        // replaceSearchResultPathname: {
        //   from: '/docs/', // 也可使用正規表達式: /\/docs\//
        //   to: '/',
        // },
      },
    }),
};

module.exports = config;

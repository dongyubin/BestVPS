// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '文武VPS测评',
  tagline: '收录国内和国外VPS、云服务器、独立服务器的优惠活动、测评体验、使用教程的网站',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bestvps.wwkejishe.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          //   // Please change this to your repo.
          //   // Remove this to remove the "edit this page" links.
          //   editUrl:
          //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/vps-social-card.png',
      metadata: [
        {
          name: 'google-site-verification',
          content: 'r3PADZr3-uDSLp-RCbOG6fyR7HHK-U5Iob2OYLbnAOA',
        },
      ],
      navbar: {
        title: '文武VPS测评',
        logo: {
          alt: '文武VPS测评 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/dongyubin/Free-AppleId-Serve',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '文武科技柜',
                href: 'https://www.wangdu.site',
              },
              {
                label: '免费共享Shadowrocket（小火箭）账号',
                href: 'https://github.com/dongyubin/Free-AppleId-Serve',
              },
              {
                label: 'IPTV直播源+播放工具',
                href: 'https://www.wangdu.site/software/av-read/339.html'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wwkjs666',
              },
            ],
          },
          {
            title: 'Category',
            items: [
              {
                label: '选购VPS指南',
                to: '/docs/category/选购指南',
              },
              {
                label: '国内VPS',
                to: '/docs/category/国内vps',
              },
              {
                label: '国外VPS',
                to: '/docs/category/国外vps',
              },
              {
                label: '稳定机场',
                to: '/docs/category/稳定机场',
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dongyubin/Free-AppleId-Serve',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

    }),

  scripts: [
    {
      src: 'https://font.wangdu.site/script.js',
      async: false,
      defer: true,
      'data-website-id': '973537a7-1193-4e77-855e-326b4b79dd1e',
    },
  ],
};

export default config;

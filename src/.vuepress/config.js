const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vuepress template",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    nav: [
      {
        text: 'Getting started',
        link: '/getting_started/0_getting_started/',
      },
      {
        text: 'Developer docs',
        link: '/developer_docs/3_developer_docs/0_developer_docs',
      },
      {
        text: 'Vuepress',
        link: 'https://v1.vuepress.vuejs.org/',
      },
    ],

    sidebar: {
      // This part of the sidebar will only show on the "getting_started" tab.
      '/getting_started/': [
        {
          title: 'Getting started',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            ['0_getting_started/', 'Getting Started'],
            '0_getting_started/1_FAQ',
          ]
        },
        {
          title: 'More docs',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '1_more_docs/0_more_docs',
          ]
        }
      ],
      
      // This part of the sidebar will only show on the "developer_docs" tab.
      '/developer_docs/': [
        {
          title: 'Developer docs',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '3_developer_docs/0_developer_docs',
            '3_developer_docs/1_more_developer_docs',
          ]
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}